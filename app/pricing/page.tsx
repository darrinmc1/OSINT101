import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { pageMeta } from "@/lib/page-meta"
import {
  FREE_ACCOUNT_CTA,
  FREE_ACCOUNT_HREF,
  INTRO_RENEWAL_LINE,
  priceMap,
} from "@/lib/pricing"

export const metadata: Metadata = pageMeta({
  title: "Pricing",
  description:
    "OSINT 101 is A$9/month inc GST. The first month is A$5 after you create a free account with your email. No checkout on this page.",
  path: "/pricing",
})

function AccountLink({ className }: { className: string }) {
  return (
    <Link href={FREE_ACCOUNT_HREF} className={className}>
      {FREE_ACCOUNT_CTA}
    </Link>
  )
}

const buttonClass =
  "mt-8 inline-flex w-full items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 text-center font-bold text-white hover:bg-indigo-400"

export default function PricingPage() {
  const { plan, packs, free } = priceMap

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950 px-4 pb-20 pt-28 text-slate-50">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
            Prices, inc GST
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold md:text-5xl">
            A${plan.priceMonthlyAud}/month. First month A${plan.introFirstMonthAud} if you actually sign up.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            The normal plan is A${plan.priceMonthlyAud}/month, including GST. Create a free
            account with your email and the first month is A${plan.introFirstMonthAud}.{" "}
            {INTRO_RENEWAL_LINE} This page does not take a card.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/5 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Free</p>
              <h2 className="mt-2 text-3xl font-bold">A$0</h2>
              <p className="mt-2 text-sm text-slate-400">Labelled free, because they are.</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {free.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-200">
                      {item.name}
                    </Link>
                    <span className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-200">
                      Free
                    </span>
                  </li>
                ))}
              </ul>
              <AccountLink className={buttonClass} />
            </section>

            <section className="rounded-2xl border border-indigo-400/40 bg-indigo-500/10 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Base plan</p>
              <h2 className="mt-2 text-3xl font-bold">A${plan.priceMonthlyAud}/month</h2>
              <p className="mt-1 text-sm text-slate-300">inc GST</p>
              <div className="mt-5 rounded-xl border border-amber-300/40 bg-amber-300/10 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
                  Limited time · signed-up members
                </p>
                <p className="mt-2 text-sm text-amber-50">
                  A${plan.introFirstMonthAud} for the first month if you create a free account
                  with your email. {INTRO_RENEWAL_LINE}
                </p>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>The lesson archive while the subscription is active.</li>
                <li>Cancel anytime. It stops at the end of the period you have paid.</li>
                <li>Not a pass that runs on after you leave.</li>
              </ul>
              <AccountLink className={buttonClass} />
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
                One-off packs
              </p>
              <h2 className="mt-2 text-3xl font-bold">A$9–19</h2>
              <ul className="mt-6 space-y-5">
                {packs.map((pack) => (
                  <li key={pack.id}>
                    <p className="font-bold text-white">
                      {pack.name} · A${pack.priceAud} one-off
                    </p>
                    <p className="mt-1 text-sm text-slate-400">{pack.detail}</p>
                  </li>
                ))}
              </ul>
              <AccountLink className={buttonClass} />
            </section>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-500">
            Sold by {priceMap.seller}. {priceMap.governingLaw}. Refunds are on{" "}
            <Link href="/refunds" className="text-slate-300 underline underline-offset-4">
              the refunds page
            </Link>
            . No checkout, no payment link.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
