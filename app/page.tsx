import Link from "next/link"
import { ArrowRight, BarChart2, Zap, Shield, Star, Check } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8">
          <Zap className="w-3.5 h-3.5" />
          AI-powered chart analysis
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Read charts like a
          <span className="text-indigo-400"> pro analyst</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          Upload any chart. Get instant pattern recognition, trend analysis, and
          actionable insights — powered by AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            View pricing
          </Link>
        </div>
        <p className="text-gray-500 text-sm mt-4">Free plan available · Analyst plan from $19/mo</p>
      </section>

      {/* Pricing callout */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Pricing that scales with you</h2>
          <p className="text-gray-400">Start free. Upgrade when you need more power.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="bg-gray-900 rounded-2xl p-6 ring-1 ring-gray-800">
            <div className="mb-4">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Free</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">$0</span>
                <span className="text-gray-400 text-sm mb-1">/forever</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {["5 analyses/month", "Basic patterns", "Community access"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="block text-center py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition-all"
            >
              Get started free
            </Link>
          </div>

          {/* Founding */}
          <div className="bg-gray-900 rounded-2xl p-6 ring-1 ring-gray-800">
            <div className="mb-4">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">Founding</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">$5</span>
                <span className="text-gray-400 text-sm mb-1">/month</span>
              </div>
              <p className="text-xs text-indigo-400 mt-1">Early adopter price, locked forever</p>
            </div>
            <ul className="space-y-2 mb-6">
              {["50 analyses/month", "Advanced patterns", "Priority support", "Founding badge"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=founding"
              className="block text-center py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all"
            >
              Become a Founder
            </Link>
          </div>

          {/* Analyst — highlighted */}
          <div className="relative bg-indigo-600 rounded-2xl p-6 ring-2 ring-indigo-400 shadow-2xl shadow-indigo-900/50">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                <Star className="w-3 h-3" />
                Most Popular
              </span>
            </div>
            <div className="mb-4">
              <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide mb-1">Analyst</p>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold">$19</span>
                <span className="text-indigo-200 text-sm mb-1">/month</span>
              </div>
              <p className="text-xs text-indigo-200 mt-1">Full access for serious traders</p>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Unlimited analyses",
                "All chart patterns",
                "AI-powered insights",
                "Export reports",
                "API access",
                "Custom watchlists",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-indigo-100">
                  <Check className="w-4 h-4 text-yellow-300 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/signup?plan=analyst"
              className="block text-center py-2.5 px-4 rounded-lg bg-white hover:bg-indigo-50 text-indigo-700 text-sm font-semibold transition-all"
            >
              Start Analyst — $19/mo
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center gap-1">
            See full plan comparison <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything you need to trade smarter</h2>
          <p className="text-gray-400">Professional-grade analysis, accessible to everyone.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: BarChart2,
              title: "Pattern Recognition",
              description: "Automatically detect 50+ chart patterns including head & shoulders, flags, wedges, and more.",
            },
            {
              icon: Zap,
              title: "Instant Analysis",
              description: "Get results in seconds. Upload a screenshot or paste a ticker and let AI do the heavy lifting.",
            },
            {
              icon: Shield,
              title: "Risk Assessment",
              description: "Understand support, resistance, and key levels to manage your risk with confidence.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-gray-900 rounded-2xl p-6 ring-1 ring-gray-800">
              <div className="w-10 h-10 bg-indigo-950 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to level up your analysis?</h2>
        <p className="text-gray-400 text-lg mb-8">Join traders already using AI to read the market.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/signup?plan=analyst"
            className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            Get Analyst — $19/mo
          </Link>
        </div>
      </section>
    </main>
  )
}
