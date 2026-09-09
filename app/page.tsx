import Link from "next/link"
import { ArrowRight, Shield, Search, Users, BookOpen, Star, CheckCircle, TrendingUp, Award, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah K.",
    role: "Cybersecurity Analyst",
    avatar: "SK",
    rating: 5,
    text: "OSINT 101 gave me the practical skills I needed to level up my threat intelligence work. The structured modules made complex techniques approachable.",
    highlight: "Got promoted within 3 months",
  },
  {
    name: "Marcus T.",
    role: "Freelance Investigator",
    avatar: "MT",
    rating: 5,
    text: "I went from knowing nothing about open-source intelligence to confidently running investigations for clients. The case-file exercises are incredibly realistic.",
    highlight: "Landed first paying client",
  },
  {
    name: "Priya M.",
    role: "Journalism Student",
    avatar: "PM",
    rating: 5,
    text: "As a journalist, OSINT skills are essential. This platform taught me how to verify sources and dig deeper than surface-level searches. Absolutely worth it.",
    highlight: "Published investigative piece",
  },
  {
    name: "James R.",
    role: "IT Security Manager",
    avatar: "JR",
    rating: 5,
    text: "The Google dorking and dark web monitoring modules alone were worth the premium subscription. My team now uses these techniques daily.",
    highlight: "Trained entire security team",
  },
]

const stats = [
  { value: "12,400+", label: "Students Enrolled", icon: Users },
  { value: "94%", label: "Completion Rate", icon: TrendingUp },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "38+", label: "Modules Available", icon: BookOpen },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-36 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 opacity-80" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Shield className="h-3.5 w-3.5" />
            The #1 OSINT Training Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master Open-Source
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Structured, hands-on OSINT training for analysts, investigators, journalists, and security professionals. Go from beginner to Spymaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <BookOpen className="h-4 w-4" />
              Browse Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-5 w-5 text-indigo-400 mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Everything you need to become an OSINT expert</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From foundational techniques to advanced tradecraft — all in one structured platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Hands-On Investigations", desc: "Real-world case files and exercises that mirror actual OSINT workflows used by professionals." },
              { icon: Award, title: "Earn Certifications", desc: "Complete modules to earn verifiable badges and certifications that demonstrate your expertise." },
              { icon: Shield, title: "Ethical & Legal Focus", desc: "Every technique is taught within a framework of responsible, legal, and ethical intelligence gathering." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/15 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-4">
              <Star className="h-3.5 w-3.5 fill-violet-400 text-violet-400" />
              Trusted by 12,400+ learners worldwide
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Real results from real students
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Join thousands of analysts, investigators, and security professionals who have leveled up their OSINT skills with us.
            </p>
          </div>

          {/* Star rating summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-white">4.9</div>
              <div className="flex items-center justify-center gap-0.5 mt-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-400 mt-1">Average rating</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/10" />
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white">94%</div>
                <div className="text-xs text-slate-400">Completion rate</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">89%</div>
                <div className="text-xs text-slate-400">Report career impact</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">97%</div>
                <div className="text-xs text-slate-400">Would recommend</div>
              </div>
            </div>
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <Quote className="h-4 w-4 text-indigo-400/40 absolute -top-1 -left-1" />
                  <p className="text-sm text-slate-300 leading-relaxed pl-4">{t.text}</p>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-emerald-400">{t.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below testimonials */}
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm mb-4">Ready to write your own success story?</p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Join 12,400+ Students Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h2 className="text-3xl font-extrabold font-display mb-4">Start free. Upgrade when ready.</h2>
          <p className="text-slate-400 mb-8">Access 3 full modules at no cost. Unlock everything with Premium.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
