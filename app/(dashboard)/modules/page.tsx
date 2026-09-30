import Link from "next/link"
import { ArrowRight, BookOpen, Clock, Lock, Star } from "lucide-react"
import { CORE_TRAINING_MODULE_IDS, learningModules } from "@/data/modules"

const levelAccent: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  Advanced: "text-violet-400 bg-violet-500/10 border-violet-500/20",
}

export default function ModulesIndexPage() {
  const catalog = Object.values(learningModules)
  const coreIds = new Set<string>(CORE_TRAINING_MODULE_IDS)
  const coreModules = catalog.filter((mod) => coreIds.has(mod.id))
  const ancillaryModules = catalog.filter((mod) => !coreIds.has(mod.id))
  const freeModules = catalog.filter((mod) => mod.level === "Beginner")
  const premiumModules = catalog.filter((mod) => mod.level !== "Beginner")
  const coreSectionCount = coreModules.reduce((sum, mod) => sum + (mod.sections?.length ?? 0), 0)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          Learning Modules
        </h1>
        <p className="text-slate-400 mt-1">
          {coreModules.length} core training modules ({coreSectionCount} lessons),
          plus {ancillaryModules.length} short catalog extras. Beginner modules are
          free. Intermediate and Advanced methods match the Analyst plan when billing
          is live.
        </p>
      </div>

      {/* Free vs Premium Banner */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 flex flex-col sm:flex-row gap-4 sm:gap-8">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0">✓</span>
            <div>
              <p className="text-sm font-bold text-white">Free Plan</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {freeModules.length} beginner modules · Case File foundations · No card
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-0.5 h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold shrink-0">★</span>
            <div>
              <p className="text-sm font-bold text-white">Premium Plan</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {premiumModules.length} intermediate/advanced modules · Advanced Case File methods when billing is live
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/pricing"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
        >
          <Star className="h-4 w-4" />
          Upgrade to Premium
        </Link>
      </div>

      {/* Free Modules */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Free — Included for everyone</span>
          <div className="flex-1 h-px bg-emerald-500/20" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeModules.map((mod) => (
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
                  Start <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Premium Modules */}
      {premiumModules.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Premium — Upgrade to unlock</span>
            <div className="flex-1 h-px bg-violet-500/20" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumModules.map((mod) => (
              <div
                key={mod.id}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 opacity-60"
              >
                <div className="absolute inset-0 rounded-2xl bg-slate-900/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10">
                  <Lock className="h-7 w-7 text-violet-400" />
                  <p className="text-sm font-bold text-white">Premium Module</p>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
                  >
                    <Star className="h-3.5 w-3.5" /> Unlock with Premium
                  </Link>
                </div>
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
                <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{mod.description}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {mod.estimatedTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
