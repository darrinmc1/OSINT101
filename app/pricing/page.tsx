import Link from "next/link"
import { Check, X, Star, Zap, Shield, Users, BookOpen, Award, Clock, ChevronRight } from "lucide-react"

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
    color: "emerald",
    features: [
      "3 core learning modules",
      "Basic OSINT techniques",
      "Community forum access",
      "Beginner badge & XP",
      "Case File Planner (limited)",
      "Weekly newsletter",
    ],
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    description: "For analysts who want to level up their tradecraft fast.",
    cta: "Start Pro — $9/mo",
    ctaHref: "/sign-up?plan=pro",
    highlight: true,
    badge: "Most Popular",
    color: "violet",
    features: [
      "All 12+ learning modules",
      "Advanced OSINT techniques",
      "Priority community support",
      "All badges & certifications",
      "Full Case File Planner",
      "Downloadable cheat sheets",
      "Monthly live Q&A sessions",
      "Early access to new content",
    ],
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    description: "For security teams, journalists, and research groups.",
    cta: "Start Team Trial",
    ctaHref: "/contact?plan=team",
    highlight: false,
    badge: null,
    color: "indigo",
    features: [
      "Everything in Pro",
      "Up to 5 team seats",
      "Team progress dashboard",
      "Custom learning paths",
      "Dedicated Slack channel",
      "Bulk resource downloads",
      "Invoice billing available",
      "Onboarding call included",
    ],
  },
]

const featureMatrix = [
  { feature: "Learning Modules", free: "3 modules", pro: "12+ modules", team: "12+ modules" },
  { feature: "Skill Level Coverage", free: "Beginner only", pro: "Beginner → Advanced", team: "Beginner → Advanced" },
  { feature: "Badges & XP", free: "Basic", pro: "Full progression", team: "Full progression" },
  { feature: "Certifications", free: false, pro: true, team: true },
  { feature: "Case File Planner", free: "Limited", pro: "Full access", team: "Full access" },
  { feature: "Cheat Sheet Downloads", free: false, pro: true, team: true },
  { feature: "Community Forum", free: true, pro: true, team: true },
  { feature: "Priority Support", free: false, pro: true, team: true },
  { feature: "Live Q&A Sessions", free: false, pro: true, team: true },
  { feature: "Team Seats", free: false, pro: false, team: "Up to 5" },
  { feature: "Custom Learning Paths", free: false, pro: false, team: true },
  { feature: "Dedicated Slack Channel", free: false, pro: false, team: true },
]

const testimonials = [
  {
    quote: "OSINT 101 Pro took me from Googling basics to running full digital investigations in under 3 months. The structured modules are exactly what I needed.",
    name: "Marcus T.",
    role: "Freelance Investigative Journalist",
    emoji: "🕵️",
  },
  {
    quote: "We onboarded our entire threat intel team using the Team plan. The custom learning paths saved us weeks of onboarding time.",
    name: "Priya S.",
    role: "Head of Threat Intelligence, FinTech Startup",
    emoji: "🛡️",
  },
  {
    quote: "I tried three other OSINT courses. None of them had the depth or the practical case-file approach that OSINT 101 Pro delivers.",
    name: "Jordan K.",
    role: "Security Analyst",
    emoji: "🔍",
  },
]

function FeatureValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-emerald-400 mx-auto" />
  }
  if (value === false) {
    return <X className="h-5 w-5 text-slate-600 mx-auto" />
  }
  return <span className="text-sm text-slate-300">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-950 to-indigo-900/20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-6">
            <Zap className="h-3.5 w-3.5" />
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display text-white mb-4 leading-tight">
            Invest in your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              OSINT tradecraft
            </span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Start free and upgrade when you&apos;re ready. No hidden fees, no lock-in. Cancel anytime.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-400" /> Free tier forever</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-400" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-emerald-400" /> No credit card for free</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border backdrop-blur-xl p-7 flex flex-col ${
                tier.highlight
                  ? "border-violet-500/50 bg-violet-500/10 shadow-2xl shadow-violet-500/20 scale-105"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-bold shadow-lg">
                    <Star className="h-3 w-3" />
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{tier.name}</p>
                <div className="flex items-end gap-1.5 mb-2">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-slate-400 text-sm mb-1.5">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-400">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.ctaHref}
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all ${
                  tier.highlight
                    ? "bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/30"
                    : "border border-white/20 bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                {tier.cta}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">Full Feature Comparison</h2>
            <p className="text-slate-400">See exactly what&apos;s included in each plan.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-sm font-bold text-slate-400 w-1/2">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-emerald-400">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-violet-400">Pro</th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-indigo-400">Team</th>
                  </tr>
                </thead>
                <tbody>
                  {featureMatrix.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-white/5 ${
                        i % 2 === 0 ? "bg-white/[0.02]" : ""
                      }`}
                    >
                      <td className="px-6 py-3.5 text-sm text-slate-300 font-medium">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center"><FeatureValue value={row.free} /></td>
                      <td className="px-6 py-3.5 text-center"><FeatureValue value={row.pro} /></td>
                      <td className="px-6 py-3.5 text-center"><FeatureValue value={row.team} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">Trusted by analysts worldwide</h2>
            <p className="text-slate-400">Real results from real investigators.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Strip */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h2 className="text-xl font-extrabold font-display text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-bold text-white mb-1">Can I stay on the free plan forever?</p>
                <p className="text-sm text-slate-400">Yes. The free plan never expires and always includes 3 core modules and community access.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">What payment methods do you accept?</p>
                <p className="text-sm text-slate-400">We accept all major credit cards via Stripe. Team plans can also be invoiced.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Can I cancel my Pro subscription?</p>
                <p className="text-sm text-slate-400">Absolutely. Cancel anytime from your dashboard — no questions asked, no penalties.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Is there a student or nonprofit discount?</p>
                <p className="text-sm text-slate-400">Yes — reach out via our contact page with proof of eligibility for a 50% discount.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Do certifications expire?</p>
                <p className="text-sm text-slate-400">No. Certifications earned on Pro or Team plans are yours to keep, even if you downgrade.</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white mb-1">Can I upgrade from Pro to Team later?</p>
                <p className="text-sm text-slate-400">Yes. You can upgrade at any time and we&apos;ll prorate the difference automatically.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl p-10">
            <Shield className="h-10 w-10 text-violet-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">
              Ready to sharpen your skills?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Join thousands of analysts, journalists, and security professionals who train with OSINT 101.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 transition-all shadow-lg shadow-violet-500/30"
              >
                <Zap className="h-4 w-4" />
                Start Free Today
              </Link>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
              >
                <BookOpen className="h-4 w-4" />
                Browse Modules First
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
