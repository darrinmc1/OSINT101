import Link from "next/link"
import { Check, X, Star, Zap, Award, BookOpen, Shield, Users, Code } from "lucide-react"

const freeTierFeatures = [
  { label: "3 core learning modules", included: true },
  { label: "Basic OSINT skill tracks", included: true },
  { label: "Community forum access", included: true },
  { label: "Downloadable cheat sheets", included: true },
  { label: "Basic achievement badges", included: true },
  { label: "Case File Planner (limited)", included: true },
  { label: "Advanced modules (10+)", included: false },
  { label: "Completion certificates", included: false },
  { label: "API access", included: false },
  { label: "Priority support", included: false },
  { label: "Exclusive advanced resources", included: false },
]

const premiumTierFeatures = [
  { label: "All 10+ learning modules", included: true },
  { label: "Advanced OSINT skill tracks", included: true },
  { label: "Community forum access", included: true },
  { label: "Downloadable cheat sheets", included: true },
  { label: "Full badge & XP system", included: true },
  { label: "Case File Planner (unlimited)", included: true },
  { label: "Advanced modules (10+)", included: true },
  { label: "Completion certificates", included: true },
  { label: "API access", included: true },
  { label: "Priority support", included: true },
  { label: "Exclusive advanced resources", included: true },
]

const addOns = [
  {
    icon: <Award className="h-6 w-6 text-amber-400" />,
    title: "Verified Certificates",
    description: "Earn shareable, verifiable certificates for each completed module. Showcase your OSINT skills on LinkedIn or your resume.",
    price: "Included with Premium",
    highlight: false,
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-400" />,
    title: "API Access",
    description: "Integrate OSINT101 learning data and resources into your own tools, dashboards, or workflows via our REST API.",
    price: "Included with Premium",
    highlight: false,
  },
  {
    icon: <BookOpen className="h-6 w-6 text-emerald-400" />,
    title: "Advanced Modules",
    description: "Unlock Spymaster-level content: dark web monitoring, advanced social engineering, corporate intelligence, and more.",
    price: "Included with Premium",
    highlight: false,
  },
  {
    icon: <Shield className="h-6 w-6 text-violet-400" />,
    title: "Team / Enterprise",
    description: "Training seats for your entire security team, custom module tracks, usage analytics, and a dedicated account manager.",
    price: "Contact us",
    highlight: true,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-12 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-6">
          <Star className="h-3 w-3" /> Pricing
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold font-display mb-4 bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
          Invest in Your Intelligence
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Start free and level up when you&apos;re ready. OSINT101 gives every analyst the foundation they need — and the advanced tools to go further.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Tier */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3">
                ✓ Free Forever
              </span>
              <h2 className="text-2xl font-extrabold text-white mb-1">Free</h2>
              <p className="text-slate-400 text-sm">Everything you need to get started with OSINT.</p>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-white">$0</span>
                <span className="text-slate-400 text-sm ml-1">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {freeTierFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  {f.included ? (
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  ) : (
                    <X className="h-4 w-4 text-slate-600 shrink-0" />
                  )}
                  <span className={f.included ? "text-slate-200" : "text-slate-500"}>{f.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="w-full text-center px-5 py-3 rounded-xl font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              Get Started Free
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="rounded-2xl border border-violet-500/40 bg-gradient-to-b from-violet-500/10 to-indigo-500/10 backdrop-blur-xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-500/30 text-violet-200 border border-violet-400/40">
                <Star className="h-3 w-3" /> Most Popular
              </span>
            </div>
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 mb-3">
                ★ Premium
              </span>
              <h2 className="text-2xl font-extrabold text-white mb-1">Premium</h2>
              <p className="text-slate-400 text-sm">Full access for serious analysts and investigators.</p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">$12</span>
                <span className="text-slate-400 text-sm mb-1">/ month</span>
                <span className="text-xs text-emerald-400 font-semibold mb-1 ml-1">or $99/yr — save 31%</span>
              </div>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {premiumTierFeatures.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span className="text-slate-200">{f.label}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/sign-up"
              className="w-full text-center px-5 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-violet-500/20"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" /> Upgrade to Premium
              </span>
            </Link>
            <p className="text-center text-xs text-slate-500 mt-3">Cancel anytime. No hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-white text-center mb-8">Full Feature Comparison</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-4 text-slate-400 font-semibold w-1/2">Feature</th>
                <th className="text-center px-4 py-4 text-emerald-400 font-bold">Free</th>
                <th className="text-center px-4 py-4 text-violet-400 font-bold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Learning modules", "3", "10+"],
                ["Skill levels", "Beginner", "All levels"],
                ["Achievement badges", "Basic", "Full XP system"],
                ["Case File Planner", "Limited", "Unlimited"],
                ["Completion certificates", "—", "✓"],
                ["Downloadable resources", "✓", "✓"],
                ["Community forum", "✓", "✓"],
                ["API access", "—", "✓"],
                ["Advanced modules", "—", "✓"],
                ["Priority support", "—", "✓"],
                ["Team / Enterprise", "—", "Contact us"],
              ].map(([feature, free, premium], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-6 py-3 text-slate-300">{feature}</td>
                  <td className="px-4 py-3 text-center text-slate-400">{free}</td>
                  <td className="px-4 py-3 text-center text-violet-300 font-medium">{premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add-ons / Upsells */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-white text-center mb-2">What&apos;s Included in Premium</h2>
        <p className="text-slate-400 text-center text-sm mb-8">Every premium feature, explained.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {addOns.map((addon) => (
            <div
              key={addon.title}
              className={`rounded-2xl border p-6 flex gap-4 ${
                addon.highlight
                  ? "border-indigo-500/40 bg-indigo-500/10"
                  : "border-white/10 bg-white/5"
              } backdrop-blur-xl`}
            >
              <div className="shrink-0 mt-0.5">{addon.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{addon.title}</h3>
                <p className="text-slate-400 text-sm mb-2">{addon.description}</p>
                <span className="text-xs font-semibold text-violet-300">{addon.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Can I stay on the free plan forever?",
              a: "Absolutely. The free plan never expires and gives you access to 3 full learning modules, community resources, and downloadable cheat sheets.",
            },
            {
              q: "What payment methods do you accept?",
              a: "We accept all major credit cards and PayPal. Annual plans are billed once per year and save you 31% compared to monthly billing.",
            },
            {
              q: "How do completion certificates work?",
              a: "After finishing all lessons in a module, Premium members receive a verifiable digital certificate they can share on LinkedIn or download as a PDF.",
            },
            {
              q: "What does API access include?",
              a: "Premium members get a personal API key to query OSINT101 module data, resource listings, and learning progress — perfect for integrating into your own tools or dashboards.",
            },
            {
              q: "Do you offer team or enterprise plans?",
              a: "Yes! We offer custom pricing for teams of 5 or more, including bulk seats, custom module tracks, and a dedicated account manager. Contact us to learn more.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="font-bold text-white mb-2">{q}</h3>
              <p className="text-slate-400 text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-24 text-center">
        <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-indigo-500/10 backdrop-blur-xl p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to level up your OSINT skills?</h2>
          <p className="text-slate-400 mb-6">Join thousands of analysts, investigators, and security professionals training on OSINT101.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-violet-500/20"
            >
              <Zap className="h-4 w-4" /> Start Free Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Users className="h-4 w-4" /> Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
