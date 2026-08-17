"use client"

import { useEffect, useState } from "react"
import { humorEnabled, setHumorEnabled } from "@/components/humor-break"
import { humorTheme } from "@/lib/humor"

export default function HumorToggle() {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    setEnabled(humorEnabled())
  }, [])

  const onToggle = () => {
    const next = !enabled
    setEnabled(next)
    setHumorEnabled(next)
  }

  const on = enabled
    ? `${humorTheme.buttonBg} border-transparent text-white`
    : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      title={enabled ? "Humor on — click to hide" : "Humor off — click to show"}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition ${on}`}
    >
      <span aria-hidden="true">{enabled ? "😄" : "🙂"}</span>
      <span className="hidden sm:inline">{enabled ? "Humor on" : "Humor off"}</span>
    </button>
  )
}
