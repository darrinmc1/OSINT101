import Link from "next/link"
import { ArrowRight, BookOpen, Shield, Users, Zap } from "lucide-react"

const faqs = [
  {
    q: "What is OSINT?",
    a: "OSINT stands for Open-Source Intelligence — the practice of collecting and analyzing publicly available information from the internet, social media, public records, and other open sources. It is used by security researchers, journalists, law enforcement, and investigators worldwide.",
  },
  {
    q: "Is OSINT legal?",
    a: "Yes — OSINT relies exclusively on publicly available data, making it legal in most jurisdictions when practiced ethically. OSINT101 teaches responsible techniques that respect privacy laws, terms of service, and ethical guidelines. Always verify the laws in your specific country or region.",
  },
  {
    q: "What tools are covered in OSINT101?",
    a: "Our curriculum covers a wide range of industry-standard OSINT tools including Maltego, Shodan, theHarvester, Recon-ng, SpiderFoot, Google Dorking techniques, WHOIS lookups, social media intelligence (SOCMINT) tools, and many more. Modules range from beginner to advanced.",
  },
  {
    q: "Do I need prior experience to start?",
    a: "No prior experience is required. OSINT101 is structured for complete beginners through to advanced analysts. Our Beginner modules introduce core concepts, terminology, and foundational tools before progressing to intermediate and advanced tradecraft.",
  },
  {
    q: "What is the difference between the Free and Premium plans?",
    a: "The Free plan gives you access to 3 core modules, basic badges, and foundational OSINT skills. The Premium plan unlocks all modules, advanced certifications, priority support, and exclusive case-file exercises designed to simulate real-world investigations.",
  },
  {
    q: "How is OSINT101 different from other cybersecurity courses?",
    a: "OSINT101 focuses exclusively on open-source intelligence — a specialized discipline within cybersecurity. Our content is practical, scenario-driven, and regularly updated to reflect the latest tools, techniques, and threat landscapes used by professional OSINT analysts.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-slate-950 to-violet-900/20 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-6">
            <Zap className="h-3 w-3" /> Open-Source Intelligence Training
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              OSINT
            </span>{" "}
            from the Ground Up
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Structured, practical open-source intelligence training for security researchers, investigators, journalists, and curious minds. Go from Rookie to Spymaster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20"
            >
              Start Learning Free <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <BookOpen className="h-4 w-4" /> Browse Modules
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <BookOpen className="h-8 w-8 text-indigo-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Structured Curriculum</h3>
            <p className="text-slate-400 text-sm">Progressive modules from beginner OSINT fundamentals to advanced tradecraft used by professional analysts.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Shield className="h-8 w-8 text-violet-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Ethical & Legal Focus</h3>
            <p className="text-slate-400 text-sm">Every technique is taught within a framework of responsible, ethical, and legal open-source intelligence gathering.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <Users className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Active Community</h3>
            <p className="text-slate-400 text-sm">Join a growing community of OSINT practitioners sharing tools, techniques, and real-world case studies.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 max-w-4xl mx-auto" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about OSINT and OSINT101 before you get started.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <h3 className="text-base font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
