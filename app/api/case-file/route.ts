import { NextRequest, NextResponse } from "next/server"
import { createCaseFile, isCaseFileRefusal } from "@/lib/case-file"

const rateLimit = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 8

function rateLimited(ip: string) {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.reset) {
    rateLimit.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_PER_WINDOW
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const { query, acceptedDisclaimer } = body as {
    query?: unknown
    acceptedDisclaimer?: unknown
  }

  if (acceptedDisclaimer !== true) {
    return NextResponse.json(
      { refused: true, reason: "ethics", message: "Accept the ethics and OPSEC disclaimer to generate a plan." },
      { status: 400 }
    )
  }

  const result = await createCaseFile(query)
  if (isCaseFileRefusal(result)) {
    return NextResponse.json(result, { status: result.reason === "invalid" ? 400 : 403 })
  }

  return NextResponse.json(result)
}
