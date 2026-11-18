import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { supabaseAdmin } from "@/lib/supabase"

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

  if (!supabaseAdmin) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">
          Supabase is not configured. <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code>SUPABASE_SERVICE_ROLE_KEY</code> are already used by this project. They have
          to be present for this environment, and the usage tables have to exist.
        </p>
      </Shell>
    )
  }

  const profiles = await supabaseAdmin.from("profiles").select("*", { count: "exact", head: true })
  const events = await supabaseAdmin
    .from("usage_events")
    .select("user_id, path, created_at")
    .order("created_at", { ascending: false })
    .limit(40)

  if (profiles.error || events.error) {
    return (
      <Shell>
        <h1 className="text-3xl font-bold">Usage</h1>
        <p className="mt-4 text-slate-300">
          The tables are not there yet. In the Supabase SQL editor, run{" "}
          <code>supabase/migrations/20261118000000_accounts_usage.sql</code>. Then open a lesson
          while signed in and come back.
        </p>
      </Shell>
    )
  }

  const rows = events.data ?? []

  return (
    <Shell>
      <h1 className="text-3xl font-bold">Usage</h1>
      <p className="mt-3 text-slate-400">
        Accounts that have opened a page while signed in: {profiles.count ?? 0}. Clerk&apos;s
        Users list is the full sign-up count, including people who have not opened a lesson yet.
      </p>
      <ul className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
        {rows.length === 0 ? (
          <li className="p-4 text-sm text-slate-400">No page views recorded yet.</li>
        ) : (
          rows.map((row, index) => (
            <li key={`${row.user_id}-${row.created_at}-${index}`} className="p-4 text-sm">
              <p className="font-mono text-indigo-200">{row.path}</p>
              <p className="mt-1 text-slate-500">
                {row.user_id} · {row.created_at}
              </p>
            </li>
          ))
        )}
      </ul>
    </Shell>
  )
}
