import Link from "next/link"
import { Check, X, Zap, Shield, BookOpen, Users, Download, Star } from "lucide-react"

const freeFeatures = [
  { label: "Access to 3 beginner modules", included: true },
  { label: "OSINT resource directory (limited)", included: true },
  { label: "Community forum access", included: true },
  { label: "Monthly newsletter", included: true },
  { label: "Case File Planner (3 cases)", included: true },
  { label: "All 15+ learning modules", included: false },
  { label: "Advanced & expert-level content", included: false },
  { label: "Full resource library (200+ tools)", included: false },
  { label: "Downloadable cheat sheets & templates", included: false },
  { label: "XP tracking & badge system", included: false },
  { label: "Priority community support", included: false },
  { label: "New content early access", included: false },
]

const premiumFeatures = [
  { label: "Access to 3 beginner modules", included: true },
  { label: "OSINT resource directory (limited)", included: true },
  { label: "Community forum access", included: true },
  { label: "Monthly newsletter", included: true },
  { label: "Case File Planner (unlimited)", included: true },
  { label: "All 15+ learning modules", included: true },
  { label: "Advanced & expert-level content", included: true },
  { label: "Full resource library (200+ tools)", included: true },
  { label: "Downloadable cheat sheets & templates", included: true },
  { label: "XP tracking & badge system", included: true },
  { label: "Priority community support", included: true },
  { label: "New content early access", included: true },
]

const roiPoints = [
  {
    icon: BookOpen,
    title: "Save 40+ hours of research",
    description: "Our curated modules distill hundreds of hours of OSINT research into structured, actionable lessons.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Shield,
    title: "Avoid costly mistakes",
    description: "Learn legal boundaries, OPSEC best practices, and ethical frameworks before they matter in the field.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Zap,
    title: "Accelerate your career",
    description: "Analysts who complete our advanced tracks report landing roles 2x faster with demonstrable, practical skills.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Users,
    title: "Join a professional network",
    description: "Connect with 5,000+ OSINT practitioners, share case studies, and get peer feedback on your investigations.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
]

const testimonials = [
  {
    quote: "OSINT 101 Pro paid for itself in the first week. The advanced social media module alone saved me 10 hours on a client investigation.",
    author: "Marcus T.",
    role: "Private Investigator",
    emoji: "🕵️",
  },
  {
    quote: "The structured learning path took me from complete beginner to confidently running open-source investigations in under 3 months.",
    author: "Priya S.",
    role: "Threat Intelligence Analyst",
    emoji: "🔍",
  },
  {
    quote: "Worth every penny. The cheat sheets alone are something I reference daily. The dark web monitoring module is exceptional.",
    author: "Jordan K.",
    role: "Cybersecurity Researcher",
    emoji: "🛡️",
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-violet-900/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            Simple, transparent pricing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4 bg-gradient-to-r from-white via-indigo-200 to-violet-300 bg-clip-text text-transparent">
            Invest in your OSINT skills
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready to go deeper. No hidden fees, no long-term contracts — cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Free Tier */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Free</h2>
              <p className="text-slate-400 text-sm">Perfect for getting started with OSINT fundamentals.</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 mb-1">/month</span>
              </div>
            </div>
            <Link
              href="/sign-up"
              className="block w-full text-center px-6 py-3 rounded-xl font-bold text-white border border-white/20 hover:border-indigo-500/50 hover:bg-white/5 transition-all mb-8"
            >
              Get started free
            </Link>
            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                  )}
                  <span className={f.included ? "text-slate-300 text-sm" : "text-slate-600 text-sm"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-indigo-900/30 to-violet-900/20 backdrop-blur-xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-lg">
                <Zap className="h-3.5 w-3.5" />
                Most Popular
              </span>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-white mb-1">Pro</h2>
              <p className="text-slate-400 text-sm">For analysts serious about mastering open-source intelligence.</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">$19</span>
                <span className="text-slate-400 mb-1">/month</span>
              </div>
              <p className="text-xs text-indigo-300 mt-1">or $149/year — save 35%</p>
            </div>
            <Link
              href="/sign-up"
              className="block w-full text-center px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20 mb-8"
            >
              Start Pro — 7 days free
            </Link>
            <ul className="space-y-3">
              {premiumFeatures.map((f) => (
                <li key={f.label} className="flex items-start gap-3">
                  {f.included ? (
                    <Check className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-5 w-5 text-slate-600 shrink-0 mt-0.5" />
                  )}
                  <span className={f.included ? "text-slate-300 text-sm" : "text-slate-600 text-sm"}>
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="px-4 py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-display text-white mb-3">
              Why Pro pays for itself
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              At less than a coffee a day, OSINT 101 Pro delivers measurable value for investigators, analysts, and researchers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiPoints.map((point) => (
              <div
                key={point.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className={`h-11 w-11 rounded-xl ${point.bg} flex items-center justify-center mb-4`}>
                  <point.icon className={`h-5 w-5 ${point.color}`} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{point.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold font-display text-white text-center mb-10">
            Feature comparison
          </h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 px-6 py-4 border-b border-white/10">
              <span className="text-slate-400 text-sm font-semibold">Feature</span>
              <span className="text-slate-400 text-sm font-semibold text-center">Free</span>
              <span className="text-indigo-300 text-sm font-semibold text-center">Pro</span>
            </div>
            {[
              { feature: "Learning modules", free: "3 beginner", pro: "15+ all levels" },
              { feature: "Resource library", free: "50 tools", pro: "200+ tools" },
              { feature: "Case File Planner", free: "3 cases", pro: "Unlimited" },
              { feature: "Cheat sheets & templates", free: "—", pro: "✓ Full library" },
              { feature: "XP & badge system", free: "—", pro: "✓ Full tracking" },
              { feature: "Community access", free: "Read-only", pro: "Full + priority" },
              { feature: "New content access", free: "Delayed", pro: "Early access" },
              { feature: "Support", free: "Community", pro: "Priority" },
            ].map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 px-6 py-4 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "" : "bg-white/[0.02]"
                }`}
              >
                <span className="text-slate-300 text-sm">{row.feature}</span>
                <span className="text-slate-500 text-sm text-center">{row.free}</span>
                <span className="text-emerald-400 text-sm text-center font-medium">{row.pro}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold font-display text-white text-center mb-10">
            Trusted by OSINT professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-lg">
                    {t.emoji}
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{t.author}</p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Ready to level up your investigations?
          </h2>
          <p className="text-slate-400 mb-8">
            Join 5,000+ analysts already using OSINT 101 Pro. Start your 7-day free trial — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <Zap className="h-4 w-4" />
              Start free trial
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white border border-white/20 hover:border-indigo-500/50 hover:bg-white/5 transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Browse free modules
            </Link>
          </div>
          <p className="text-slate-600 text-xs mt-6">Cancel anytime. No questions asked.</p>
        </div>
      </section>
    </main>
  )
}
