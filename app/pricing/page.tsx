import Link from "next/link"
import { Check, Shield } from "lucide-react"
import { BuyButton } from "@/components/buy-button"
import { launchOfferLabel } from "@/lib/launch-offer"
import { pricingFaqJsonLd, pricingPlans } from "@/lib/pricing"
import { REFUND_POLICY } from "@/lib/refund-policy"

export const dynamic = "force-dynamic"

export default function PricingPage() {
  const offerLabel = launchOfferLabel()
  const faqs = [
    {
      question: "What is the refund policy?",
      answer: REFUND_POLICY,
    },
    ...(offerLabel
      ? [
          {
            question: "Who gets the launch offer?",
            answer: `${offerLabel}. Waitlist members and new buyers get 50% off the first billing period. The discount applies once, to that first period.`,
          },
        ]
      : [
          {
            question: "Is the launch offer still open?",
            answer: "The launch offer has ended. Checkout uses the listed price.",
          },
        ]),
  ]
  const paidPlans = pricingPlans.filter((plan) => plan.id !== "free")
  const freePlan = pricingPlans.find((plan) => plan.id === "free")

  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqJsonLd(faqs)) }}
      />
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-300">
            <Shield className="h-4 w-4" /> USD pricing
          </div>
          <h1 className="text-4xl font-extrabold md:text-5xl">OSINT101 plans</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Beginner training stays free. Founding is $5/mo or $48/yr. Analyst is $19/mo or $180/yr.
            Checkout stays closed until payments are switched on.
          </p>
        </div>

        {freePlan ? (
          <section className="mx-auto mt-14 max-w-3xl rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-7">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Free</p>
            <h2 className="mt-2 text-3xl font-bold">$0</h2>
            <p className="mt-2 text-sm text-slate-400">{freePlan.description}</p>
            <ul className="mt-6 space-y-3">
              {freePlan.features.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {item}
                </li>
              ))}
            </ul>
            <Link
              href="/modules"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 hover:bg-emerald-400"
            >
              Browse modules
            </Link>
          </section>
        ) : null}

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {paidPlans.map((plan) => (
            <section key={plan.id} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-300">{plan.name}</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="text-3xl font-bold">{plan.priceLabel}{plan.period}</h2>
                {offerLabel ? (
                  <p className="text-sm font-semibold text-emerald-300">{offerLabel}</p>
                ) : null}
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <p className="text-lg text-slate-300">${plan.priceYearly}/yr</p>
                {offerLabel ? (
                  <p className="text-sm font-semibold text-emerald-300">{offerLabel}</p>
                ) : null}
              </div>
              <p className="mt-3 text-sm text-slate-400">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-6">
                <BuyButton
                  sku={plan.id === "founding" ? "founding_m" : "analyst_m"}
                  launchOfferLabel={offerLabel}
                  showWaitlist={false}
                />
                <BuyButton
                  sku={plan.id === "founding" ? "founding_y" : "analyst_y"}
                  launchOfferLabel={offerLabel}
                />
              </div>
            </section>
          ))}
        </div>

        <section className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-2xl font-bold">Pricing FAQ</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </main>
  )
}
