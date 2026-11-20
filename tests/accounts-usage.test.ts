import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import test from "node:test"
import { PGlite } from "@electric-sql/pglite"
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto"
import { ensureProfile, insertUsageEvent, readAdminUsage } from "../lib/accounts"
import { getAccountsDb, resetAccountsDbCache, type AccountsDb } from "../lib/accounts-db"

const migrationPath = path.join(
  process.cwd(),
  "supabase/migrations/20261120000000_accounts_usage.sql"
)

function adapter(pg: PGlite): AccountsDb {
  return {
    async query<T>(text: string, params: unknown[] = []) {
      const result = await pg.query(text, params as never[])
      return result.rows as T[]
    },
  }
}

test("profile create, usage event, and admin count use the migration", async () => {
  const pg = new PGlite({ extensions: { pgcrypto } })
  await pg.exec(readFileSync(migrationPath, "utf8"))
  const db = adapter(pg)

  const entitlement = await ensureProfile(db, "user_learner", "learner@example.com")
  assert.equal(entitlement, "free")

  const stored = await insertUsageEvent(
    db,
    "user_learner",
    "module_view",
    "osint-fundamentals",
    "/modules/osint-fundamentals"
  )
  assert.equal(stored, true)

  const usage = await readAdminUsage(db)
  assert.ok(usage)
  assert.equal(usage.userCount, 1)
  assert.deepEqual(usage.entitlements, ["free"])
  assert.equal(usage.events.length, 1)
  assert.equal(usage.events[0]?.event_type, "module_view")
  assert.equal(usage.events[0]?.resource_id, "osint-fundamentals")
  assert.equal(usage.events[0]?.user_id, "user_learner")

  await pg.close()
})

test("accounts database stays closed when the URL is missing or names the blocked project", () => {
  const previous = process.env.ACCOUNTS_DATABASE_URL
  try {
    delete process.env.ACCOUNTS_DATABASE_URL
    resetAccountsDbCache()
    assert.equal(getAccountsDb(), null)

    process.env.ACCOUNTS_DATABASE_URL = "postgresql://accounts.example/radlwbqfzrzmgdldyifi"
    resetAccountsDbCache()
    assert.equal(getAccountsDb(), null)
  } finally {
    if (previous === undefined) delete process.env.ACCOUNTS_DATABASE_URL
    else process.env.ACCOUNTS_DATABASE_URL = previous
    resetAccountsDbCache()
  }
})
