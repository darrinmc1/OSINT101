import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EmailCapture } from "@/components/email-capture"
import { listPublicModules } from "@/data/modules"
import { ModuleCardGrid } from "@/components/module-cards"
import WhatsNew from "@/components/whats-new"
import {
  ArrowRight,
  GraduationCap,
  Search,
  Shield,
  FolderOpen,
} from "lucide-react"

export default function HomePage() {
  const { tracks, briefings } = listPublicModules()

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 bg-slate-950 text-slate-50">
        {/* ============================================================
            HERO SECTION
            ============================================================ */}
        <section className="relative hero-gradient hero-glow overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-osint101.jpg')] bg-cover bg-center opacity-25" aria-hidden="true" />
          <div className="grid-pattern absolute inset-0" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-8">
              <span className="text-lg">{siteConfig.theme.emoji}</span>
              <span className="text-sm font-semibold text-indigo-300 tracking-wide uppercase">
                Free OSINT Training &amp; Investigation Tools
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display leading-tight mb-6">
              <span className="text-white">{siteConfig.copy.heroTitle}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {siteConfig.copy.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/case-file"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-105 text-lg"
              >
                {siteConfig.copy.ctaButton}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-300 border-2 border-white/10 hover:border-white/20 hover:text-white active:scale-[0.96] transition-transform hover:bg-white/5 transition-all duration-300 text-lg"
              >
                Browse Lessons
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-indigo-400" />
                <span>Practical tradecraft</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-violet-400" />
                <span>Ethics first</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-indigo-300" />
                <span>5-tier badge system</span>
              </div>
            </div>
          </div>
        </section>
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

            <ModuleCardGrid modules={tracks} />
          </div>
        </section>

        <section className="py-20 md:py-28 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">
                Quick Briefings
              </h2>
              <p className="text-slate-400 mt-3 max-w-lg mx-auto">
                Short reads. The longer tracks stay above.
              </p>
            </div>
            <ModuleCardGrid modules={briefings} />
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
        <section className="py-20 md:py-28 border-t border-white/5">
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
