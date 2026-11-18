import type { ReactNode } from "react"

/** Visible marker for refund copy that a lawyer has not signed off. */
export function PendingLegalReview({ children }: { children: ReactNode }) {
  return (
    <aside className="rounded-xl border-2 border-amber-300/70 bg-amber-400/15 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
        Pending legal review
      </p>
      <div className="mt-2 text-sm leading-relaxed text-amber-50">{children}</div>
    </aside>
  )
}
