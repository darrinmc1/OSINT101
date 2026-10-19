import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { lessonSpotlight } from "@/data/lesson-schedule"

export function WeeklyLesson() {
  const { latestTitle, latestHref, nextTitle, nextBlurb } = lessonSpotlight

  return (
    <section className="py-16 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 via-indigo-500/5 to-transparent p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300 mb-3">
            New lesson every week
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-6">
            What just landed — and what&apos;s cooking
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-2">
                Latest lesson
              </p>
              <p className="text-white font-semibold mb-4 leading-snug">{latestTitle}</p>
              <Link
                href={latestHref}
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-300 hover:text-indigo-200"
              >
                Open it
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-300 mb-2">
                Next up
              </p>
              <p className="text-white font-semibold mb-2 leading-snug">{nextTitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{nextBlurb}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
