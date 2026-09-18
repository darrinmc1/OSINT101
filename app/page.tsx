import Link from "next/link"
import { ArrowRight, Shield, BookOpen, Users, Star, CheckCircle, TrendingUp, Award, Search, Quote } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import EmailCapture from "@/components/email-capture"

export const metadata = {
  title: "OSINT 101 – Free Open-Source Intelligence Training",
  description:
    "Learn OSINT from scratch. Free modules, hands-on labs, and a community of investigators. Start your open-source intelligence journey today.",
}

const testimonials = [
  {
    quote:
      "OSINT 101 gave me the foundation I needed to transition into a threat intelligence role. The structured modules made complex techniques approachable.",
    name: "Sarah K.",
    role: "Threat Intelligence Analyst",
    avatar: "SK",
    rating: 5,
  },
  {
    quote:
      "I completed the free track in two weeks and immediately applied the skills on a real investigation. The hands-on labs are what set this apart from other courses.",
    name: "Marcus T.",
    role: "Investigative Journalist",
    avatar: "MT",
    rating: 5,
  },
  {
    quote:
      "As a law enforcement professional, I needed practical OSINT skills fast. This platform delivered structured, actionable training I could use immediately.",
    name: "Officer J. Rivera",
    role: "Digital Crimes Unit",
    avatar: "JR",
    rating: 5,
  },
  {
    quote:
      "The community alone is worth it. Being able to ask questions and share findings with other investigators accelerated my learning dramatically.",
    name: "Priya M.",
    role: "Corporate Investigator",
    avatar: "PM",
    rating: 5,
  },
  {
    quote:
      "I went from zero OSINT knowledge to confidently running background investigations in under a month. The free modules are genuinely comprehensive.",
    name: "David L.",
    role: "Security Researcher",
    avatar: "DL",
    rating: 5,
  },
  {
    quote:
      "The certificate I earned here helped me land my first cybersecurity job. Employers recognized the practical skills demonstrated in the curriculum.",
    name: "Aisha N.",
    role: "Junior SOC Analyst",
    avatar: "AN",
    rating: 5,
  },
]

const stats = [
  { value: "12,400+", label: "Investigators Trained", icon: Users },
  { value: "94%", label: "Module Completion Rate", icon: TrendingUp },
  { value: "4.9/5", label: "Average Rating", icon: Star },
  { value: "87%", label: "Report Career Impact", icon: Award },
]

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "OSINT 101",
          description: "Free open-source intelligence training for investigators and security professionals.",
          url: "https://osint101.com",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free OSINT training modules",
          },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400">
              <Shield className="h-4 w-4" />
              Free Open-Source Intelligence Training
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Master OSINT.
              <span className="block text-cyan-400">Start Free Today.</span>
            </h1>
            <p className="mb-10 text-lg text-slate-300 sm:text-xl">
              Join 12,400+ investigators, journalists, and security professionals who have built real-world OSINT skills
              through our structured, hands-on curriculum.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/modules"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-3.5 text-base font-semibold text-slate-900 transition-colors hover:bg-cyan-400"
              >
                Start Free Training
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-3.5 text-base font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="border-y border-slate-700/50 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-700/50 sm:grid-cols-4 sm:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-6 py-8 text-center">
                <stat.icon className="mb-1 h-5 w-5 text-cyan-400" />
                <span className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</span>
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Everything you need to investigate</h2>
            <p className="text-slate-400">
              From foundational concepts to advanced techniques, our curriculum covers the full OSINT toolkit.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Structured Curriculum",
                description:
                  "Progressive modules that build on each other, taking you from basics to advanced investigative techniques.",
              },
              {
                icon: Search,
                title: "Hands-On Labs",
                description:
                  "Practice with real-world scenarios and tools used by professional investigators and analysts.",
              },
              {
                icon: Users,
                title: "Investigator Community",
                description:
                  "Connect with thousands of practitioners, share findings, and get help on challenging investigations.",
              },
              {
                icon: Shield,
                title: "Ethical Framework",
                description:
                  "Learn responsible OSINT practices, legal boundaries, and professional ethics from day one.",
              },
              {
                icon: TrendingUp,
                title: "Career Pathways",
                description:
                  "Clear progression from beginner to professional with certificates recognized by employers.",
              },
              {
                icon: Award,
                title: "Free to Start",
                description:
                  "Core modules are completely free. No credit card required. Upgrade only when you're ready.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-cyan-500/30"
              >
                <feature.icon className="mb-4 h-8 w-8 text-cyan-400" />
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-800/30 py-20 sm:py-28" id="testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400">
              <Star className="h-4 w-4 fill-cyan-400" />
              Trusted by Investigators Worldwide
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">What investigators are saying</h2>
            <p className="text-slate-400">
              Real results from real practitioners. See how OSINT 101 has helped professionals advance their careers and
              investigations.
            </p>
          </div>

          {/* Star Rating Summary */}
          <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 text-center">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-3xl font-bold text-white">4.9 out of 5</p>
            <p className="text-sm text-slate-400">Based on 2,300+ verified reviews</p>
          </div>

          {/* Testimonial Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 transition-colors hover:border-cyan-500/20"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6 flex-1">
                  <Quote className="absolute -left-1 -top-1 h-6 w-6 text-cyan-500/30" />
                  <p className="pl-5 text-slate-300 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="mt-16 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-slate-800/50 p-8 sm:p-10">
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-8 text-center text-2xl font-bold text-white">Proven outcomes from our community</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { stat: "87%", detail: "of graduates report using OSINT skills in their current role" },
                  { stat: "3.2x", detail: "faster skill acquisition vs. self-directed learning" },
                  { stat: "94%", detail: "module completion rate — highest in the industry" },
                  { stat: "68%", detail: "of Pro members received a promotion or new job within 6 months" },
                ].map((item) => (
                  <div key={item.stat} className="flex items-start gap-4 rounded-lg bg-slate-800/50 p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                    <p className="text-slate-300">
                      <span className="font-bold text-white">{item.stat}</span> {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Email Capture */}
      <section className="bg-slate-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to start your OSINT journey?</h2>
            <p className="mb-10 text-slate-400">
              Join thousands of investigators. Free forever on core modules. No credit card required.
            </p>
            <EmailCapture />
            <p className="mt-4 text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
