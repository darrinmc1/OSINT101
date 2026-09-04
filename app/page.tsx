import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { learningModules } from "@/data/modules"
import WhatsNew from "@/components/whats-new"
import { HomeHero } from "@/components/home-hero"
import { WhatYouGet } from "@/components/what-you-get"
import { ScrollReveal } from "@/components/scroll-reveal"
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
      <main className="min-h-screen bg-slate-950 pt-16 text-slate-50">
        <HomeHero />
        <WhatYouGet />

        <ScrollReveal>
          <WhatsNew />
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-white/5 py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/15 via-violet-500/5 to-transparent p-8 md:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                  One job · not a chatbot
                </p>
                <h2 className="mb-3 font-display text-3xl font-extrabold text-white md:text-4xl">
                  Paste a target. Get a case file.
                </h2>
                <p className="mb-6 max-w-2xl text-slate-400">
                  The archive stays the archive. This layer turns a collection
                  question into a cited investigation plan using the OSINT 101
                  method — intelligence cycle, OPSEC, and real module links.
                  Foundations are free.
                </p>
                <Link
                  href="/case-file"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:from-indigo-400 hover:to-violet-500"
                >
                  Open the Case File Planner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-white/5 py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">
                  <span className="text-sm font-semibold uppercase tracking-wide text-indigo-300">
                    Training Tracks
                  </span>
                </div>
                <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
                  Learning Modules
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-slate-400">
                  Structured modules that teach you how to actually think like an
                  analyst &mdash; not just how to Google with attitude.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((mod) => (
                  <Link
                    key={mod.id}
                    href={`/modules/${mod.id}`}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.07] active:scale-[0.96]"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20">
                        <BookOpen className="h-6 w-6 text-indigo-300" />
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                          levelAccent[mod.level] ?? levelAccent.Beginner
                        }`}
                      >
                        {mod.level}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-indigo-300">
                      {mod.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {mod.description}
                    </p>
                    <div className="flex items-center gap-4 border-t border-white/5 pt-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {mod.estimatedTime}
                      </div>
                      <div className="ml-auto flex items-center gap-1 font-semibold text-indigo-300 opacity-0 transition-opacity group-hover:opacity-100">
                        Open module <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-t border-white/5 py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent p-10 text-center md:p-14">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15">
                  <FolderOpen className="h-7 w-7 text-indigo-300" />
                </div>
                <h2 className="mb-4 font-display text-3xl font-extrabold text-white md:text-4xl">
                  The Asset Library
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-slate-400">
                  Checklists, cheatsheets, search operator references, and
                  templates &mdash; everything you need to run a clean
                  investigation.
                </p>
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 hover:from-indigo-400 hover:to-violet-500"
                >
                  Browse Resources
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="waitlist" className="border-t border-white/5 py-20 md:py-28">
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
        </ScrollReveal>
      </main>
      <Footer />
    </>
  )
}
