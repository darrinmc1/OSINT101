import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Star, CheckCircle, TrendingUp, Award } from "lucide-react"

const testimonials = [
  {
    quote: "OSINT 101 gave me the foundational skills I needed to land my first threat intelligence role. The structured modules made complex topics approachable.",
    name: "Marcus T.",
    role: "Threat Intelligence Analyst",
    avatar: "MT",
    accentColor: "from-indigo-500 to-violet-600",
  },
  {
    quote: "I went from zero OSINT knowledge to confidently running open-source investigations in under a month. The free tier alone is incredibly valuable.",
    name: "Priya S.",
    role: "Cybersecurity Student",
    avatar: "PS",
    accentColor: "from-emerald-500 to-teal-600",
  },
  {
    quote: "The case-file exercises are what set this apart. Hands-on practice with real-world scenarios accelerated my learning faster than any textbook.",
    name: "Jordan K.",
    role: "Digital Forensics Investigator",
    avatar: "JK",
    accentColor: "from-violet-500 to-pink-600",
  },
]

const stats = [
  { value: "12,000+", label: "Analysts Trained", icon: Users, color: "text-indigo-400" },
  { value: "94%", label: "Completion Rate", icon: TrendingUp, color: "text-emerald-400" },
  { value: "4.9/5", label: "Average Rating", icon: Star, color: "text-amber-400" },
  { value: "100% Free", label: "Core Curriculum", icon: Award, color: "text-violet-400" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-violet-950/60 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Shield className="h-3.5 w-3.5" />
            Free OSINT Training Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master Open-Source
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Structured, hands-on OSINT training for analysts, investigators, and security professionals — completely free to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              <BookOpen className="h-5 w-5" />
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">Everything You Need to Get Started</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From foundational concepts to advanced tradecraft — structured for real-world application.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🔍", title: "Structured Modules", desc: "Progressive learning tracks from Rookie to Spymaster, each building on the last." },
              { emoji: "🗂️", title: "Case-File Exercises", desc: "Apply skills to realistic investigation scenarios with guided walkthroughs." },
              { emoji: "📚", title: "Resource Library", desc: "Curated tools, techniques, and references used by professional OSINT analysts." },
              { emoji: "🏅", title: "Badges & XP", desc: "Track your progress and earn recognition as you level up your skills." },
              { emoji: "🌐", title: "Community", desc: "Connect with thousands of analysts, share findings, and learn together." },
              { emoji: "⚡", title: "Always Free Core", desc: "The foundational curriculum is and always will be completely free to access." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all">
                <div className="text-2xl mb-3">{f.emoji}</div>
                <h3 className="font-bold text-white mb-1.5">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-950/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-4">
              <Star className="h-3.5 w-3.5" />
              Trusted by Analysts Worldwide
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">What Our Community Says</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Join thousands of security professionals who have leveled up their OSINT skills with our platform.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4 hover:border-white/20 transition-all">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${t.accentColor} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            {[
              "No credit card required",
              "Cancel anytime",
              "Trusted by Fortune 500 security teams",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">Ready to Start Your OSINT Journey?</h2>
          <p className="text-slate-400 mb-8">Join over 12,000 analysts already training on OSINT 101. No signup required to explore the free modules.</p>
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 text-lg"
          >
            <BookOpen className="h-5 w-5" />
            Begin Free Training
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
