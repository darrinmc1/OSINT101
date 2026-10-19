import type { Metadata } from "next"
import { listPublicModules } from "@/data/modules"
import { ModuleCardGrid } from "@/components/module-cards"
import { pageMeta } from "@/lib/page-meta"

export const metadata: Metadata = pageMeta({
  title: "Learning Modules",
  description: "Structured OSINT 101 training tracks, from the intelligence cycle through specialist collection techniques.",
  path: "/modules",
})

export default function ModulesIndexPage() {
  const { tracks, briefings } = listPublicModules()

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Learning Modules
          </h1>
          <p className="text-slate-400 mt-1">
            Structured training tracks from Rookie to Spymaster.
          </p>
        </div>
        <ModuleCardGrid modules={tracks} />
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Quick Briefings
          </h2>
          <p className="text-slate-400 mt-1">
            Short reads. The longer tracks stay above.
          </p>
        </div>
        <ModuleCardGrid modules={briefings} />
      </div>
    </div>
  )
}
