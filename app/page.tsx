import Link from "next/link"
import { ArrowRight, Shield, Search, Users, Star, CheckCircle, TrendingUp, Award } from "lucide-react"

const testimonials = [
  {
    quote: "OSINT 101 gave me the structured foundation I needed. Within 3 weeks I landed a threat intelligence role.",
    name: "Marcus T.",
    role: "Threat Intelligence Analyst",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "The modules are incredibly practical. I went from zero to running real investigations in under a month.",
    name: "Priya S.",
    role: "Security Researcher",
    avatar: "PS",
    stars: 5,
  },
  {
    quote: "Best structured OSINT curriculum online. The gamification keeps you coming back every day.",
    name: "Jordan K.",
    role: "Digital Forensics Student",
    avatar: "JK",
    stars: 5,
  },
]

const stats = [
  { value: "12,400+", label: "Analysts Trained", icon: Users },
  { value: "94%", label: "Completion Rate", icon: TrendingUp },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "38", label: "Structured Modules", icon: Award },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-950 to-violet-900/20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Shield className="h-3.5 w-3.5" />
            Trusted by 12,400+ analysts worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
            Master OSINT.
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              From Rookie to Spymaster.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Structured, gamified training in open-source intelligence. Learn real investigative techniques used by professionals in cybersecurity, journalism, and law enforcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Start Free Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Search className="h-4 w-4" />
              Browse Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-xl px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-indigo-400" />
              </div>
              <p className="text-2xl md:text-3xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-4">
              <Star className="h-3.5 w-3.5" />
              Student Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-3">
              Real analysts. Real results.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Join thousands of investigators, researchers, and security professionals who leveled up with OSINT 101.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {testimonials.map(({ quote, name, role, avatar, stars }) => (
              <div
                key={name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{name}</p>
                    <p className="text-xs text-slate-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Badges / Trust Signals */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-xl p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300"><span className="font-bold text-white">No prior experience</span> required to start</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300"><span className="font-bold text-white">Earn verifiable badges</span> for every milestone</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <p className="text-sm text-slate-300"><span className="font-bold text-white">Active community</span> of 12,400+ practitioners</p>
                </div>
              </div>
              <Link
                href="/sign-up"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
              >
                Join Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
