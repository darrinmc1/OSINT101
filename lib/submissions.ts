import type { AccountsDb } from "./accounts-db"
import { getAccountsDb } from "./accounts-db"

/** Shown when ACCOUNTS_DATABASE_URL is missing or names the blocked project. */
export const SUBMISSIONS_DB_ERROR =
  "We couldn't save that just now. Please try again."

export interface FeedbackWrite {
  site: string
  category: string
  rating: number
  message: string
  page: string | null
  pageUrl: string | null
  email: string | null
  ipAddress: string
  feedbackType: string
  status: string
}

export interface SubscriberWrite {
  site: string
  email: string
  name: string | null
  source: string | null
}

function logDbError(scope: string, error: unknown) {
  const raw = error instanceof Error ? error.message : "failed"
  const message = raw.replace(/postgres(?:ql)?:\/\/\S+/gi, "[redacted]").slice(0, 180)
  console.error(`[submissions] ${scope} failed`, message)
}

/**
 * Null when the accounts database is unset or the URL contains the blocked
 * project id. Callers return SUBMISSIONS_DB_ERROR and do not write.
 */
export function openSubmissionsDb(): AccountsDb | null {
  return getAccountsDb()
}

export async function insertFeedback(db: AccountsDb, input: FeedbackWrite): Promise<boolean> {
  try {
    await db.query(
      `insert into public.feedback
         (site, category, rating, message, page, page_url, email, ip_address, feedback_type, status)
       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [
        input.site,
        input.category,
        input.rating,
        input.message,
        input.page,
        input.pageUrl,
        input.email,
        input.ipAddress,
        input.feedbackType,
        input.status,
      ]
    )
    return true
  } catch (error) {
    logDbError("feedback", error)
    return false
  }
}

export async function upsertSubscriber(db: AccountsDb, input: SubscriberWrite): Promise<boolean> {
  try {
    await db.query(
      `insert into public.subscribers (site, email, name, source)
       values ($1, $2, $3, $4)
       on conflict (site, email) do update set
         name = excluded.name,
         source = excluded.source`,
      [input.site, input.email, input.name, input.source]
    )
    return true
  } catch (error) {
    logDbError("subscribe", error)
    return false
  }
}
