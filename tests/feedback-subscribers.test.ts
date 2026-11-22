import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import path from "node:path"
import test from "node:test"
import { PGlite } from "@electric-sql/pglite"
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto"
import { getAccountsDb, resetAccountsDbCache, type AccountsDb } from "../lib/accounts-db"
import {
  insertFeedback,
  SUBMISSIONS_DB_ERROR,
  upsertSubscriber,
  openSubmissionsDb,
} from "../lib/submissions"

const migrationPath = path.join(
  process.cwd(),
  "supabase/migrations/20261120120000_feedback_subscribers.sql"
)

function adapter(pg: PGlite): AccountsDb {
  return {
    async query<T>(text: string, params: unknown[] = []) {
      const result = await pg.query(text, params as never[])
      return result.rows as T[]
    },
  }
}

test("feedback insert and subscriber upsert use the migration", async () => {
  const sql = readFileSync(migrationPath, "utf8")
  assert.match(sql, /create table if not exists public\.feedback/i)
  assert.match(sql, /create table if not exists public\.subscribers/i)

  const pg = new PGlite({ extensions: { pgcrypto } })
  await pg.exec(sql)
  const db = adapter(pg)

  const message = "quote '); drop table public.feedback; -- still a report"
  const saved = await insertFeedback(db, {
    site: "osint101",
    category: "Bug",
    rating: 2,
    message,
    page: "/modules/osint-fundamentals",
    pageUrl: "https://osint101.example/modules/osint-fundamentals",
    email: "learner@example.com",
    ipAddress: "203.0.113.8",
    feedbackType: "bug",
    status: "new",
  })
  assert.equal(saved, true)

  const feedback = await db.query<{
    site: string
    category: string
    rating: number
    message: string
    page: string
    page_url: string
    email: string
    ip_address: string
    feedback_type: string
    status: string
  }>(
    `select site, category, rating, message, page, page_url, email, ip_address, feedback_type, status
     from public.feedback`
  )
  assert.equal(feedback.length, 1)
  assert.equal(feedback[0]?.site, "osint101")
  assert.equal(feedback[0]?.category, "Bug")
  assert.equal(feedback[0]?.rating, 2)
  assert.equal(feedback[0]?.message, message)
  assert.equal(feedback[0]?.page, "/modules/osint-fundamentals")
  assert.equal(feedback[0]?.page_url, "https://osint101.example/modules/osint-fundamentals")
  assert.equal(feedback[0]?.email, "learner@example.com")
  assert.equal(feedback[0]?.ip_address, "203.0.113.8")
  assert.equal(feedback[0]?.feedback_type, "bug")
  assert.equal(feedback[0]?.status, "new")

  const tables = await db.query<{ tablename: string }>(
    `select tablename from pg_tables where schemaname = 'public' and tablename = 'feedback'`
  )
  assert.equal(tables.length, 1)

  assert.equal(
    await upsertSubscriber(db, {
      site: "osint101",
      email: "learner@example.com",
      name: "Ada",
      source: "website",
    }),
    true
  )
  assert.equal(
    await upsertSubscriber(db, {
      site: "osint101",
      email: "learner@example.com",
      name: "Ada Lovelace",
      source: "popup",
    }),
    true
  )

  const subscribers = await db.query<{ site: string; email: string; name: string; source: string }>(
    `select site, email, name, source from public.subscribers`
  )
  assert.equal(subscribers.length, 1)
  assert.equal(subscribers[0]?.site, "osint101")
  assert.equal(subscribers[0]?.email, "learner@example.com")
  assert.equal(subscribers[0]?.name, "Ada Lovelace")
  assert.equal(subscribers[0]?.source, "popup")

  await pg.close()
})

test("submissions stay closed when the accounts URL is missing or names the blocked project", () => {
  const previous = process.env.ACCOUNTS_DATABASE_URL
  try {
    delete process.env.ACCOUNTS_DATABASE_URL
    resetAccountsDbCache()
    assert.equal(getAccountsDb(), null)
    assert.equal(openSubmissionsDb(), null)
    assert.equal(
      SUBMISSIONS_DB_ERROR,
      "We couldn't save that just now. Please try again."
    )

    process.env.ACCOUNTS_DATABASE_URL = "postgresql://accounts.example/radlwbqfzrzmgdldyifi"
    resetAccountsDbCache()
    assert.equal(openSubmissionsDb(), null)
  } finally {
    if (previous === undefined) delete process.env.ACCOUNTS_DATABASE_URL
    else process.env.ACCOUNTS_DATABASE_URL = previous
    resetAccountsDbCache()
  }
})
