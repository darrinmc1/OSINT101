import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getModuleById, START_HERE_MODULE_IDS } from "@/data/modules"

/**
 * The 5 real Beginner-level tracks, shown in order as a guided path.
 * This is the "take these first" sequence; the full catalog (30+ modules)
 * lives in the collapsible grid below it.
 */
export function StartHerePath() {
  const steps = START_HERE_MODULE_IDS.map((id, i) => ({ step: i + 1, mod: getModuleById(id) })).filter(
    (s) => s.mod !== null,
  )

  if (steps.length === 0) return null

  return (
    <section className="py-16 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-emerald-300 tracking-wide uppercase">
              New here?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">Start Here</h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto">
            Five beginner tracks, in order. Everything else in the catalog builds on these.
          </p>
        </div>

        <ol className="space-y-3">
          {steps.map(({ step, mod }) => (
            <li key={mod!.id}>
              <Link
                href={`/modules/${mod!.id}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:border-emerald-400/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-300 font-bold text-sm">
                  {step}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                    {mod!.title}
                  </h3>
                  <p className="text-sm text-slate-500 truncate">{mod!.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
