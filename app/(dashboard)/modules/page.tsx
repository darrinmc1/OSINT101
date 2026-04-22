import Link from "next/link"
import { ArrowRight, BookOpen, Clock } from "lucide-react"
import { learningModules } from "@/data/modules"

const levelAccent: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  Advanced: "text-violet-400 bg-violet-500/10 border-violet-500/20",
}

export default function ModulesIndexPage() {
  const modules = Object.values(learningModules)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          Learning Modules
        </h1>
        <p className="text-slate-400 mt-1">
          Structured training tracks from Rookie to Spymaster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={`/modules/${mod.id}`}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-white/[0.07]"
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
  )
}
