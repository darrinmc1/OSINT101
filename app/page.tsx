import Link from "next/link"
import { Shield, Search, Newspaper, Scale, ArrowRight, BookOpen, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-950 to-violet-900/20 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Zap className="h-3 w-3" />
            Free OSINT Training Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master Open Source
            <span className="block bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Structured, hands-on OSINT training for security professionals, journalists, investigators, and curious minds. Go from Rookie to Spymaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              <BookOpen className="h-5 w-5" />
              Start Learning Free
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why OSINT Matters Section */}
      <section className="px-6 py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              Why OSINT Matters
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Open Source Intelligence is one of the most in-demand skill sets across security, journalism, law enforcement, and corporate investigations. Here&apos;s where it makes a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Use Case 1: Cybersecurity */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-4 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                <Shield className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Cybersecurity &amp; Threat Intelligence</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Security teams use OSINT to map attack surfaces, identify exposed credentials, track threat actors, and perform reconnaissance before a penetration test. Skills like Google dorking, Shodan searches, and dark web monitoring are standard in the SOC analyst toolkit.
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  🔒 High-demand career skill
                </span>
              </div>
            </div>

            {/* Use Case 2: Journalism */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-4 hover:border-emerald-500/40 hover:bg-white/[0.07] transition-all">
              <div className="h-12 w-12 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
                <Newspaper className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Investigative Journalism</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Award-winning journalists at Bellingcat, BBC, and Reuters rely on OSINT to verify sources, geolocate images, track financial flows, and expose disinformation. Techniques like reverse image search and social media analysis have broken major international stories.
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  📰 Used by Bellingcat &amp; BBC
                </span>
              </div>
            </div>

            {/* Use Case 3: Corporate Investigations */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-4 hover:border-violet-500/40 hover:bg-white/[0.07] transition-all">
              <div className="h-12 w-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                <Search className="h-6 w-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Corporate &amp; Due Diligence Investigations</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Risk analysts, private investigators, and compliance teams use OSINT to vet business partners, uncover fraud, trace assets, and monitor brand reputation. A single OSINT report can save a company millions in bad deals or regulatory fines.
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                  💼 Fraud prevention &amp; compliance
                </span>
              </div>
            </div>

            {/* Use Case 4: Law Enforcement */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 flex flex-col gap-4 hover:border-amber-500/40 hover:bg-white/[0.07] transition-all">
              <div className="h-12 w-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                <Scale className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Law Enforcement &amp; Missing Persons</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Police agencies and volunteer communities like Trace Labs use OSINT in missing persons cases, counter-terrorism operations, and cybercrime investigations. Digital footprints left across social platforms, forums, and public records can be pivotal evidence.
                </p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  🔍 Used in real investigations
                </span>
              </div>
            </div>
          </div>

          {/* CTA under use cases */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 mb-5 text-sm">
              Ready to build skills that matter across all these fields?
            </p>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              Explore the Training Modules
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">10+</p>
                <p className="text-slate-400 text-sm">Structured Learning Modules</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">100%</p>
                <p className="text-slate-400 text-sm">Free to Start — No Credit Card</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white mb-1">4</p>
                <p className="text-slate-400 text-sm">Career Paths Covered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="px-6 py-16 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="h-14 w-14 rounded-2xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mx-auto mb-5">
            <Users className="h-7 w-7 text-violet-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display mb-4">
            Join a Community of OSINT Practitioners
          </h2>
          <p className="text-slate-400 mb-8">
            Connect with analysts, journalists, and investigators who are applying these skills every day. Share techniques, get feedback, and level up together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
            >
              <Users className="h-5 w-5" />
              Join the Community
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Read the Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
