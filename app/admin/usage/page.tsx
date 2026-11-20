import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAccountsDb } from "@/lib/accounts-db"
import { readAdminUsage } from "@/lib/accounts"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { ENTITLEMENTS, parseEntitlement, type Entitlement } from "@/lib/entitlements"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Usage",
  robots: { index: false, follow: false },
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 px-4 pb-20 pt-28 text-slate-100">
        <div className="mx-auto max-w-3xl">{children}</div>
      </main>
      <Footer />
    </>
  )
}

function allowedEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean)
}

export default async function UsageAdminPage() {
  if (!hasClerkPublishableKey() || !process.env.CLERK_SECRET_KEY) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">
          Clerk is not configured in this environment, so this preview cannot show accounts.
          The keys already exist on Production in Vercel. Add the same{" "}
          <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code> to
          Preview, then allow this preview host in the Clerk dashboard. Do not invent new keys.
        </p>
      </Shell>
    )
  }

  const { userId } = await auth()
  if (!userId) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">Sign in with the account that should see the numbers.</p>
        <Link href="/sign-in" className="mt-6 inline-block font-bold text-indigo-300">
          Log in
        </Link>
      </Shell>
    )
  }

  const user = await currentUser()
  const email = user?.primaryEmailAddress?.emailAddress?.toLowerCase() ?? ""
  const allowed = allowedEmails()
  if (!email || !allowed.includes(email)) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">
          This page is limited to the emails in <code>ADMIN_EMAILS</code>. Set that variable
          to the Clerk email that should see account numbers and page views. Clerk&apos;s own
          Users list is the other place to count accounts.
        </p>
      </Shell>
    )
  }

  const db = getAccountsDb()
  if (!db) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">The accounts database is not connected.</p>
      </Shell>
    )
  }

  const usage = await readAdminUsage(db)
  if (!usage) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">
          The tables are not there yet. On the Neon database, run{" "}
          <code>supabase/migrations/20261120000000_accounts_usage.sql</code>. This app does not
          apply that file itself, and it will not invent a count.
        </p>
      </Shell>
    )
  }

  const entitlementCounts = Object.fromEntries(ENTITLEMENTS.map((tier) => [tier, 0])) as Record<Entitlement, number>
  for (const value of usage.entitlements) {
    entitlementCounts[parseEntitlement(value)] += 1
  }
  const rows = usage.events

  return (
    <Shell>
      <h1 className="text-3xl font-bold">Usage</h1>
      <p className="mt-3 text-slate-400">
        Accounts with a profile row: {usage.userCount}. New profiles are free. Nothing on the site
        sets a paid entitlement. Clerk&apos;s Users list is the full sign-up count, including people
        who have not opened a lesson yet.
      </p>
      <ul className="mt-6 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
        {ENTITLEMENTS.map((tier) => (
          <li key={tier} className="rounded-xl border border-white/10 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">{tier}</p>
            <p className="mt-1 text-2xl font-bold text-white">{entitlementCounts[tier]}</p>
          </li>
        ))}
      </ul>
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
        {rows.length === 0 ? (
          <li className="p-4 text-sm text-slate-400">No events recorded yet.</li>
        ) : (
          rows.map((row) => (
            <li key={row.id} className="p-4 text-sm">
              <p className="font-mono text-indigo-200">
                {row.event_type} · {row.resource_id}
              </p>
              <p className="mt-1 text-slate-500">
                {row.path || "—"} · {row.user_id} · {String(row.created_at)}
              </p>
            </li>
          ))
        )}
      </ul>
    </Shell>
  )
}
