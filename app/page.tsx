import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Star, TrendingUp, CheckCircle } from "lucide-react"
import { JsonLd } from "@/components/json-ld"

const testimonials = [
  {
    quote: "OSINT101 gave me the structured foundation I was missing. Within two weeks I went from Googling randomly to running real investigations with confidence.",
    name: "Marcus T.",
    role: "Freelance Investigative Journalist",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "The modules on social media intelligence and geolocation were eye-opening. I use these techniques every week in my security research work.",
    name: "Priya S.",
    role: "Cybersecurity Analyst",
    avatar: "PS",
    stars: 5,
  },
  {
    quote: "Finally a free resource that doesn't feel like it was thrown together. The structured learning path made all the difference for me as a complete beginner.",
    name: "Jordan K.",
    role: "Law Enforcement Professional",
    avatar: "JK",
    stars: 5,
  },
]

const stats = [
  { value: "12,000+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Completion Rate", icon: TrendingUp },
  { value: "8", label: "Core Modules", icon: BookOpen },
  { value: "100%", label: "Free Forever", icon: CheckCircle },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "OSINT101",
          description:
            "Free structured OSINT training for investigators, journalists, and security professionals.",
          url: "https://osint101.com",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <Shield className="h-3.5 w-3.5" />
            Free OSINT Training Platform
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Master Open Source Intelligence
            <span className="block text-blue-400">From Zero to Investigator</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Structured, practical OSINT training for investigators, journalists, security
            professionals, and curious minds. No experience required.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-base font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-5 w-5 text-blue-400" />
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Everything You Need to Get Started</h2>
            <p className="text-slate-400">Practical skills taught through real-world scenarios and hands-on exercises.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Structured Curriculum",
                description:
                  "Follow a clear learning path from fundamentals to advanced techniques, with each module building on the last.",
              },
              {
                icon: Shield,
                title: "Ethical Framework",
                description:
                  "Every technique is taught within a legal and ethical context so you can apply skills responsibly.",
              },
              {
                icon: Users,
                title: "Real-World Focus",
                description:
                  "Exercises based on actual investigation scenarios used by journalists, analysts, and security teams.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
              >
                <feature.icon className="mb-4 h-8 w-8 text-blue-400" />
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-slate-800 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm text-yellow-400">
              <Star className="h-3.5 w-3.5 fill-yellow-400" />
              Trusted by Thousands
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white">What Our Students Say</h2>
            <p className="text-slate-400">
              Join over 12,000 investigators, journalists, and security professionals who have
              levelled up their OSINT skills.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Start Your OSINT Journey?</h2>
          <p className="mb-8 text-slate-400">
            Free, structured, and practical. No sign-up required to begin.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-blue-500"
          >
            Begin Training Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
