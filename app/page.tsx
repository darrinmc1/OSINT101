import Link from "next/link"
import { ArrowRight, Shield, Users, BookOpen, Star, CheckCircle, Award } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950" />

        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-1.5 mb-6 text-sm text-indigo-300">
          <Shield className="w-4 h-4" />
          <span>Trusted by security professionals worldwide</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mb-6">
          Master Cybersecurity Skills That{" "}
          <span className="text-indigo-400">Actually Matter</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8">
          Hands-on labs, real-world scenarios, and expert-curated content to take your security career to the next level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Learning Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Browse Courses
          </Link>
        </div>

        {/* Social Proof Metrics */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10">
          <div className="flex items-center gap-2 text-slate-300">
            <Users className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <span className="font-semibold text-white">5,000+</span>
            <span className="text-slate-400">students trained</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-300">
            <BookOpen className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <span className="font-semibold text-white">120+</span>
            <span className="text-slate-400">hands-on labs</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-300">
            <Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-slate-400">average rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-700" />
          <div className="flex items-center gap-2 text-slate-300">
            <Award className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            <span className="font-semibold text-white">Industry</span>
            <span className="text-slate-400">recognized certs</span>
          </div>
        </div>

        {/* Trust indicators row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No credit card required</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Free tier available</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Everything you need to level up
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Real-World Labs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Practice in isolated environments that mirror actual attack and defense scenarios used by professionals.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <BookOpen className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Structured Paths</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Follow curated learning paths from beginner to expert, aligned with industry certifications.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
              <div className="p-2 rounded-lg bg-indigo-500/10">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Join thousands of security professionals sharing knowledge, tips, and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
