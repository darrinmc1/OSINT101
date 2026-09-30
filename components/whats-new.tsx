"use client"

import Link from "next/link"
import { Sparkles, RefreshCcw } from "lucide-react"
import { latestUpdates } from "@/data/updates"

export default function WhatsNew() {
  if (!latestUpdates || latestUpdates.length === 0) return null
  return (
    <section className="py-16 md:py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-8 text-white">
          What just landed
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {latestUpdates.map((u) => (
            <Link
              key={u.id}
              href={u.href}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-indigo-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-2 mb-3">
                {u.kind === "new" ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                    <Sparkles className="h-3 w-3" /> NEW
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-bold text-amber-300">
                    <RefreshCcw className="h-3 w-3" /> UPDATED
                  </span>
                )}
                <span className="text-xs text-slate-500">{u.date}</span>
              </div>
              <h3 className="font-bold mb-1 text-white group-hover:text-indigo-300">{u.title}</h3>
              <p className="text-sm text-slate-400 line-clamp-2">{u.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
