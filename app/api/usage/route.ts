import { NextRequest, NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs/server"
import { supabaseAdmin } from "@/lib/supabase"

export const dynamic = "force-dynamic"

function cleanPath(value: unknown): string | null {
  if (typeof value !== "string") return null
  const path = value.split("?")[0]?.split("#")[0] ?? ""
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("..")) return null
  if (path.length > 180) return null
  return path
}

export async function POST(req: NextRequest) {
  if (!process.env.CLERK_SECRET_KEY || !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.json({ ok: true, stored: false, reason: "auth_not_configured" })
  }

  let userId: string | null = null
  try {
    const session = await auth()
    userId = session.userId
  } catch {
    return NextResponse.json({ ok: true, stored: false, reason: "auth_unavailable" })
  }
  if (!userId) {
    return NextResponse.json({ ok: true, stored: false, reason: "signed_out" })
  }

  const body = await req.json().catch(() => ({}))
  const path = cleanPath((body as { path?: unknown }).path)
  if (!path) {
    return NextResponse.json({ ok: false, error: "Bad path" }, { status: 400 })
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ ok: true, stored: false, reason: "database_not_configured" })
  }

  let email: string | null = null
  try {
    const user = await currentUser()
    email = user?.primaryEmailAddress?.emailAddress ?? null
  } catch {
    email = null
  }

  const now = new Date().toISOString()
  const profile = await supabaseAdmin.from("profiles").upsert(
    { user_id: userId, email, last_seen_at: now },
    { onConflict: "user_id" }
  )
  const event = await supabaseAdmin.from("usage_events").insert({ user_id: userId, path })

  if (profile.error || event.error) {
    return NextResponse.json({ ok: true, stored: false, reason: "table_missing" })
  }

  return NextResponse.json({ ok: true, stored: true })
}
