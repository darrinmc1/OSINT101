import { NextRequest, NextResponse } from "next/server"
import { sendContactToHq } from "@/lib/hq-contact"

const rateLimit = new Map<string, { count: number; reset: number }>()
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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
  const { name, email, message, website } = body as {
    name?: string
    email?: string
    message?: string
    website?: string
  }

  if (website && website !== "") {
    return NextResponse.json({ ok: true })
  }

  const cleanName = (name ?? "").trim()
  const cleanEmail = (email ?? "").trim()
  const cleanMessage = (message ?? "").trim()

  if (!cleanName || cleanName.length > 120) {
    return NextResponse.json({ error: "Add your name." }, { status: 400 })
  }
  if (!cleanEmail || !emailRe.test(cleanEmail) || cleanEmail.length > 200) {
    return NextResponse.json({ error: "That email does not look usable." }, { status: 400 })
  }
  if (cleanMessage.length < 10 || cleanMessage.length > 5000) {
    return NextResponse.json(
      { error: "Message needs a few sentences, not a novel or a blank stare." },
      { status: 400 },
    )
  }

  const sent = await sendContactToHq({
    name: cleanName,
    email: cleanEmail,
    message: cleanMessage,
  })
  if (!sent) {
    return NextResponse.json(
      { error: "The message did not go through. Try again in a minute." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
