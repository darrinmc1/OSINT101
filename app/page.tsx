import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Users, Star, CheckCircle, TrendingUp, Award, Search, Globe, Zap } from "lucide-react"

const stats = [
  { value: "12,400+", label: "Students Trained", icon: Users },
  { value: "47", label: "Training Modules", icon: BookOpen },
  { value: "98%", label: "Satisfaction Rate", icon: Star },
  { value: "Free", label: "Always & Forever", icon: CheckCircle },
]

const testimonials = [
  {
    quote: "OSINT 101 gave me the foundational skills I needed to land my first threat intelligence role. The structured modules made complex techniques approachable.",
    name: "Marcus T.",
    role: "Threat Intelligence Analyst",
    initials: "MT",
    accent: "from-indigo-500 to-violet-600",
  },
  {
    quote: "I went from knowing nothing about open-source intelligence to confidently running investigations within a few weeks. The case-file exercises are brilliant.",
    name: "Priya S.",
    role: "Cybersecurity Researcher",
    initials: "PS",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    quote: "As a journalist, OSINT skills are essential. This platform taught me Google dorking, social media analysis, and dark web monitoring — all for free.",
    name: "Lena K.",
    role: "Investigative Journalist",
    initials: "LK",
    accent: "from-violet-500 to-pink-600",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-violet-950/40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Free OSINT Training Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master Open-Source
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence Skills
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Structured, practical OSINT training trusted by analysts, researchers, and journalists worldwide. Start free. Stay free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Start Training Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-xl px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-2xl md:text-3xl font-extrabold font-display text-white">{value}</span>
              <span className="text-xs text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3">Everything You Need to Become an OSINT Analyst</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From beginner fundamentals to advanced tradecraft — all in one place.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Hands-On Modules", desc: "47 structured lessons covering Google dorking, social media OSINT, dark web monitoring, and more.", accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
              { icon: Globe, title: "Real Case Files", desc: "Practice with realistic investigation scenarios that mirror actual analyst workflows.", accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
              { icon: Zap, title: "Gamified Progress", desc: "Earn XP, unlock badges, and track your streak as you level up from Rookie to Spymaster.", accent: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
            ].map(({ icon: Icon, title, desc, accent }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className={`h-11 w-11 rounded-xl border flex items-center justify-center mb-4 ${accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              Student Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3">Trusted by Analysts Worldwide</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Join over 12,400 students who have leveled up their OSINT skills with our free training.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initials, accent }) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{name}</p>
                    <p className="text-xs text-slate-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Metrics */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 backdrop-blur-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-display mb-3">Results That Speak for Themselves</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Our students consistently report career advancement, improved investigation skills, and greater confidence in their OSINT tradecraft.</p>
              <ul className="space-y-3">
                {[
                  "87% report improved investigation efficiency",
                  "63% used skills in a professional context within 30 days",
                  "4.9/5 average module rating across all courses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Career Advancement", pct: 87, color: "bg-indigo-500" },
                { label: "Professional Application", pct: 63, color: "bg-violet-500" },
                { label: "Student Satisfaction", pct: 98, color: "bg-emerald-500" },
              ].map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                    <span>{label}</span>
                    <span className="font-bold text-white">{pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <TrendingUp className="h-12 w-12 text-indigo-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Ready to Start Your OSINT Journey?</h2>
          <p className="text-slate-400 mb-8">Join thousands of analysts, researchers, and journalists who train with OSINT 101 — completely free.</p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 text-lg"
          >
            Begin Free Training
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
