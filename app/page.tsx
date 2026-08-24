import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Zap, Lock, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 opacity-80" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-6">
            <Zap className="h-3 w-3" /> Free OSINT Training — No Credit Card Required
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master OSINT.<br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">From Rookie to Spymaster.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            Structured, hands-on open-source intelligence training. Start completely free — no paywalls on core content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all text-base"
            >
              Start Free Training <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-base"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Free vs Premium Breakdown */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
            What&apos;s Free vs. Premium?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We believe core OSINT skills should be accessible to everyone. Here&apos;s exactly what you get at each tier — no surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Free Tier */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-9 w-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">✓</span>
              <div>
                <p className="font-extrabold text-white text-lg">Free Plan</p>
                <p className="text-emerald-400 text-xs font-semibold">Always free — no credit card</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "3 full learning modules (Beginner → Intermediate)",
                "Core OSINT techniques: search operators, social media, geolocation",
                "Basic achievement badges & XP tracking",
                "Access to the community forum",
                "Downloadable reference cheat sheets",
                "Case File planning tool",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/modules"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 transition-all w-full justify-center"
            >
              Start Free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Premium Tier */}
          <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl p-6 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/30 text-violet-300 text-xs font-bold">
                <Star className="h-3 w-3" /> Premium
              </span>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-9 w-9 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold text-sm">★</span>
              <div>
                <p className="font-extrabold text-white text-lg">Premium Plan</p>
                <p className="text-violet-300 text-xs font-semibold">Everything in Free, plus:</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "All modules including Advanced & Spymaster tracks",
                "Advanced certifications & verifiable credentials",
                "Exclusive dark web monitoring & OPSEC modules",
                "Priority support & instructor Q&A access",
                "Early access to new modules and tools",
                "Ad-free, distraction-free learning experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Lock className="h-4 w-4 text-violet-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all w-full justify-center"
            >
              Upgrade to Premium <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Reassurance note */}
        <p className="text-center text-slate-500 text-sm mt-8">
          <Shield className="inline h-4 w-4 mr-1 text-slate-500" />
          You will never hit a paywall mid-lesson. Free modules are fully unlocked — premium content is clearly marked before you begin.
        </p>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">
            Why OSINT 101?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Built by practitioners, for practitioners. Real-world techniques, not theory.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
              title: "Structured Curriculum",
              desc: "Progressive learning paths from absolute beginner to advanced analyst.",
            },
            {
              icon: <Zap className="h-6 w-6 text-violet-400" />,
              title: "Hands-On Labs",
              desc: "Practice with real tools and scenarios, not just slides and quizzes.",
            },
            {
              icon: <Shield className="h-6 w-6 text-emerald-400" />,
              title: "Ethical & Legal Focus",
              desc: "Every module covers legal boundaries and responsible OSINT practices.",
            },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="mb-3">{f.icon}</div>
              <h3 className="font-bold text-white mb-1">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h2 className="text-2xl font-extrabold font-display text-white mb-3">Ready to start?</h2>
          <p className="text-slate-400 mb-6">Join thousands of analysts sharpening their OSINT skills — free, today.</p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all text-base"
          >
            Browse Free Modules <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
