import Link from "next/link"
import { IBM_Plex_Mono, IBM_Plex_Serif } from "next/font/google"
import { learningModules } from "@/data/modules"
import { resourceLibrary } from "@/data/siteContent"
import { CaseFilePasteStill } from "@/components/case-file-paste-still"

const dossierSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
})

const dossierMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

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
  const sources = SOURCE_IDS.map((id, index) => {
    const mod = learningModules[id]
    return {
      index: String(index + 1).padStart(2, "0"),
      id,
      title: mod.title,
      level: mod.level,
      time: mod.estimatedTime,
      href: `/modules/${id}`,
    }
  })

  return (
    <section
      className={`dossier-hero relative overflow-hidden ${dossierMono.className}`}
      aria-labelledby="dossier-subject"
    >
      <div className="dossier-hero-rule" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <header className="dossier-jacket">
          <div className="dossier-jacket-meta">
            <p className="dossier-stamp">Case file 101-HOME</p>
            <p className="dossier-classif">Unclassified · training use</p>
            <p className="dossier-classif">Opened 03 Sep 2026</p>
          </div>

          <p className="dossier-kicker">Subject</p>
          <h1 id="dossier-subject" className={`${dossierSerif.className} dossier-h1`}>
            Trace a claim back to a source you can show your boss.
          </h1>

          <p className={`${dossierSerif.className} dossier-dek`}>
            OSINT training — collecting and assessing open-source information
            without pretending you are a spy agency.
          </p>

          <p className="dossier-aside">
            If you cannot point at a URL, a date, and a confidence call, you do
            not have a finding. You have a vibe. Vibes die in meetings.
          </p>
        </header>

        <div className="dossier-fold">
          <figure className="dossier-exhibit">
            <figcaption className="dossier-exhibit-cap">
              Exhibit A · Case File Planner paste tool
            </figcaption>
            <div className="dossier-exhibit-frame">
              <div className="dossier-still-motion">
                <CaseFilePasteStill />
              </div>
            </div>
          </figure>

          <aside className="dossier-register" aria-labelledby="sources-on-file">
            <div className="dossier-register-head">
              <h2 id="sources-on-file" className="dossier-register-title">
                Sources on file
              </h2>
              <p className="dossier-register-count">
                {lessonCount} lessons · {resourceCount} field guides
              </p>
            </div>

            <ol className="dossier-source-list">
              {sources.map((source) => (
                <li key={source.id}>
                  <Link href={source.href} className="dossier-source-row">
                    <span className="dossier-source-num">{source.index}</span>
                    <span className="dossier-source-body">
                      <span className="dossier-source-title">{source.title}</span>
                      <span className="dossier-source-meta">
                        {source.level} · {source.time}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="dossier-register-foot">
              Start with Fundamentals. That one is about the job, not leftover
              AI-school filler.
            </p>
          </aside>
        </div>

        <nav className="dossier-actions" aria-label="Start training">
          <Link href="/modules/osint-fundamentals" className="dossier-action dossier-action-primary">
            Start a free OSINT lesson
          </Link>
          <Link href="/modules" className="dossier-action">
            Browse topics
          </Link>
          <Link href="#waitlist" className="dossier-action">
            Join the waitlist
          </Link>
        </nav>
      </div>
    </section>
  )
}
