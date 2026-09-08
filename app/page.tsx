import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Star, CheckCircle, TrendingUp, Award } from "lucide-react"
import { learningModules } from "@/data/modules"

const stats = [
  { label: "Analysts Trained", value: "12,400+", icon: Users },
  { label: "Lessons Completed", value: "98,000+", icon: BookOpen },
  { label: "Completion Rate", value: "94%", icon: TrendingUp },
  { label: "5-Star Reviews", value: "2,300+", icon: Star },
]

const testimonials = [
  {
    quote: "This platform completely changed how I approach threat analysis. The structured modules and real-world examples made complex concepts click in ways textbooks never did.",
    name: "Sarah K.",
    role: "SOC Analyst, Financial Services",
    initials: "SK",
    color: "bg-blue-600",
  },
  {
    quote: "I went from zero CTI knowledge to confidently producing intelligence reports within three months. The free access made it possible for me to upskill without budget approval.",
    name: "Marcus T.",
    role: "Junior Threat Intelligence Analyst",
    initials: "MT",
    color: "bg-emerald-600",
  },
  {
    quote: "The MITRE ATT&CK and diamond model modules are exceptional. I reference the materials regularly even after completing the course. Highly recommend to any security professional.",
    name: "Priya R.",
    role: "Senior Security Engineer",
    initials: "PR",
    color: "bg-violet-600",
  },
  {
    quote: "As a team lead, I had my entire analyst team complete this training. The consistent framework it provides has dramatically improved our collective threat reporting quality.",
    name: "James O.",
    role: "CTI Team Lead, Healthcare",
    initials: "JO",
    color: "bg-amber-600",
  },
  {
    quote: "The bite-sized lessons fit perfectly into my busy schedule. I completed the full curriculum over four weeks during lunch breaks. The knowledge gain was absolutely worth it.",
    name: "Aisha M.",
    role: "Incident Responder",
    initials: "AM",
    color: "bg-rose-600",
  },
  {
    quote: "What sets this apart is the practical focus. Every module connects theory to real analyst workflows. I applied what I learned on day one back at work.",
    name: "David L.",
    role: "Threat Hunter, Tech Industry",
    initials: "DL",
    color: "bg-cyan-600",
  },
]

const badges = [
  { icon: Shield, label: "100% Free", description: "No paywalls, ever" },
  { icon: Award, label: "Expert Curated", description: "Industry practitioners" },
  { icon: CheckCircle, label: "Self-Paced", description: "Learn on your schedule" },
  { icon: TrendingUp, label: "Career Focused", description: "Real-world skills" },
]

export default function HomePage() {
  const featuredModules = learningModules.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Free Cyber Threat Intelligence Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Master Threat Intelligence.
              <span className="text-blue-400"> Free.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Structured, practitioner-led training covering the full CTI lifecycle — from intelligence requirements to finished reporting. Trusted by analysts at organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Start Learning Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-100 font-semibold px-8 py-3.5 rounded-lg transition-colors border border-gray-700"
              >
                <BookOpen className="w-5 h-5" />
                Browse Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge) => {
              const Icon = badge.icon
              return (
                <div key={badge.label} className="flex items-center gap-3 bg-gray-900 rounded-lg px-4 py-3 border border-gray-800">
                  <div className="flex-shrink-0 w-9 h-9 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{badge.label}</div>
                    <div className="text-xs text-gray-400">{badge.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Modules */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Start with the Fundamentals</h2>
              <p className="text-gray-400">Build a solid foundation with our most popular modules</p>
            </div>
            <Link
              href="/learn"
              className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View all modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredModules.map((module) => (
              <Link
                key={module.id}
                href={`/learn/${module.id}`}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all"
              >
                <div className="text-3xl mb-4">{module.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{module.description}</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {module.lessons?.length ?? 0} lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {module.level ?? "Beginner"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 sm:hidden text-center">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              View all modules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300 font-medium">Trusted by Security Professionals</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">What Analysts Are Saying</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Join thousands of security professionals who have leveled up their threat intelligence skills.
            </p>
          </div>

          {/* Star rating summary */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-xl px-6 py-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <div className="text-white font-bold text-lg">4.9</div>
              <div className="text-gray-400 text-sm">from 2,300+ reviews</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-gray-700 transition-colors"
              >
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-800">
                  <div
                    className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-br from-blue-900/40 to-gray-900 border border-blue-500/20 rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your CTI Skills?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Start your free training today. No account required, no credit card, no limits.
            </p>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
            >
              Begin Free Training
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
