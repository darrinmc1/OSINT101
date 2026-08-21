import Link from "next/link"
import { Check, Zap, Shield, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for curious beginners exploring OSINT fundamentals.",
    icon: Zap,
    iconColor: "text-slate-300",
    iconBg: "bg-slate-500/10",
    borderColor: "border-white/10",
    badgeText: null,
    ctaText: "Get Started Free",
    ctaHref: "/sign-up",
    ctaStyle: "bg-white/10 hover:bg-white/20 text-white border border-white/20",
    features: [
      "Access to 5 beginner OSINT modules",
      "Basic search techniques",
      "Community forum access",
      "1 practice scenario per month",
      "Progress tracking dashboard",
    ],
    notIncluded: [
      "Advanced investigation tools",
      "Certificate of completion",
      "Live mentor sessions",
      "API integrations",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For serious investigators and security professionals leveling up.",
    icon: Shield,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    badgeText: "Most Popular",
    ctaText: "Start Pro Plan",
    ctaHref: "/sign-up?plan=pro",
    ctaStyle: "bg-blue-600 hover:bg-blue-500 text-white",
    features: [
      "Everything in Free",
      "Full library of 50+ OSINT modules",
      "Advanced search & enumeration tools",
      "Unlimited practice scenarios",
      "Real-world case study walkthroughs",
      "Certificate of completion",
      "Priority community support",
      "Monthly live Q&A sessions",
    ],
    notIncluded: [
      "1-on-1 mentor sessions",
      "Custom API integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For teams and organizations running professional OSINT operations.",
    icon: Star,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-500/10",
    borderColor: "border-yellow-500/40",
    badgeText: "Best Value",
    ctaText: "Contact Sales",
    ctaHref: "/contact",
    ctaStyle: "bg-yellow-500 hover:bg-yellow-400 text-black font-semibold",
    features: [
      "Everything in Pro",
      "Up to 25 team seats",
      "1-on-1 monthly mentor sessions",
      "Custom learning paths for your team",
      "Advanced API integrations",
      "Dedicated account manager",
      "Team progress analytics",
      "Private Slack channel access",
      "Early access to new modules",
      "Custom invoicing & billing",
    ],
    notIncluded: [],
  },
]

const faqs = [
  {
    q: "Can I switch plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for paid plans?",
    a: "Pro and Enterprise plans come with a 7-day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, Amex) as well as PayPal and bank transfers for Enterprise plans.",
  },
  {
    q: "Do you offer discounts for students or nonprofits?",
    a: "Yes. We offer a 50% discount for verified students and registered nonprofits. Contact us with proof of eligibility.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-white">
          OSINT<span className="text-blue-400">Academy</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
          <Link href="/pricing" className="text-white font-medium">Pricing</Link>
          <Link href="/sign-in" className="hover:text-white transition-colors">Sign In</Link>
          <Link
            href="/sign-up"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 text-sm mb-6">
            <Zap className="w-3.5 h-3.5" />
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Choose the plan that fits
            <span className="block text-blue-400">your investigation goals</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From hobbyist to professional — every tier is designed to give you real, actionable OSINT skills.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border ${
                  plan.name === "Pro"
                    ? "border-blue-500/50 bg-blue-950/20"
                    : "border-white/10 bg-white/5"
                } p-6 flex flex-col`}
              >
                {plan.badgeText && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full ${
                      plan.name === "Pro"
                        ? "bg-blue-600 text-white"
                        : "bg-yellow-500 text-black"
                    }`}
                  >
                    {plan.badgeText}
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${plan.iconBg} mb-4`}>
                    <Icon className={`w-5 h-5 ${plan.iconColor}`} />
                  </div>
                  <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400 text-sm mb-1">/{plan.period}</span>
                  </div>
                  {plan.name !== "Free" && (
                    <p className="text-slate-500 text-xs mt-1">Billed monthly. Cancel anytime.</p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`block text-center py-2.5 px-4 rounded-xl text-sm transition-colors mb-6 ${plan.ctaStyle}`}
                >
                  {plan.ctaText}
                </Link>

                {/* Features */}
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">What&apos;s included</p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <ul className="space-y-2.5 mt-3">
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="w-4 h-4 mt-0.5 shrink-0 flex items-center justify-center text-slate-600">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison table */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Full feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 text-slate-300 font-semibold">Free</th>
                  <th className="text-center py-3 px-4 text-blue-400 font-semibold">Pro</th>
                  <th className="text-center py-3 px-4 text-yellow-400 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["OSINT modules", "5 modules", "50+ modules", "50+ modules"],
                  ["Practice scenarios", "1/month", "Unlimited", "Unlimited"],
                  ["Certificate of completion", false, true, true],
                  ["Live Q&A sessions", false, "Monthly", "Weekly"],
                  ["1-on-1 mentor sessions", false, false, "Monthly"],
                  ["Team seats", false, false, "Up to 25"],
                  ["API integrations", false, false, true],
                  ["Dedicated account manager", false, false, true],
                  ["Team analytics", false, false, true],
                  ["Priority support", false, true, true],
                ].map(([feature, free, pro, enterprise]) => (
                  <tr key={String(feature)} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-slate-300">{feature}</td>
                    <td className="py-3 px-4 text-center">
                      {free === false ? (
                        <span className="text-slate-600">—</span>
                      ) : free === true ? (
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-slate-400">{free}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {pro === false ? (
                        <span className="text-slate-600">—</span>
                      ) : pro === true ? (
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-blue-300">{pro}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {enterprise === false ? (
                        <span className="text-slate-600">—</span>
                      ) : enterprise === true ? (
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      ) : (
                        <span className="text-yellow-300">{enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/20 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Not sure which plan is right for you?</h2>
          <p className="text-slate-400 mb-6">Start free and upgrade when you&apos;re ready. No credit card required.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/sign-up"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              Start for free
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/20"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 px-6 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} OSINTAcademy. All rights reserved.</p>
      </footer>
    </div>
  )
}
