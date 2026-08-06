import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with courses and basic tools. No credit card needed.",
    features: [
      "All courses & lessons",
      "Basic tools access",
      "Community access",
    ],
    cta: "Get Started Free",
    href: "/learn",
    highlighted: false,
  },
  {
    name: "Early Adopter",
    price: "$5",
    period: "/month",
    description: "Lock in early adopter pricing forever — never pay more.",
    features: [
      "Everything in Free",
      "All Pro template packs",
      "All interactive tools",
      "30-day refund guarantee",
      "Price locked forever",
    ],
    cta: "Lock in $5/mo",
    href: "/improvements",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$10",
    period: "/month",
    description: "Full access when it launches. More features coming.",
    features: [
      "Everything in Early Adopter",
      "Advanced features & AI tools",
      "New content priority",
      "Priority support",
    ],
    cta: "Coming Soon",
    href: "/improvements",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 mb-3">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">Simple pricing. No surprises.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start free. Lock in early adopter pricing. Upgrade when you&apos;re ready.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-xl border p-6 md:p-8 ${
              plan.highlighted
                ? "border-cyan-500 bg-white shadow-lg ring-1 ring-cyan-500 scale-105"
                : "border-slate-200 bg-white"
            }`}>
              <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-slate-500">{plan.period}</span>
              </div>
              <p className="text-sm text-slate-600 mb-6">{plan.description}</p>
              {plan.name === "Early Adopter" && (
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                  🎯 Early Adopter — Lock In Forever
                </p>
              )}
              <Link
                href={plan.href}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-colors mb-8 ${
                  plan.highlighted
                    ? "bg-cyan-600 text-white hover:bg-cyan-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {plan.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className={`h-4 w-4 mt-0.5 shrink-0 ${
                      plan.highlighted ? "text-cyan-500" : "text-slate-400"
                    }`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
