"use client"

import Link from "next/link"
import { listPublicModules } from "@/data/modules"
import { BookOpen, ChevronRight } from "lucide-react"

export default function DashboardHome() {
  const starters = listPublicModules().tracks.slice(0, 4)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
          Your desk
        </h1>
        <p className="text-slate-400 mt-2 max-w-2xl leading-relaxed">
          No XP, no streak, and no badges. The counters that used to sit here
          were sample data, including a badge called Prompt Rookie. They are
          gone. A tick on a lesson page lasts until you refresh.
        </p>
      </div>

      <div className="glass-card p-6">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 gap-3">
            <h2 className="font-bold text-white font-display">
              Start with a real module
            </h2>
            <Link
              href="/modules"
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 shrink-0"
            >
              All lessons <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {starters.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/modules/${lesson.id}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <BookOpen className="h-5 w-5 text-cyan-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {lesson.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lesson.level} · {lesson.estimatedTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
