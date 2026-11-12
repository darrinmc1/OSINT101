"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ModuleCardGrid } from "@/components/module-cards"
import type { LearningModule } from "@/data/modules"

/**
 * Shows a handful of tracks by default with a "show all N" toggle, so the
 * homepage doesn't dump 30+ modules on a visitor who just saw the Start Here
 * path above it.
 */
export function CollapsibleModuleGrid({
  modules,
  initialCount = 6,
}: {
  modules: LearningModule[]
  initialCount?: number
}) {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? modules : modules.slice(0, initialCount)
  const remaining = modules.length - initialCount

  return (
    <div>
      <ModuleCardGrid modules={visible} />
      {!expanded && remaining > 0 && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-300 border-2 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Show all {modules.length} modules
            <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </div>
  )
}
