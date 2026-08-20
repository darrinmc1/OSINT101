import Link from "next/link"
import { ArrowRight, Shield, Search, Users, Star, BookOpen, TrendingUp, Award, Quote } from "lucide-react"
import { EmailCapture } from "@/components/email-capture"

const testimonials = [
  {
    quote: "OSINT 101 took me from zero to confidently running open-source investigations in under a month. The structured modules are exactly what I needed.",
    name: "Sarah K.",
    role: "Freelance Investigative Journalist",
    avatar: "SK",
    stars: 5,
  },
  {
    quote: "As a cybersecurity analyst, I needed to sharpen my OSINT skills fast. This platform delivered practical, real-world techniques I use every single day.",
    name: "Marcus T.",
    role: "Cybersecurity Analyst",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "The community alone is worth it. Being able to discuss techniques with other investigators has accelerated my learning more than any book ever could.",
    name: "Priya R.",
    role: "Corporate Due Diligence Specialist",
    avatar: "PR",
    stars: 5,
  },
]

const companyLogos = [
  { name: "Reuters", abbr: "R" },
  { name: "Bellingcat", abbr: "BC" },
  { name: "ProPublica", abbr: "PP" },
  { name: "CrowdStrike", abbr: "CS" },
  { name: "Recorded Future", abbr: "RF" },
  { name: "The Guardian", abbr: "TG" },
]

const stats = [
  { value: "12,000+", label: "Investigators Trained" },
  { value: "94%", label: "Completion Rate" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "150+", label: "Countries Represented" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="container relative mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <Shield className="h-4 w-4" />
              <span>Trusted by 12,000+ investigators worldwide</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Master OSINT.
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Investigate Smarter.
              </span>
            </h1>
            <p className="mb-10 text-lg text-slate-400 md:text-xl">
              The most comprehensive open-source intelligence training platform. Learn professional investigation techniques used by journalists, analysts, and security researchers.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Start Learning Free
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-slate-400 hover:text-white"
              >
                See How It Works
              </Link>
            </div>
            {/* Social proof micro-signal */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {["JD", "AM", "KL", "RP", "SW"].map((initials) => (
                  <div
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-800 bg-gradient-to-br from-blue-500 to-cyan-500 text-xs font-bold text-white"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-400">
                <span className="font-semibold text-white">340 investigators</span> joined this week
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-slate-700/50 bg-slate-800/50 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
            Trusted by professionals at leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {companyLogos.map((company) => (
              <div
                key={company.name}
                className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-5 py-3 transition-colors hover:border-slate-600"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded bg-blue-600/20 text-xs font-bold text-blue-400">
                  {company.abbr}
                </div>
                <span className="text-sm font-medium text-slate-400">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Everything you need to investigate</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              From beginner fundamentals to advanced tradecraft, our curriculum is built by working professionals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 transition-colors hover:border-slate-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/20">
                <Search className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Structured Curriculum</h3>
              <p className="text-slate-400">
                50+ modules covering social media intelligence, geolocation, network analysis, and more — organized for progressive skill-building.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 transition-colors hover:border-slate-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-600/20">
                <BookOpen className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Hands-On Practice</h3>
              <p className="text-slate-400">
                Real-world exercises and case studies let you apply techniques immediately. Learn by doing, not just watching.
              </p>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-8 transition-colors hover:border-slate-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600/20">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Expert Community</h3>
              <p className="text-slate-400">
                Join thousands of investigators sharing techniques, tools, and insights. Get feedback from seasoned professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
              <Star className="h-4 w-4 fill-yellow-400" />
              <span>4.9 out of 5 from 2,400+ reviews</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What investigators are saying</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Join thousands of professionals who have transformed their investigation capabilities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-xl border border-slate-700/50 bg-slate-800/80 p-8 transition-colors hover:border-slate-600"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-700" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-slate-300 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-sm font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Banner */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-900/30 via-slate-800/50 to-cyan-900/30 p-10 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  <span>Success Story</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  From IT support to leading a threat intelligence team in 8 months
                </h3>
                <p className="mb-6 text-slate-400">
                  &ldquo;I had no formal investigation background. OSINT 101 gave me the structured knowledge and credibility to pivot my career entirely. I now lead a 6-person threat intel team at a Fortune 500 company.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-teal-500 text-sm font-bold text-white">
                    DM
                  </div>
                  <div>
                    <div className="font-semibold text-white">David M.</div>
                    <div className="text-sm text-slate-400">Threat Intelligence Lead, Fortune 500</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 p-6 text-center">
                  <Award className="mx-auto mb-3 h-8 w-8 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">8 mo</div>
                  <div className="text-sm text-slate-400">Career pivot timeline</div>
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 p-6 text-center">
                  <TrendingUp className="mx-auto mb-3 h-8 w-8 text-green-400" />
                  <div className="text-2xl font-bold text-white">+65%</div>
                  <div className="text-sm text-slate-400">Salary increase</div>
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 p-6 text-center">
                  <Users className="mx-auto mb-3 h-8 w-8 text-blue-400" />
                  <div className="text-2xl font-bold text-white">6-person</div>
                  <div className="text-sm text-slate-400">Team now leads</div>
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 p-6 text-center">
                  <BookOpen className="mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <div className="text-2xl font-bold text-white">42</div>
                  <div className="text-sm text-slate-400">Modules completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture / CTA Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to start your investigation journey?
          </h2>
          <p className="mb-10 text-lg text-slate-400">
            Join 12,000+ investigators. Get free access to our foundational modules and weekly OSINT tips.
          </p>
          <EmailCapture />
          <p className="mt-4 text-sm text-slate-500">No credit card required. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
