import Link from "next/link"
import { JsonLd, organizationSchema, courseListSchema, faqSchema } from "@/components/json-ld"
import { ArrowRight, BookOpen, Shield, Search, Users, Zap, Star } from "lucide-react"

export const metadata = {
  title: "OSINT 101 — Open-Source Intelligence Training",
  description:
    "Master open-source intelligence with structured courses from beginner to advanced. Learn digital footprinting, social media OSINT, dark web monitoring, and professional tradecraft.",
  openGraph: {
    title: "OSINT 101 — Open-Source Intelligence Training",
    description:
      "Master open-source intelligence with structured courses from beginner to advanced. Learn digital footprinting, social media OSINT, dark web monitoring, and professional tradecraft.",
    url: "https://osint101.com",
    siteName: "OSINT 101",
    type: "website"
  }
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={courseListSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6">
            <Zap className="h-3 w-3" />
            Structured OSINT Training Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white leading-tight mb-6">
            Master Open-Source
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            From digital footprinting to dark web monitoring — learn professional OSINT tradecraft through structured, hands-on training modules.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              <BookOpen className="h-5 w-5" />
              Start Learning Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <Star className="h-4 w-4 text-violet-400" />
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
              Everything You Need to Become an OSINT Analyst
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Structured curriculum, practical exercises, and a community of investigators.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <BookOpen className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">6 Structured Modules</h3>
              <p className="text-slate-400 text-sm">
                Progress from OSINT fundamentals through advanced tradecraft with a clear, skill-building curriculum.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                <Shield className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Ethical & Legal Focus</h3>
              <p className="text-slate-400 text-sm">
                Every module emphasizes responsible, legal intelligence gathering with real-world operational security practices.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <Search className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hands-On Techniques</h3>
              <p className="text-slate-400 text-sm">
                Learn Google dorking, social media OSINT, dark web monitoring, and digital footprinting through practical exercises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">
              Everything you need to know about OSINT 101.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Is OSINT 101 free to use?",
                a: "Yes — the free plan includes 3 core training modules and basic achievement badges. Upgrade to Premium for full access to all 6 modules, advanced certifications, and priority support."
              },
              {
                q: "Who is OSINT 101 designed for?",
                a: "OSINT 101 is built for cybersecurity professionals, investigators, journalists, law enforcement, corporate security teams, and anyone curious about ethical intelligence gathering."
              },
              {
                q: "How long does it take to complete the training?",
                a: "Each module takes 1–3 hours. The full 6-module curriculum typically takes 10–20 hours depending on your experience and how deeply you engage with the exercises."
              },
              {
                q: "Is OSINT legal?",
                a: "OSINT involves collecting information from publicly available sources, which is generally legal. OSINT 101 emphasizes ethical practices and legal compliance throughout all training. Users are responsible for compliance with laws in their jurisdiction."
              },
              {
                q: "Do I receive a certificate after completing courses?",
                a: "Premium members receive advanced certifications upon completing modules. Free members earn progress badges to track their journey through the curriculum."
              }
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <h3 className="text-base font-bold text-white mb-2">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl p-10">
            <Users className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold font-display text-white mb-4">
              Join the OSINT 101 Community
            </h2>
            <p className="text-slate-300 mb-8">
              Start your intelligence training today. Free access to core modules — no credit card required.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
