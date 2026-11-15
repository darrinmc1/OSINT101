import Link from "next/link"
import { notFound } from "next/navigation"
import { supabaseAdmin } from "@/lib/supabase"
import { getViewer, isAdmin } from "@/lib/viewer"
import { CONTACT_EMAIL } from "@/lib/legal"

export const dynamic = "force-dynamic"

interface UsageRow {
  id: string
  user_id: string
  event_type: string
  resource_id: string
  path: string | null
  created_at: string
  profiles: { email: string | null } | { email: string | null }[] | null
}

function emailOf(row: UsageRow): string {
  const profile = row.profiles
  if (Array.isArray(profile)) return profile[0]?.email || row.user_id
  return profile?.email || row.user_id
}

export default async function AdminUsagePage() {
  const viewer = await getViewer()

  if (!viewer.accountsConfigured) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold">Usage</h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Clerk is not configured in this environment, so there is no account count to show. Set the Clerk and Supabase env vars, run the SQL migration, and put your email in ADMIN_EMAILS.
          </p>
        </div>
      </main>
    )
  }

  if (!viewer.userId) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold">Usage</h1>
          <p className="mt-4 text-sm text-slate-400">Sign in with an admin account to see user counts.</p>
          <Link href="/sign-in" className="mt-6 inline-flex rounded-xl bg-indigo-500 px-5 py-3 font-bold">
            Sign in
          </Link>
        </div>
      </main>
    )
  }

  if (!isAdmin(viewer)) notFound()

  if (!supabaseAdmin) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-extrabold">Usage</h1>
          <p className="mt-4 text-sm text-slate-400">
            Supabase is not configured, so this page will not invent a count. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then run the accounts migration.
          </p>
        </div>
      </main>
    )
  }

  const [{ count: userCount }, { data: events, error }, { data: totals }] = await Promise.all([
    supabaseAdmin.from("profiles").select("user_id", { count: "exact", head: true }),
    supabaseAdmin
      .from("usage_events")
      .select("id, user_id, event_type, resource_id, path, created_at, profiles(email)")
      .order("created_at", { ascending: false })
      .limit(100),
    supabaseAdmin.from("profiles").select("entitlement"),
  ])

  const entitlementCounts = { free: 0, field_pack: 0, full_library: 0 }
  for (const row of totals ?? []) {
    const key = row.entitlement as keyof typeof entitlementCounts
    if (key in entitlementCounts) entitlementCounts[key] += 1
  }

  const rows = (events ?? []) as UsageRow[]

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Admin</p>
        <h1 className="mt-2 text-3xl font-extrabold">Accounts and usage</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Signed-in users, and what each one opened. Questions about a record go to {CONTACT_EMAIL}. This page does not take payment.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <Stat label="Accounts" value={userCount ?? 0} />
          <Stat label="Free" value={entitlementCounts.free} />
          <Stat label="Field Pack" value={entitlementCounts.field_pack} />
          <Stat label="Full Library" value={entitlementCounts.full_library} />
        </div>

        {error ? (
          <p className="mt-8 text-sm text-rose-300">Could not read usage events. Run the SQL migration if the tables are missing.</p>
        ) : (
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">When</th>
                  <th className="px-4 py-3">Account</th>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Item</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-slate-400">
                      No usage yet. Views and downloads show up here after someone is signed in.
                    </td>
                  </tr>
                ) : (
                  rows.map((row) => (
                    <tr key={row.id} className="border-t border-white/10">
                      <td className="px-4 py-3 text-slate-300">{new Date(row.created_at).toLocaleString("en-AU")}</td>
                      <td className="px-4 py-3">{emailOf(row)}</td>
                      <td className="px-4 py-3">{row.event_type}</td>
                      <td className="px-4 py-3 text-slate-300">{row.resource_id}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-extrabold">{value}</p>
    </div>
  )
}
