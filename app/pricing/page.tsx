import Link from "next/link"
import { Check, Zap, Star, Shield } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Start learning with core features.",
    cta: "Get Started Free",
    ctaHref: "/signup",
    highlighted: false,
    features: [
      "5 analyses per month",
      "Basic chart patterns",
      "Community access",
      "Email support",
    ],
  },
  {
    name: "Founding",
    price: "$5",
    period: "per month",
    description: "Early supporter pricing, locked in forever.",
    cta: "Become a Founder",
    ctaHref: "/signup?plan=founding",
    highlighted: false,
    badge: "Early Adopter",
    features: [
      "50 analyses per month",
      "Advanced chart patterns",
      "Priority support",
      "Founding member badge",
      "Price locked forever",
    ],
  },
  {
    name: "Analyst",
    price: "$19",
    period: "per month",
    description: "Full access for serious traders and analysts.",
    cta: "Start Analyst Plan",
    ctaHref: "/signup?plan=analyst",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Unlimited analyses",
      "All chart patterns",
      "AI-powered insights",
      "Export reports",
      "API access",
      "Priority support",
      "Custom watchlists",
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your trading workflow. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-indigo-600 ring-2 ring-indigo-400 shadow-2xl shadow-indigo-900/50"
                  : "bg-gray-900 ring-1 ring-gray-800"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                      tier.highlighted
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    <Star className="w-3 h-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{tier.name}</h2>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? "text-indigo-200" : "text-gray-400"
                  }`}
                >
                  {tier.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold">{tier.price}</span>
                  <span
                    className={`text-sm mb-2 ${
                      tier.highlighted ? "text-indigo-200" : "text-gray-400"
                    }`}
                  >
                    /{tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlighted ? "text-yellow-300" : "text-indigo-400"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-indigo-100" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-white text-indigo-700 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>All plans include a 14-day money-back guarantee. No questions asked.</span>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 rounded-2xl p-8 ring-1 ring-gray-800">
          <h3 className="text-xl font-bold mb-6 text-center">Compare Plans</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 pr-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Free</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Founding $5</th>
                  <th className="text-center py-3 px-4 text-indigo-400 font-semibold">Analyst $19</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  ["Monthly analyses", "5", "50", "Unlimited"],
                  ["Chart patterns", "Basic", "Advanced", "All"],
                  ["AI insights", "—", "—", "✓"],
                  ["Export reports", "—", "—", "✓"],
                  ["API access", "—", "—", "✓"],
                  ["Custom watchlists", "—", "—", "✓"],
                  ["Support", "Email", "Priority", "Priority"],
                ].map(([feature, free, founding, analyst]) => (
                  <tr key={feature}>
                    <td className="py-3 pr-4 text-gray-300">{feature}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{free}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{founding}</td>
                    <td className="py-3 px-4 text-center text-indigo-300 font-medium">{analyst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
