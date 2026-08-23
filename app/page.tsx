import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Users, Zap, Star, CheckCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah K.",
    role: "Threat Intelligence Analyst",
    org: "Fortune 500 Security Team",
    avatar: "/avatars/sarah.jpg",
    initials: "SK",
    quote:
      "OSINT 101 gave me a structured path I couldn't find anywhere else. Within two weeks I was running investigations I previously had to outsource. The modules are dense with real tradecraft, not fluff.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    role: "Freelance Investigative Journalist",
    org: "Independent",
    avatar: "/avatars/marcus.jpg",
    initials: "MT",
    quote:
      "I've verified sources on three major stories using techniques from the Social Media OSINT module alone. The case-file planner keeps my research organized and defensible. Absolutely essential.",
    stars: 5,
  },
  {
    name: "Priya N.",
    role: "Digital Forensics Consultant",
    org: "Cybersecurity Firm",
    avatar: "/avatars/priya.jpg",
    initials: "PN",
    quote:
      "The dark web monitoring and Google dorking content is the most up-to-date I've found. My whole team uses OSINT 101 for onboarding new analysts now. It cut our ramp-up time in half.",
    stars: 5,
  },
  {
    name: "James O.",
    role: "Law Enforcement — Cyber Unit",
    org: "Municipal Police Department",
    avatar: "/avatars/james.jpg",
    initials: "JO",
    quote:
      "Coming from a non-technical background, I was worried the content would go over my head. The beginner modules eased me in perfectly. Six months later I'm leading digital investigations for my unit.",
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Shield className="h-3.5 w-3.5" />
            Open-Source Intelligence Training
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Master OSINT.<br />Investigate Anything.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Structured modules, real tradecraft, and a growing community of analysts, journalists, and investigators. Go from curious to capable.
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
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="h-6 w-6 text-indigo-400" />,
              title: "Structured Modules",
              desc: "From beginner fundamentals to advanced tradecraft — every lesson is practical and immediately applicable.",
            },
            {
              icon: <Zap className="h-6 w-6 text-violet-400" />,
              title: "Real Techniques",
              desc: "Google dorking, social media OSINT, dark web monitoring, and more. No filler, no theory-only content.",
            },
            {
              icon: <Users className="h-6 w-6 text-emerald-400" />,
              title: "Active Community",
              desc: "Join analysts, journalists, and investigators sharing tools, tips, and case studies every day.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-lg">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-4">
              <Star className="h-3.5 w-3.5 fill-violet-400 text-violet-400" />
              Trusted by Investigators Worldwide
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-3">
              Real people. Real results.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From law enforcement to journalists to corporate analysts — here's what practitioners say after training with OSINT 101.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col gap-4"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-slate-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Avatar className="h-10 w-10 border border-white/10">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback className="bg-indigo-500/20 text-indigo-300 text-xs font-bold">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">
                      {t.role}
                      <span className="mx-1 text-slate-600">·</span>
                      {t.org}
                    </p>
                  </div>
                  <CheckCircle className="h-4 w-4 text-emerald-400 ml-auto shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Social proof bar */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
            {[
              { value: "12,000+", label: "Analysts Trained" },
              { value: "4.9 / 5", label: "Average Rating" },
              { value: "94%", label: "Completion Rate" },
              { value: "50+", label: "Countries Represented" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 text-center max-w-3xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
          Ready to level up your investigations?
        </h2>
        <p className="text-slate-400 mb-8">
          Start free. No credit card required. Access three full modules and join thousands of practitioners already training on OSINT 101.
        </p>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20 text-lg"
        >
          Create Free Account
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  )
}
