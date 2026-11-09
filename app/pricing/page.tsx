import type { Metadata } from "next"
import Link from "next/link"
import { Check, Shield } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"
import { BILLING_NOTE, pricingPlans } from "@/lib/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Free A$0, Field Pack A$15 one-off, and Full Library A$39 one-off. Checkout is not live. Paid packs are coming soon — join the list.",
  alternates: { canonical: "/pricing" },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300">
            <Shield className="h-4 w-4" /> AUD · checkout not live
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">Free, Field Pack, or the Full Library.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Three offers, in Australian dollars. Free is available now. Field Pack (A$15) and Full Library (A$39) are planned one-offs. Paid buttons stay on the list until billing opens.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const paid = plan.id !== "free"
            return (
              <section
                key={plan.id}
                className={`flex flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? "border-indigo-400/40 bg-indigo-500/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">
                  {paid ? "Coming soon" : "Available now"}
                </p>
                <h2 className="mt-2 text-2xl font-bold">{plan.name}</h2>
                <p className="mt-4 text-4xl font-extrabold tracking-tight">
                  {plan.priceLabel}
                  <span className="ml-2 text-base font-semibold text-slate-400">{plan.billingLabel}</span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {paid ? (
                  <a
                    href="#join"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center font-bold text-white hover:bg-white/10"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    href={plan.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-center font-bold text-slate-950 hover:bg-emerald-400"
                  >
                    {plan.cta}
                  </Link>
                )}
              </section>
            )
          })}
        </div>

        <section id="join" className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <h2 className="text-2xl font-bold">Coming soon / join the list</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{BILLING_NOTE}</p>
          <p className="mt-3 text-sm text-slate-500">
            Lessons, worksheets, and the Case File Planner stay readable while checkout is closed. Signing in does not purchase a pack.
          </p>
          <div className="mt-6">
            <EmailCapture
              source="pricing-waitlist"
              heading="Join the list"
              subheading="We'll tell you when Field Pack and Full Library can be bought. No payment is taken here."
              buttonLabel="Coming soon / join the list"
            />
          </div>
          <p className="mt-6 text-center text-sm text-slate-400">
            Want the free planner first?{" "}
            <Link href="/case-file" className="font-semibold text-indigo-300 hover:text-indigo-200">
              Open the Case File Planner
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
