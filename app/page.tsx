import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Star, CheckCircle, TrendingUp, Zap } from "lucide-react"

const testimonials = [
  {
    quote: "OSINT 101 gave me the foundational skills I needed to transition into a threat intelligence role. The structured modules made complex topics approachable.",
    name: "Sarah K.",
    role: "Threat Intelligence Analyst",
    avatar: "SK",
    stars: 5,
  },
  {
    quote: "I completed the beginner track in a weekend and immediately applied the techniques at work. Best free training resource I've found for OSINT.",
    name: "Marcus T.",
    role: "Security Researcher",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "The case-file exercises are incredibly realistic. It's not just theory — you actually practice the skills in simulated investigations.",
    name: "Priya N.",
    role: "Digital Forensics Student",
    avatar: "PN",
    stars: 5,
  },
]

const stats = [
  { value: "12,000+", label: "Students Trained", icon: Users },
  { value: "94%", label: "Completion Rate", icon: TrendingUp },
  { value: "40+", label: "Lessons & Modules", icon: BookOpen },
  { value: "100%", label: "Free to Start", icon: Zap },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 opacity-80" />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Shield className="h-3.5 w-3.5" />
            Free OSINT Training Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-100 to-violet-300 bg-clip-text text-transparent">
            Master OSINT from Zero to Operator
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Structured, hands-on open-source intelligence training for analysts, researchers, and security professionals. Start free — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Explore the Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-xl px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className="h-6 w-6 text-indigo-400" />
              <span className="text-3xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">
              Trusted by Analysts Worldwide
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Join thousands of security professionals and students who have leveled up their OSINT skills with our free training.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">
              Everything You Need to Get Started
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Practical, structured OSINT training built for real-world application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Structured Modules", desc: "Progressive learning tracks from Beginner to Advanced, covering all core OSINT disciplines." },
              { icon: Shield, title: "Hands-On Exercises", desc: "Realistic case-file simulations that put your skills to the test in practical scenarios." },
              { icon: CheckCircle, title: "Free to Start", desc: "Access beginner and intermediate content at no cost. No credit card, no paywalls to get started." },
              { icon: TrendingUp, title: "Track Your Progress", desc: "XP, badges, and streaks keep you motivated and show how far you've come." },
              { icon: Users, title: "Active Community", desc: "Connect with fellow analysts, share techniques, and collaborate on challenges." },
              { icon: Zap, title: "Always Up to Date", desc: "Content is continuously updated to reflect the latest OSINT tools, techniques, and best practices." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <f.icon className="h-7 w-7 text-indigo-400 mb-3" />
                <h3 className="font-bold text-white mb-1">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-3">
            Ready to Start Your OSINT Journey?
          </h2>
          <p className="text-slate-300 mb-8">
            Join 12,000+ analysts already training on OSINT 101. It&apos;s completely free to begin.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
          >
            Start Learning Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
