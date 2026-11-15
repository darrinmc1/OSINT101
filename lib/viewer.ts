import { hasClerkPublishableKey } from "@/lib/clerk"
import { entitlementCovers, parseEntitlement, type Entitlement } from "@/lib/entitlements"
import { supabaseAdmin } from "@/lib/supabase"

export interface Viewer {
  userId: string | null
  email: string | null
  entitlement: Entitlement
  /** Clerk publishable and secret keys are both set. */
  accountsConfigured: boolean
}

export type AccessDecision =
  | { status: "allowed"; viewer: Viewer }
  | { status: "sign_in"; viewer: Viewer }
  | { status: "coming_soon"; viewer: Viewer }

const SIGNED_OUT: Viewer = {
  userId: null,
  email: null,
  entitlement: "free",
  accountsConfigured: false,
}

function emailFromClaims(claims: unknown): string | null {
  if (!claims || typeof claims !== "object") return null
  const record = claims as Record<string, unknown>
  const email = record.email ?? record.primary_email
  return typeof email === "string" && email.includes("@") ? email : null
}

export async function getViewer(): Promise<Viewer> {
  const accountsConfigured = hasClerkPublishableKey() && Boolean(process.env.CLERK_SECRET_KEY)
  if (!accountsConfigured) return { ...SIGNED_OUT, accountsConfigured: false }

  try {
    const { auth } = await import("@clerk/nextjs/server")
    const session = await auth()
    if (!session.userId) {
      return { ...SIGNED_OUT, accountsConfigured: true }
    }
    const email = emailFromClaims(session.sessionClaims)
    const entitlement = await ensureProfile(session.userId, email)
    return { userId: session.userId, email, entitlement, accountsConfigured: true }
  } catch (error) {
    console.error("[viewer] auth lookup failed", error)
    return { ...SIGNED_OUT, accountsConfigured: true }
  }
}

async function ensureProfile(userId: string, email: string | null): Promise<Entitlement> {
  if (!supabaseAdmin) return "free"
  const { data, error } = await supabaseAdmin
    .from("profiles")
    .select("entitlement, email")
    .eq("user_id", userId)
    .maybeSingle()

  if (error) {
    console.error("[viewer] profile read failed", error.message)
    return "free"
  }

  if (!data) {
    const { error: insertError } = await supabaseAdmin.from("profiles").insert({
      user_id: userId,
      email,
      entitlement: "free",
    })
    if (insertError) console.error("[viewer] profile insert failed", insertError.message)
    return "free"
  }

  if (email && data.email !== email) {
    await supabaseAdmin.from("profiles").update({ email, updated_at: new Date().toISOString() }).eq("user_id", userId)
  }

  return parseEntitlement(data.entitlement)
}

/**
 * Free lessons, the Case File, the two free PDFs and the two free briefings
 * need a signed-in account. Paid items stay locked unless the stored
 * entitlement covers them. A missing row is free. There is no checkout.
 */
export function decideAccess(viewer: Viewer, required: Entitlement): AccessDecision {
  if (viewer.userId && entitlementCovers(viewer.entitlement, required)) {
    return { status: "allowed", viewer }
  }
  if (required === "free") return { status: "sign_in", viewer }
  return { status: "coming_soon", viewer }
}

export type UsageEventType =
  | "module_view"
  | "briefing_view"
  | "download"
  | "case_file_view"
  | "resource_view"

export async function recordUsage(
  viewer: Viewer,
  eventType: UsageEventType,
  resourceId: string,
  path: string
): Promise<void> {
  if (!viewer.userId || !supabaseAdmin) return
  const { error } = await supabaseAdmin.from("usage_events").insert({
    user_id: viewer.userId,
    event_type: eventType,
    resource_id: resourceId,
    path,
  })
  if (error) console.error("[usage] insert failed", error.message)
}

export function isAdmin(viewer: Viewer): boolean {
  if (!viewer.email) return false
  const allow = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
  return allow.includes(viewer.email.toLowerCase())
}
