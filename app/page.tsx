import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Shield, Search, Globe, BookOpen, Users, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with lazy loading optimization */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority={true}
            quality={75}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            Free OSINT Training Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-tight mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Open Source
            </span>
            <br />
            Intelligence
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn professional OSINT techniques through structured modules, real-world exercises, and a community of investigators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Start Learning Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white border border-white/20 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <BookOpen className="h-5 w-5" />
              Browse Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mb-4">
              Everything You Need to Become an{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                OSINT Analyst
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From beginner fundamentals to advanced tradecraft — structured, practical, and free to start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Structured Curriculum",
                description: "Progress from Rookie to Spymaster with carefully designed learning paths covering all major OSINT disciplines.",
                color: "indigo",
              },
              {
                icon: Search,
                title: "Hands-On Exercises",
                description: "Practice with real-world scenarios, case files, and interactive challenges that build genuine investigative skills.",
                color: "violet",
              },
              {
                icon: Globe,
                title: "Community & Resources",
                description: "Join a community of analysts, access curated tool directories, and stay current with evolving OSINT techniques.",
                color: "purple",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-white/20 transition-all"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Learning Modules" },
              { value: "200+", label: "OSINT Tools" },
              { value: "10K+", label: "Analysts Trained" },
              { value: "Free", label: "To Get Started" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold font-display bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl p-10">
            <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold font-display mb-4">
              Ready to Start Your OSINT Journey?
            </h2>
            <p className="text-slate-300 mb-8">
              Create a free account and access your first three modules immediately. No credit card required.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Create Free Account
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
