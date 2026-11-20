import { cookies } from "next/headers"
import { getAccountsDb } from "@/lib/accounts-db"
import { ensureProfile, insertUsageEvent } from "@/lib/accounts"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { entitlementCovers, type AccessNeed, type Entitlement } from "@/lib/entitlements"
import type { UsageEventType } from "@/lib/usage-types"

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
  // Touch the request cookies so a signed-in visit is not frozen as the signed-out build.
  cookies()
  const accountsConfigured = hasClerkPublishableKey() && Boolean(process.env.CLERK_SECRET_KEY)
  if (!accountsConfigured) return { ...SIGNED_OUT, accountsConfigured: false }

  try {
    const { auth, currentUser } = await import("@clerk/nextjs/server")
    const session = await auth()
    if (!session.userId) {
      return { ...SIGNED_OUT, accountsConfigured: true }
    }
    let email = emailFromClaims(session.sessionClaims)
    if (!email) {
      try {
        const user = await currentUser()
        email = user?.primaryEmailAddress?.emailAddress ?? null
      } catch {
        email = null
      }
    }
    const db = getAccountsDb()
    const entitlement = db ? await ensureProfile(db, session.userId, email) : "free"
    return { userId: session.userId, email, entitlement, accountsConfigured: true }
  } catch {
    console.error("[viewer] auth lookup failed")
    return { ...SIGNED_OUT, accountsConfigured: true }
  }
}

/**
 * Free lessons, the Case File, and the free PDF need a signed-in account.
 * Paid items stay locked unless the stored entitlement covers them.
 * A missing row is free. There is no checkout.
 */
export function decideAccess(viewer: Viewer, required: AccessNeed): AccessDecision {
  if (viewer.userId && entitlementCovers(viewer.entitlement, required)) {
    return { status: "allowed", viewer }
  }
  if (required === "free") return { status: "sign_in", viewer }
  return { status: "coming_soon", viewer }
}

export async function recordUsage(
  viewer: Viewer,
  eventType: UsageEventType,
  resourceId: string,
  path: string
): Promise<void> {
  const db = getAccountsDb()
  if (!viewer.userId || !db) return
  await insertUsageEvent(db, viewer.userId, eventType, resourceId, path)
}

export function isAdmin(viewer: Viewer): boolean {
  if (!viewer.email) return false
  const allow = (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
  return allow.includes(viewer.email.toLowerCase())
}
