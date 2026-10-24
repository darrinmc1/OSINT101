import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import type { Metadata } from "next"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "OSINT 101 is a lesson archive and a case-file planner for public-source investigations. Lessons are readable without an account.",
  path: "/about",
})

const facts = [
  {
    title: "Worked lessons",
    desc: "The long tracks have steps, an exercise, and a legal line. A paragraph that cannot be checked does not stay.",
  },
  {
    title: "A planner, not a collector",
    desc: "Paste a question. The Case File Planner returns a cited plan. It does not go and fetch the records.",
  },
  {
    title: "Tool lessons on your own accounts",
    desc: "Username and email checks are written for handles you own. Holehe does not email the subject. Numint stays offline.",
  },
  {
    title: "Blank worksheets",
    desc: "The PDFs are empty forms for the plan, the source note, and the report. Empty is the point.",
  },
]

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="hero-gradient hero-glow py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-lg">{siteConfig.theme.emoji}</span>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
              About
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-6">
            <span className="gradient-text">Open sources,</span>
            <br />
            <span className="text-white">written down</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.name} is a lesson archive and a case-file planner.
            The lessons teach you to ask one question, name public sources,
            and stop. The planner cites those lessons. It does not run the
            investigation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold font-display text-white mb-6">
                What this site is for
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  A lot of OSINT writing is a list of websites and a mood.
                  This archive is the filing: direction, collection, notes,
                  confidence, and the point where you are no longer allowed
                  to keep going.
                </p>
                <p>
                  You can read the lessons without an account. The planner
                  includes the advanced lanes.
                </p>
                <p>
                  There is no forum on this site, and there is no score that
                  means you are an analyst. Beginner, Intermediate, and
                  Advanced are a reading order.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="relative z-10">
                    <h3 className="font-bold text-white text-sm mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Reading order
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Start with OSINT Fundamentals if you cannot yet write the question
            in one sentence. The specialist tracks assume you can.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["Beginner", "Intermediate", "Advanced"].map((name) => (
              <div
                key={name}
                className="glass-card px-6 py-4 text-center min-w-[140px]"
              >
                <div className="relative z-10">
                  <p className="font-bold text-white text-sm">{name}</p>
                  <p className="text-xs text-slate-500 mt-1">On each module</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Corrections
          </h2>
          <p className="text-slate-400 mb-8">
            Broken links, a wrong legal note, or a lesson that has gone stale:
            use the form. There is no public address on this site.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300"
          >
            <span>Send a message</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
