import Link from "next/link"
import { Check, X, Zap, Shield, Star } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with OSINT fundamentals.",
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    highlight: false,
    badge: null,
    icon: Shield,
    iconColor: "text-slate-400",
    borderColor: "border-white/10",
    badgeUnlocks: ["Rookie 🕵️", "Analyst 🔍", "Tracker 🗺️"],
    features: [
      { label: "3 core learning modules", included: true },
      { label: "Community forum access", included: true },
      { label: "Basic OSINT resources", included: true },
      { label: "Case File Planner (3 cases)", included: true },
      { label: "Blog & guides access", included: true },
      { label: "XP & badge system", included: true },
      { label: "All advanced modules", included: false },
      { label: "Exclusive Spymaster badges", included: false },
      { label: "Priority resource downloads", included: false },
      { label: "Early access to new content", included: false },
      { label: "Unlimited Case File cases", included: false },
      { label: "Certificate of completion", included: false },
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "Unlock the full OSINT training experience and all premium content.",
    cta: "Upgrade to Pro",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    icon: Zap,
    iconColor: "text-cyan-400",
    borderColor: "border-indigo-500/60",
    badgeUnlocks: ["Rookie 🕵️", "Analyst 🔍", "Tracker 🗺️", "Operative 🎯", "Spymaster 🦅", "Ghost 👻"],
    features: [
      { label: "3 core learning modules", included: true },
      { label: "Community forum access", included: true },
      { label: "Basic OSINT resources", included: true },
      { label: "Case File Planner (3 cases)", included: true },
      { label: "Blog & guides access", included: true },
      { label: "XP & badge system", included: true },
      { label: "All advanced modules", included: true },
      { label: "Exclusive Spymaster badges", included: true },
      { label: "Priority resource downloads", included: true },
      { label: "Early access to new content", included: true },
      { label: "Unlimited Case File cases", included: true },
      { label: "Certificate of completion", included: true },
    ],
  },
]

const comparisonRows = [
  { category: "Courses & Modules", rows: [
    { feature: "Beginner modules", free: true, pro: true },
    { feature: "Intermediate modules", free: false, pro: true },
    { feature: "Advanced modules", free: false, pro: true },
    { feature: "New modules (early access)", free: false, pro: true },
  ]},
  { category: "Badges & XP", rows: [
    { feature: "Rookie → Tracker badges", free: true, pro: true },
    { feature: "Operative & Spymaster badges", free: false, pro: true },
    { feature: "Ghost & Legend badges", free: false, pro: true },
    { feature: "Certificate of completion", free: false, pro: true },
  ]},
  { category: "Tools & Resources", rows: [
    { feature: "Basic resource library", free: true, pro: true },
    { feature: "Case File Planner (3 cases)", free: true, pro: true },
    { feature: "Unlimited Case File cases", free: false, pro: true },
    { feature: "Priority downloads", free: false, pro: true },
  ]},
  { category: "Community", rows: [
    { feature: "Community forum", free: true, pro: true },
    { feature: "Pro member channels", free: false, pro: true },
    { feature: "Direct instructor Q&A", free: false, pro: true },
  ]},
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-2">
            <Star className="h-4 w-4" />
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Invest in your OSINT skills
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Start free and level up when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border ${
                  tier.highlight
                    ? "border-indigo-500/60 bg-gradient-to-b from-indigo-500/10 to-violet-500/5"
                    : "border-white/10 bg-white/5"
                } backdrop-blur-xl p-8 flex flex-col gap-6`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-lg">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                    tier.highlight ? "bg-indigo-500/20" : "bg-white/5"
                  }`}>
                    <Icon className={`h-5 w-5 ${tier.iconColor}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white">{tier.name}</h2>
                    <p className="text-slate-400 text-sm">{tier.description}</p>
                  </div>
                </div>

                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 mb-1.5">/{tier.period}</span>
                </div>

                <Link
                  href={tier.ctaHref}
                  className={`w-full text-center py-3 rounded-xl font-bold transition-all ${
                    tier.highlight
                      ? "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  {tier.cta}
                </Link>

                {/* Badge Unlocks */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Badge unlocks</p>
                  <div className="flex flex-wrap gap-2">
                    {tier.badgeUnlocks.map((b) => (
                      <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3 text-sm">
                      {f.included ? (
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-slate-600 flex-shrink-0" />
                      )}
                      <span className={f.included ? "text-slate-200" : "text-slate-500"}>
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">Full feature comparison</h2>
            <p className="text-slate-400 mt-2">See exactly what&apos;s included in each plan.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03]">
              <div className="p-4 text-sm font-semibold text-slate-400">Feature</div>
              <div className="p-4 text-center text-sm font-bold text-slate-300 border-l border-white/10">Free</div>
              <div className="p-4 text-center text-sm font-bold text-indigo-300 border-l border-white/10">Pro</div>
            </div>

            {comparisonRows.map((section, si) => (
              <div key={section.category}>
                {/* Section Header */}
                <div className="grid grid-cols-3 bg-white/[0.02] border-b border-white/10">
                  <div className="p-3 px-4 col-span-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">{section.category}</span>
                  </div>
                </div>
                {section.rows.map((row, ri) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 border-b border-white/5 ${
                      ri % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"
                    } ${
                      si === comparisonRows.length - 1 && ri === section.rows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <div className="p-3.5 px-4 text-sm text-slate-300">{row.feature}</div>
                    <div className="p-3.5 flex items-center justify-center border-l border-white/5">
                      {row.free ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <X className="h-4 w-4 text-slate-600" />
                      )}
                    </div>
                    <div className="p-3.5 flex items-center justify-center border-l border-white/5">
                      {row.pro ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <X className="h-4 w-4 text-slate-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ / CTA */}
        <div className="text-center space-y-4 pb-8">
          <h2 className="text-xl font-bold text-white">Still have questions?</h2>
          <p className="text-slate-400">
            Reach out via our{" "}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors">
              contact page
            </Link>{" "}
            and we&apos;ll help you pick the right plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <Zap className="h-4 w-4" />
              Start for free
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              Browse modules first
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
