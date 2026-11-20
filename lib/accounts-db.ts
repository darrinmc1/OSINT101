import { neon } from "@neondatabase/serverless"

/** Empire HQ project id. Never open an accounts connection that names it. */
const BLOCKED_PROJECT = "radlwbqfzrzmgdldyifi"

export interface AccountsDb {
  query<T = Record<string, unknown>>(text: string, params?: unknown[]): Promise<T[]>
}

let cachedUrl: string | null | undefined
let cached: AccountsDb | null | undefined

export function accountsDatabaseUrl(): string | null {
  const url = process.env.ACCOUNTS_DATABASE_URL?.trim() ?? ""
  if (!url || url.includes(BLOCKED_PROJECT)) return null
  return url
}

function rowsFrom<T>(result: unknown): T[] {
  if (Array.isArray(result)) return result as T[]
  if (result && typeof result === "object" && "rows" in result && Array.isArray((result as { rows: unknown }).rows)) {
    return (result as { rows: T[] }).rows
  }
  return []
}

/** Null when the URL is missing or names the blocked project. Callers no-op. */
export function getAccountsDb(): AccountsDb | null {
  const url = accountsDatabaseUrl()
  if (cached !== undefined && cachedUrl === url) return cached
  cachedUrl = url
  if (!url) {
    cached = null
    return null
  }
  const sql = neon(url)
  cached = {
    async query<T>(text: string, params: unknown[] = []) {
      const result = await sql.query(text, params)
      return rowsFrom<T>(result)
    },
  }
  return cached
}

/** Tests change the URL between cases. Production does not call this. */
export function resetAccountsDbCache(): void {
  cached = undefined
  cachedUrl = undefined
}
