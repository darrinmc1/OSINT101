"use client"

import { useState } from "react"
import { FolderOpen, Loader2, ShieldAlert } from "lucide-react"
import { CASE_FILE_DISCLAIMER, CASE_FILE_EXAMPLES } from "@/data/case-file"
import { CaseFilePlanView } from "@/components/case-file-plan-view"
import { isCaseFileRefusal, type CaseFilePlan, type CaseFileResult } from "@/lib/case-file/types"

export function CaseFilePlanner() {
  const [query, setQuery] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [plan, setPlan] = useState<CaseFilePlan | null>(null)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const response = await fetch("/api/case-file", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, acceptedDisclaimer: accepted }),
      })
      const data = (await response.json()) as CaseFileResult & { error?: string }
      if (!response.ok || isCaseFileRefusal(data)) {
        const refused = isCaseFileRefusal(data) ? data.message : data.error
        setPlan(null)
        setError(refused || "Could not build a case file.")
        return
      }
      setPlan(data)
    } catch {
      setError("The planner is temporarily unavailable. Try again in a moment.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-10">
      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
        <label htmlFor="case-file-query" className="block">
          <span className="text-sm font-semibold text-slate-200">Collection target / investigation question</span>
          <textarea
            id="case-file-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            required
            minLength={8}
            maxLength={2000}
            rows={6}
            placeholder="Paste a lawful collection target or the question you need answered. Example: map the public footprint of a vendor domain before a contract."
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {CASE_FILE_EXAMPLES.map((example) => (
            <button
              key={example.label}
              type="button"
              onClick={() => setQuery(example.query)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 hover:border-indigo-400/40 hover:text-white"
            >
              {example.label}
            </button>
          ))}
        </div>

        <label className="flex items-start gap-3 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-indigo-500"
          />
          <span>
            I understand this is education-only, for lawful authorized use, and I will follow OPSEC. {CASE_FILE_DISCLAIMER}
          </span>
        </label>

        {error ? (
          <div className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            <ShieldAlert className="h-4 w-4 mt-0.5 shrink-0" />
            <p>{error}</p>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading || !accepted}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-bold text-white disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <FolderOpen className="h-4 w-4" />}
          {loading ? "Building case file…" : "Build case file"}
        </button>
      </form>

      {plan ? <CaseFilePlanView plan={plan} /> : null}
    </div>
  )
}
