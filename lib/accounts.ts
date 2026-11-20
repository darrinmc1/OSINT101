import type { AccountsDb } from "./accounts-db"
import { parseEntitlement, type Entitlement } from "./entitlements"
import type { UsageEventType } from "./usage-types"

export interface UsageEventRow {
  id: string
  user_id: string
  event_type: string
  resource_id: string
  path: string | null
  created_at: string | Date
}

export interface AdminUsage {
  userCount: number
  entitlements: string[]
  events: UsageEventRow[]
}

function logDbError(scope: string, error: unknown) {
  const raw = error instanceof Error ? error.message : "failed"
  const message = raw.replace(/postgres(?:ql)?:\/\/\S+/gi, "[redacted]").slice(0, 180)
  console.error(`[accounts] ${scope} failed`, message)
}

/** Insert a free profile, or return the entitlement already stored. */
export async function ensureProfile(
  db: AccountsDb,
  userId: string,
  email: string | null
): Promise<Entitlement> {
  try {
    const rows = await db.query<{ entitlement: string }>(
      `insert into public.profiles (user_id, email, entitlement)
       values ($1, $2, 'free')
       on conflict (user_id) do update set
         email = coalesce(excluded.email, public.profiles.email),
         updated_at = now()
       returning entitlement`,
      [userId, email]
    )
    return parseEntitlement(rows[0]?.entitlement)
  } catch (error) {
    logDbError("profile", error)
    return "free"
  }
}

export async function insertUsageEvent(
  db: AccountsDb,
  userId: string,
  eventType: UsageEventType,
  resourceId: string,
  path: string
): Promise<boolean> {
  try {
    await db.query(
      `insert into public.usage_events (user_id, event_type, resource_id, path)
       values ($1, $2, $3, $4)`,
      [userId, eventType, resourceId, path]
    )
    return true
  } catch (error) {
    logDbError("usage", error)
    return false
  }
}

export async function readAdminUsage(db: AccountsDb): Promise<AdminUsage | null> {
  try {
    const [counts, entitlements, events] = await Promise.all([
      db.query<{ count: number | string }>(`select count(*)::int as count from public.profiles`),
      db.query<{ entitlement: string }>(`select entitlement from public.profiles`),
      db.query<UsageEventRow>(
        `select id::text as id, user_id, event_type, resource_id, path, created_at
         from public.usage_events
         order by created_at desc
         limit 40`
      ),
    ])
    return {
      userCount: Number(counts[0]?.count ?? 0),
      entitlements: entitlements.map((row) => row.entitlement),
      events,
    }
  } catch (error) {
    logDbError("admin", error)
    return null
  }
}
