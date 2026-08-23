import Link from "next/link"
import { ArrowRight, Shield, Search, BookOpen, Users, Zap, Lock } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0f1e] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <Shield className="h-4 w-4" />
            <span>Free & Open Source Intelligence Training</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Master OSINT Skills{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              From Zero to Expert
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-300 sm:text-xl">
            OSINT 101 gives you a structured, hands-on path to learn Open Source Intelligence — the same techniques used by investigators, journalists, and security professionals worldwide.
          </p>

          {/* Supporting benefit bullets */}
          <ul className="mx-auto mb-10 flex max-w-xl flex-col gap-2 text-left sm:flex-row sm:justify-center sm:gap-6">
            <li className="flex items-center gap-2 text-slate-400">
              <Zap className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>Beginner-friendly modules</span>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <Lock className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>Real-world techniques</span>
            </li>
            <li className="flex items-center gap-2 text-slate-400">
              <BookOpen className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>Always free to access</span>
            </li>
          </ul>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0a0f1e]"
            >
              Start Learning for Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-base font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              What is OSINT?
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof / stats strip */}
      <section className="border-y border-slate-800 bg-slate-900/50 px-4 py-8">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { value: "50+", label: "Lessons" },
            { value: "10k+", label: "Learners" },
            { value: "100%", label: "Free" },
            { value: "Always", label: "Up to Date" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold">Everything you need to get started</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-slate-400">
            Whether you are a complete beginner or looking to sharpen existing skills, OSINT 101 has a clear learning path for you.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Search,
                title: "Structured Curriculum",
                description:
                  "Follow a carefully designed path from foundational concepts to advanced investigative techniques.",
              },
              {
                icon: Shield,
                title: "Ethical & Legal Focus",
                description:
                  "Every module emphasises responsible, legal use of open source intelligence methods.",
              },
              {
                icon: BookOpen,
                title: "Practical Exercises",
                description:
                  "Apply what you learn with real-world scenarios and hands-on challenges.",
              },
              {
                icon: Zap,
                title: "Quick to Start",
                description:
                  "No prior experience required. Jump straight in and start building skills today.",
              },
              {
                icon: Users,
                title: "Community Driven",
                description:
                  "Join a growing community of investigators, researchers, and security enthusiasts.",
              },
              {
                icon: Lock,
                title: "Privacy Aware",
                description:
                  "Learn how to protect your own digital footprint while investigating others.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40"
              >
                <feature.icon className="mb-4 h-8 w-8 text-blue-400" />
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-slate-900/60 p-10 text-center">
          <h2 className="mb-3 text-3xl font-bold">Ready to start your OSINT journey?</h2>
          <p className="mb-8 text-slate-400">
            Join thousands of learners who have already taken the first step toward becoming skilled open source intelligence practitioners.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            Get Started — It is Free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
