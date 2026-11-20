import Link from "next/link"
import type { AccessNeed } from "@/lib/entitlements"
import { tierLabel, tierPriceLabel } from "@/lib/offer"
import type { AccessDecision } from "@/lib/viewer"

export function AccountGate({
  decision,
  title,
  required,
}: {
  decision: Extract<AccessDecision, { status: "sign_in" | "coming_soon" }>
  title: string
  required: AccessNeed
}) {
  const comingSoon = decision.status === "coming_soon"
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
        {comingSoon ? "Coming soon" : "Free account"}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold text-white">{title}</h1>
      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {comingSoon
          ? `${tierLabel(required)} is listed at ${tierPriceLabel(required)}. Checkout is not live, so this stays closed. A free account does not buy it.`
          : "This is part of the free offer. Create a free account to open it. Nothing is charged."}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {comingSoon ? (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-bold text-slate-400"
          >
            Coming soon
          </button>
        ) : (
          <Link
            href="/sign-up"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400"
          >
            Create a free account
          </Link>
        )}
        {!decision.viewer.userId ? (
          <Link
            href={comingSoon ? "/sign-up" : "/sign-in"}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 font-semibold text-slate-200 hover:bg-white/5"
          >
            {comingSoon ? "Create a free account" : "Sign in"}
          </Link>
        ) : null}
      </div>
      {!decision.viewer.accountsConfigured ? (
        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Account sign-up uses Clerk. This environment does not have the Clerk keys yet, so the form cannot create a user until those env vars are set.
        </p>
      ) : null}
    </div>
  )
}
