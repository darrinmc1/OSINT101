import Link from "next/link"
import { ArrowRight, Shield, Search, Users, Star, CheckCircle, TrendingUp, BookOpen, Award } from "lucide-react"

const testimonials = [
  {
    quote: "OSINT 101 took me from zero to confidently running open-source investigations in under a month. The structured modules are exactly what I needed.",
    name: "Marcus T.",
    role: "Freelance Investigative Journalist",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "I use the techniques from OSINT 101 daily for due diligence on clients. It's become an indispensable part of my workflow.",
    name: "Sarah K.",
    role: "Corporate Risk Analyst",
    avatar: "SK",
    stars: 5,
  },
  {
    quote: "The Case File planner alone is worth it. I've cut my research time in half and my reports are far more thorough.",
    name: "James R.",
    role: "Private Investigator",
    avatar: "JR",
    stars: 5,
  },
  {
    quote: "Finally, a resource that treats OSINT seriously. The advanced modules on dark web monitoring changed how I approach threat intelligence.",
    name: "Priya M.",
    role: "Cybersecurity Analyst",
    avatar: "PM",
    stars: 5,
  },
]

const stats = [
  { value: "12,000+", label: "Analysts Trained" },
  { value: "95%", label: "Completion Rate" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "50+", label: "Modules & Resources" },
]

const usedBy = [
  "Investigative Journalists",
  "Law Enforcement",
  "Corporate Security Teams",
  "Private Investigators",
  "Cybersecurity Professionals",
  "Academic Researchers",
]

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Progress from Rookie to Spymaster with curated modules built by practitioners.",
  },
  {
    icon: Search,
    title: "Case File Planner",
    description: "Plan and execute real investigations with our AI-assisted case management tool.",
  },
  {
    icon: Shield,
    title: "Vetted Techniques",
    description: "Every method is legally sound, ethically grounded, and field-tested.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Earn XP, unlock badges, and maintain streaks to stay sharp.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/60 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
            <Star className="h-3.5 w-3.5 fill-indigo-400 text-indigo-400" />
            Trusted by 12,000+ analysts worldwide
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
            Master OSINT.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Investigate Anything.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The most comprehensive open-source intelligence training platform. Learn real-world techniques used by journalists, investigators, and security professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 text-lg"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-lg"
            >
              Browse Modules
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required &mdash; free tier available forever.</p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/5 bg-white/[0.02] py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold font-display bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Used By */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Used by professionals across industries</p>
          <div className="flex flex-wrap justify-center gap-3">
            {usedBy.map((role) => (
              <span
                key={role}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Everything you need to investigate smarter</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From foundational skills to advanced tradecraft — all in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-indigo-300" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Trusted by investigators who get results
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Don&apos;t take our word for it — here&apos;s what analysts say after completing OSINT 101.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
                <p className="text-slate-300 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-indigo-950/40 to-slate-950 border-y border-indigo-500/10">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 md:p-10">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold mb-4">
              <Award className="h-4 w-4" />
              Student Success Story
            </div>
            <blockquote className="text-xl md:text-2xl font-bold text-white leading-snug mb-6">
              &ldquo;Within 6 weeks of completing the Advanced module, I uncovered a fraud network that had evaded detection for 3 years. OSINT 101 gave me the exact methodology I needed.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-sm font-bold text-white">
                DL
              </div>
              <div>
                <div className="font-semibold text-white">David L.</div>
                <div className="text-sm text-slate-400">Financial Crimes Investigator, EU</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold font-display mb-3">What you&apos;ll be able to do</h2>
            <p className="text-slate-400">Practical skills you can apply from day one.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Trace anonymous accounts across platforms",
              "Conduct advanced Google dorking searches",
              "Map networks of people and organizations",
              "Monitor the dark web for mentions",
              "Verify images and videos with reverse search",
              "Build airtight investigation case files",
              "Geolocate photos from metadata and landmarks",
              "Stay anonymous while gathering intelligence",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-violet-950/40 p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Ready to start investigating?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Join 12,000+ analysts who&apos;ve levelled up their OSINT skills. Start free — no credit card needed.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 text-lg"
            >
              Create Free Account
              <ArrowRight className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-sm text-slate-500">Free tier includes 3 full modules and the Case File planner.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
