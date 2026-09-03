import { CASE_FILE_DISCLAIMER, CASE_FILE_EXAMPLES } from "@/data/case-file"

/**
 * Frozen still of the Case File Planner paste tool (components/case-file-planner.tsx).
 * Decorative only — not a second live form. Motion is CSS pan on the wrapper.
 */
export function CaseFilePasteStill() {
  const filled = CASE_FILE_EXAMPLES[0]

  return (
    <div
      className="dossier-paste-still pointer-events-none select-none"
      aria-hidden="true"
    >
      <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <label className="block">
          <span className="text-sm font-semibold text-slate-200">
            Collection target / investigation question
          </span>
          <div className="mt-2 min-h-[9.5rem] w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-relaxed text-slate-100">
            {filled.query}
          </div>
        </label>

        <div className="flex flex-wrap gap-2">
          {CASE_FILE_EXAMPLES.map((example) => (
            <span
              key={example.label}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {example.label}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-3 text-sm text-slate-300">
          <span className="mt-1 h-4 w-4 shrink-0 rounded border border-white/20 bg-slate-950" />
          <span className="line-clamp-3">
            I understand this is education-only, for lawful authorized use, and I
            will follow OPSEC. {CASE_FILE_DISCLAIMER}
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-3 text-sm font-bold text-white">
          Build case file
        </div>
      </div>
    </div>
  )
}
