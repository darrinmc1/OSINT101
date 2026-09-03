import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { learningModules } from "@/data/modules"
import { resourceLibrary } from "@/data/siteContent"
import { OsintLessonStill } from "@/components/osint-lesson-still"

const SOURCE_IDS = [
  "osint-fundamentals",
  "osint-methodology",
  "email-osint",
  "domain-investigations",
  "people-profiling",
  "geolocation-osint",
  "osint-reporting",
] as const

export function HomeHero() {
  const lessonCount = Object.keys(learningModules).length
  const resourceCount = resourceLibrary.length
  const sources = SOURCE_IDS.map((id) => {
    const mod = learningModules[id]
    return {
      id,
      title: mod.title,
      level: mod.level,
      time: mod.estimatedTime,
      href: `/modules/${id}`,
    }
  })

  return (
    <section
      className="relative overflow-hidden bg-slate-950"
      aria-labelledby="dossier-subject"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h1
            id="dossier-subject"
            className="text-4xl font-extrabold font-display leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Trace a claim back to a source you can show your boss.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            OSINT training — collecting and assessing open-source information
            without pretending you are a spy agency.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
            If you cannot point at a URL, a date, and a confidence call, you do
            not have a finding. You have a vibe. Vibes die in meetings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <figcaption className="border-b border-white/10 px-5 py-3 text-sm font-semibold text-indigo-300">
              OSINT Fundamentals · Source Evaluation
            </figcaption>
            <div className="dossier-exhibit-frame">
              <div className="dossier-still-motion">
                <OsintLessonStill />
              </div>
            </div>
          </figure>

          <aside
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            aria-labelledby="sources-on-file"
          >
            <div className="flex items-baseline justify-between gap-3 border-b border-white/10 px-5 py-4">
              <h2
                id="sources-on-file"
                className="font-display text-lg font-bold text-white"
              >
                Sources on file
              </h2>
              <p className="text-xs text-slate-500">
                {lessonCount} lessons · {resourceCount} field guides
              </p>
            </div>
            <ol className="m-0 list-none p-0">
              {sources.map((source) => (
                <li key={source.id} className="border-b border-white/5 last:border-b-0">
                  <Link
                    href={source.href}
                    className="flex items-start justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-white/[0.07]"
                  >
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {source.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {source.level} · {source.time}
                      </span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-indigo-300" />
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-auto px-5 py-4 text-xs leading-relaxed text-slate-500">
              Start with Fundamentals. That one is about the job, not leftover
              AI-school filler.
            </p>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/modules/osint-fundamentals"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-400 hover:to-violet-500 hover:shadow-indigo-500/40"
          >
            Start a free OSINT lesson
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            href="/modules"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/10 px-8 py-4 text-lg font-bold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            Browse topics
          </Link>
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/10 px-8 py-4 text-lg font-bold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </section>
  )
}
