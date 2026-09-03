import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { learningModules } from "@/data/modules"
import WhatsNew from "@/components/whats-new"
import { HomeHero } from "@/components/home-hero"
import {
  ArrowRight,
  BookOpen,
  Clock,
  FolderOpen,
} from "lucide-react"

const levelAccent: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  Advanced: "text-violet-400 bg-violet-500/10 border-violet-500/20",
}

export default function HomePage() {
  const modules = Object.values(learningModules)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-slate-950 text-slate-50">
        <HomeHero />
      <WhatsNew />

        <section className="py-16 md:py-20 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/15 via-violet-500/5 to-transparent p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300 mb-3">
                One job · not a chatbot
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-3">
                Paste a target. Get a case file.
              </h2>
              <p className="text-slate-400 mb-6 max-w-2xl">
                The archive stays the archive. This layer turns a collection question into a cited investigation plan using the OSINT 101 method — intelligence cycle, OPSEC, and real module links. Foundations are free.
              </p>
              <Link
                href="/case-file"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all"
              >
                Open the Case File Planner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            LEARNING MODULES SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
                  Training Tracks
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
                Learning Modules
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Structured modules that teach you how to actually think like an
                analyst &mdash; not just how to Google with attitude.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {modules.map((mod) => (
                <Link
                  key={mod.id}
                  href={`/modules/${mod.id}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 active:scale-[0.96] transition-transform hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-indigo-300" />
                    </div>
                    <span
                      className={`text-xs font-semibold border rounded-full px-3 py-1 ${
                        levelAccent[mod.level] ?? levelAccent.Beginner
                      }`}
                    >
                      {mod.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {mod.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {mod.estimatedTime}
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-indigo-300 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Open module <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            RESOURCES SECTION
            ============================================================ */}
        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-500/15 mb-6">
                <FolderOpen className="h-7 w-7 text-indigo-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4">
                The Asset Library
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Checklists, cheatsheets, search operator references, and
                templates &mdash; everything you need to run a clean
                investigation.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
              >
                Browse Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================
            EMAIL CAPTURE SECTION
            ============================================================ */}
        <section id="waitlist" className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <EmailCapture
              variant="hero"
              theme="cyan"
              heading={siteConfig.copy.emailCaptureHeading}
              subheading={siteConfig.copy.emailCaptureSubheading}
              source="homepage-hero"
              showName
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
