import { siteConfig } from "@/lib/site-config"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Downloads",
  description: `Free OSINT 101 downloadable templates and resources for open-source intelligence investigations.`,
}

const templates = [
  {
    id: "investigation-plan-template",
    title: "Investigation Plan Template",
    description:
      "Structured investigation scoping document covering objective, scope, sources, tools, time budget, stop conditions, legal boundaries, and confidence targets.",
    size: "5.4 KB",
    icon: "🗺️",
    features: [
      "Objective & scope definition",
      "Source & tool inventory table",
      "Resource allocation (time, personnel)",
      "Stop conditions & legal boundaries",
      "Confidence target scale",
      "Full source tracker appendix",
    ],
  },
  {
    id: "source-evaluation-template",
    title: "Source Evaluation Template",
    description:
      "Admiralty-system source reliability assessment with A-F reliability scale and 1-6 credibility scale. Includes source profile, bias assessment, and corroboration tracking.",
    size: "4.5 KB",
    icon: "🔍",
    features: [
      "Admiralty system reference tables",
      "Reliability (A-F) & Credibility (1-6) scales",
      "Individual source profile form",
      "Bias assessment fields",
      "Corroboration status tracking",
      "Confidence level selector",
    ],
  },
  {
    id: "osint-report-template",
    title: "OSINT Report Template",
    description:
      "Professional intelligence report structure with case metadata, executive summary, findings, source index, confidence assessment, and actionable recommendations.",
    size: "5.5 KB",
    icon: "📋",
    features: [
      "Report metadata (case ref, classification, dates)",
      "Executive summary section",
      "Methodology & legal framework",
      "Findings with evidence citations",
      "Source index table",
      "Confidence assessment & recommendations",
    ],
  },
  {
    id: "digital-footprint-tracker",
    title: "Digital Footprint Tracker",
    description:
      "Multi-platform digital presence monitoring log covering 15+ platforms, email tracking, activity log, connection mapping, and scheduled review system.",
    size: "5.2 KB",
    icon: "👣",
    features: [
      "Subject information & aliases",
      "15+ platform tracker (with URLs & usernames)",
      "Email account inventory",
      "Activity & connection log",
      "Review schedule planner",
      "Change detection notes",
    ],
  },
  {
    id: "osint-operations-checklist",
    title: "OSINT Operations Checklist",
    description:
      "End-to-end operational checklist covering pre-op planning, active collection, verification, documentation, analysis, archival, and cleanup phases.",
    size: "5.5 KB",
    icon: "✅",
    features: [
      "Pre-op: scope, legal, workspace setup",
      "Active collection & verification",
      "Documentation & chain of custody",
      "Analysis & reporting workflow",
      "Archival & data retention",
      "Cleanup & debrief procedures",
    ],
  },
]

export default function DownloadsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient hero-glow py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-lg">📄</span>
            <span className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">
              Free Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-6">
            <span className="gradient-text-indigo">OSINT Templates</span>
            <br />
            <span className="text-white">&amp; Downloads</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional-grade, ready-to-use PDF templates for every phase of
            your OSINT workflow. Each template includes structured fields,
            reference tables, and best-practice guidance to keep your
            investigations organized and repeatable.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((tpl) => (
              <div
                key={tpl.id}
                className="glass-card p-6 flex flex-col h-full"
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl flex-shrink-0">{tpl.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg leading-tight mb-1">
                        {tpl.title}
                      </h3>
                      <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">
                        PDF &middot; {tpl.size}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {tpl.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-6 flex-grow">
                    {tpl.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-xs text-slate-500"
                      >
                        <span className="text-indigo-400 mt-0.5 flex-shrink-0">
                          ▸
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Download Button */}
                  <Link
                    href={`/downloads/${tpl.id}.pdf`}
                    download
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download PDF
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold font-display text-white mb-4">
              How to Use These Templates
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Designed for both beginners and experienced investigators. Print
              them out or fill them in digitally.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Download",
                desc: "Click any template to download the PDF. All templates are A4 format, ready to print.",
              },
              {
                step: "02",
                title: "Plan",
                desc: "Use the Investigation Plan first to scope your work. Then open the Source Evaluation for each source.",
              },
              {
                step: "03",
                title: "Execute & Report",
                desc: "Run your collection using the Checklist. Compile findings in the Report Template when you are done.",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6 text-center">
                <div className="relative z-10">
                  <span className="text-2xl font-extrabold gradient-text-indigo block mb-2">
                    {item.step}
                  </span>
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
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Want the Full Course?
          </h2>
          <p className="text-slate-400 mb-8">
            These templates are just the beginning. Our full OSINT 101 course
            includes 15+ modules with hands-on lessons, gamified badges, and
            a progressive learning path from Rookie to Spymaster.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>Browse Modules</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
