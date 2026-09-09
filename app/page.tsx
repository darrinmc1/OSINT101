import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

const faqs = [
  {
    q: "What is OSINT?",
    a: "OSINT stands for Open-Source Intelligence — the practice of collecting and analyzing publicly available information from the internet, social media, public records, and other open sources. It is used by journalists, security researchers, law enforcement, and everyday investigators to uncover facts without accessing private or classified data.",
  },
  {
    q: "Who should take this course?",
    a: "OSINT 101 is designed for anyone curious about digital investigation: cybersecurity professionals, journalists, HR teams conducting background research, private investigators, students, and hobbyists. No prior technical experience is required — we start from the very basics.",
  },
  {
    q: "Is OSINT legal?",
    a: "Yes. OSINT relies exclusively on publicly available information, making it legal in most jurisdictions when used ethically. We cover legal boundaries, ethical guidelines, and responsible disclosure throughout the course so you always stay on the right side of the law.",
  },
  {
    q: "Do I need special software or hacking skills?",
    a: "No hacking skills required. Most OSINT techniques use free, browser-based tools and publicly accessible databases. We introduce purpose-built tools like Maltego, Shodan, and Google Dorking step-by-step, so you build confidence as you go.",
  },
  {
    q: "How is OSINT different from hacking or surveillance?",
    a: "OSINT only uses information that is already publicly available — no systems are accessed without permission, and no private data is intercepted. Think of it as advanced research rather than hacking. Surveillance implies ongoing monitoring of individuals, which is outside the scope of ethical OSINT practice.",
  },
  {
    q: "How long does the course take to complete?",
    a: "The free tier covers three core modules and takes roughly 3–5 hours. Premium members unlock the full curriculum, which spans 10+ modules and approximately 20–30 hours of structured learning. You can progress at your own pace with no deadlines.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Premium members earn verifiable certificates upon completing each module track. Free members receive digital badges for completed lessons that can be shared on LinkedIn and other platforms.",
  },
  {
    q: "What makes OSINT 101 different from a Google search?",
    a: "A Google search is one small piece of the OSINT puzzle. OSINT 101 teaches you systematic methodologies — how to pivot between data sources, verify information, build link charts, and document findings — turning scattered public data into actionable intelligence.",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
          Free &amp; Premium Courses
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-tight mb-6">
          Master Open-Source Intelligence
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          OSINT 101 is the structured, beginner-friendly training platform for digital investigators, security researchers, and curious minds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
          >
            Start Learning Free
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 pb-24" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know about OSINT and getting started with OSINT 101.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <h3 className="text-base md:text-lg font-bold text-white mb-2">
                {faq.q}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-xl p-8 text-center">
          <h3 className="text-xl font-extrabold font-display text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-400 mb-6">
            Browse our full module library or reach out to the community — we&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
            >
              Explore Modules
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
