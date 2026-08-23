import Link from "next/link"
import { Check, X, Zap, Shield, Star } from "lucide-react"

export const metadata = {
  title: "Pricing | OSINT 101",
  description: "OSINT 101 is free forever for core content. See what's included in every tier.",
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to learn OSINT fundamentals.",
    cta: "Get Started Free",
    ctaHref: "/learn",
    highlight: false,
    icon: Shield,
    features: [
      { text: "Full access to all written guides & tutorials", included: true },
      { text: "Beginner, intermediate & advanced modules", included: true },
      { text: "OSINT tool directory", included: true },
      { text: "Community forum access", included: true },
      { text: "Search & filter all resources", included: true },
      { text: "No account required for most content", included: true },
      { text: "Live instructor-led workshops", included: false },
      { text: "Downloadable cheat sheets & templates", included: false },
      { text: "Certificate of completion", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For practitioners who want structured learning and credentials.",
    cta: "Coming Soon",
    ctaHref: "#notify",
    highlight: true,
    icon: Zap,
    features: [
      { text: "Everything in Free", included: true },
      { text: "Live instructor-led workshops", included: true },
      { text: "Downloadable cheat sheets & templates", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Priority support", included: true },
      { text: "Early access to new content", included: true },
      { text: "Ad-free experience", included: true },
      { text: "Private Discord community", included: true },
      { text: "Monthly live Q&A sessions", included: true },
      { text: "Custom learning paths", included: true },
    ],
  },
  {
    name: "Team",
    price: "$29",
    period: "per seat / month",
    description: "For organisations training analysts at scale.",
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
    icon: Star,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Team progress dashboard", included: true },
      { text: "Bulk seat management", included: true },
      { text: "Custom onboarding", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SSO / SAML support", included: true },
      { text: "Invoice billing", included: true },
      { text: "SLA-backed support", included: true },
      { text: "Private workshops on request", included: true },
      { text: "White-label option", included: true },
    ],
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            Core content is free — always
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            OSINT 101 was built on the belief that open-source intelligence education should be
            accessible to everyone. All written guides, tutorials and the tool directory are{" "}
            <strong>free forever</strong>. Premium tiers unlock live training, credentials and
            team features.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? "border-primary shadow-lg shadow-primary/10 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold">{tier.name}</h2>
                  </div>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-extrabold">{tier.price}</span>
                    <span className="text-muted-foreground mb-1 text-sm">/{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      <span className={f.included ? "" : "text-muted-foreground/50"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  className={`block text-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 px-4" id="notify">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Will the free content ever go behind a paywall?",
                a: "No. All written guides, tutorials and the tool directory will remain free forever. We believe open access to OSINT education is a public good.",
              },
              {
                q: "When will Pro launch?",
                a: "Pro is currently in development. Sign up for our newsletter to be notified when it launches — early subscribers will receive a discounted rate.",
              },
              {
                q: "How does the site sustain itself on a free model?",
                a: "OSINT 101 is currently supported by the community and optional donations. Future revenue will come from Pro subscriptions and Team plans, which fund ongoing content creation.",
              },
              {
                q: "Do you offer discounts for students or non-profits?",
                a: "Yes. Once Pro launches we will offer 50% discounts for verified students and registered non-profit organisations. Contact us for details.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-border pb-6">
                <h3 className="font-semibold mb-2">{q}</h3>
                <p className="text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
