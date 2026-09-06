import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { learningModules } from "@/data/modules"
import { resourceLibrary } from "@/data/siteContent"
import { OsintLessonStill } from "@/components/osint-lesson-still"
import { HeroParallax } from "@/components/hero-parallax"

const SOURCE_IDS = [
  "osint-fundamentals",
  "osint-methodology",
  "email-osint",
  "domain-investigations",
  "people-profiling",
  "geolocation-osint",
  "osint-reporting",
] as const

const DESK_IDS = ["osint-fundamentals", "osint-reporting"] as const
const CURRENT_SECTION = 1

export function HomeHero() {
  const lessonCount = Object.keys(learningModules).length
  const resourceCount = resourceLibrary.length
  const fundamentals = learningModules["osint-fundamentals"]
  const sources = SOURCE_IDS.slice(0, 4).map((id) => {
    const mod = learningModules[id]
    return {
      id,
      title: mod.title,
      level: mod.level,
      time: mod.estimatedTime,
      href: `/modules/${id}`,
    }
  })
  const deskCards = DESK_IDS.map((id) => {
    const mod = learningModules[id]
    return {
      id,
      title: mod.title,
      time: mod.estimatedTime,
      href: `/modules/${id}`,
      free: id === "osint-fundamentals",
    }
  })

  return (
    <>
      <section
        className="relative overflow-hidden bg-slate-950"
        aria-labelledby="dossier-subject"
      >
        <HeroParallax />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:gap-16">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
                Source evaluation first
              </p>
              <h1
                id="dossier-subject"
                className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
              >
                Trace a claim back to a source you can show your boss.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
                You collect what is already public, then say how sure you are.
                We do not issue trench coats.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
                If you cannot point at a URL, a date, and a confidence call, you do
                not have a finding. You have a vibe. Vibes die in meetings.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
                  Browse lessons
                </Link>
              </div>
            </div>

            <div className="hero-card-stack">
              <aside
                className="hero-card-back hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 backdrop-blur-xl lg:block"
                aria-labelledby="beginner-track"
              >
                <p
                  id="beginner-track"
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300"
                >
                  {fundamentals.level} track
                </p>
                <p className="mt-2 font-display text-sm font-bold text-white">
                  {fundamentals.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Written · {fundamentals.estimatedTime} · {fundamentals.sections.length} phases
                </p>
                <ul className="mt-4 space-y-2">
                  {fundamentals.sections.slice(0, 4).map((section, index) => (
                    <li
                      key={section.title}
                      className={`flex items-start gap-2 rounded-lg px-2.5 py-2 text-xs ${
                        index === CURRENT_SECTION
                          ? "bg-indigo-500/20 text-white"
                          : "text-slate-400"
                      }`}
                    >
                      {index < CURRENT_SECTION ? (
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-300" />
                      ) : (
                        <span
                          className={`mt-0.5 inline-block h-3.5 w-3.5 shrink-0 rounded-full border ${
                            index === CURRENT_SECTION
                              ? "border-indigo-300 bg-indigo-400/40"
                              : "border-white/20"
                          }`}
                          aria-hidden="true"
                        />
                      )}
                      <span>{section.title}</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <figure className="hero-card-front overflow-hidden rounded-2xl border border-indigo-400/25 bg-slate-950/80">
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
                className="hero-card-sources mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl lg:hidden"
                aria-labelledby="sources-on-file"
              >
                <div className="flex items-baseline justify-between gap-3 border-b border-white/10 px-5 py-3">
                  <h2
                    id="sources-on-file"
                    className="font-display text-sm font-bold text-white"
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
                        className="flex items-start justify-between gap-3 px-5 py-3 transition-colors hover:bg-white/[0.07]"
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
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative border-t border-white/5 py-10 md:py-14"
        aria-label="Lessons on the desk"
      >
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {deskCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-indigo-400/35 hover:bg-white/[0.07]"
            >
              <p className="text-xs text-slate-500">
                Written · {card.time}
                {card.free ? " · free" : ""}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-white group-hover:text-indigo-300">
                {card.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
