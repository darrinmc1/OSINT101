"use client"

import { useEffect, useState } from "react"
import { humorBank, humorTheme, type HumorItem } from "@/lib/humor"

const STORAGE_KEY = "humor-enabled"
const TOGGLE_EVENT = "humor:toggle"

export function humorEnabled(): boolean {
  if (typeof window === "undefined") return true
  const v = window.localStorage.getItem(STORAGE_KEY)
  return v === null ? true : v === "true"
}

export function setHumorEnabled(enabled: boolean) {
  window.localStorage.setItem(STORAGE_KEY, String(enabled))
  window.dispatchEvent(new CustomEvent(TOGGLE_EVENT, { detail: enabled }))
}

// Reads the shared toggle state. Rendering nothing until mounted avoids
// hydration mismatches — the default (ON) renders the same markup server
// and client side for the first paint.
export function useHumorEnabled(): boolean | null {
  const [enabled, setEnabled] = useState<boolean | null>(null)
  useEffect(() => {
    setEnabled(humorEnabled())
    const handler = (e: Event) => setEnabled((e as CustomEvent<boolean>).detail)
    window.addEventListener(TOGGLE_EVENT, handler)
    return () => window.removeEventListener(TOGGLE_EVENT, handler)
  }, [])
  return enabled
}

function pickForTag(tag: string, seen: string[]): HumorItem | undefined {
  const pool = humorBank[tag] ?? humorBank.general ?? []
  const fresh = pool.filter((_, i) => !seen.includes(`${tag}:${i}`))
  if (fresh.length === 0) return pool[Math.floor(Math.random() * pool.length)]
  return fresh[Math.floor(Math.random() * fresh.length)]
}

const PICKED_KEY = "humor:picked"
function readPicked(): string[] {
  try { return JSON.parse(window.localStorage.getItem(PICKED_KEY) ?? "[]") } catch { return [] }
}
function rememberPicked(id: string) {
  const picked = [...readPicked(), id].slice(-40)
  window.localStorage.setItem(PICKED_KEY, JSON.stringify(picked))
}

export default function HumorBreak({ tag = "general" }: { tag?: string }) {
  const enabled = useHumorEnabled()
  const [item, setItem] = useState<HumorItem | null>(null)
  const [pickedId, setPickedId] = useState<string | null>(null)

  // Pick an item lazily once we're mounted (client only).
  useEffect(() => {
    if (enabled === null || enabled === false) return
    const pool = humorBank[tag] ?? humorBank.general ?? []
    if (pool.length === 0) return
    // Prefer an item the visitor hasn't already seen on this browser.
    const seen = readPicked()
    let picked = pickForTag(tag, seen)
    if (!picked) picked = pool[Math.floor(Math.random() * pool.length)]
    setPickedId(`${tag}:${pool.indexOf(picked)}`)
    setItem(picked)
    rememberPicked(`${tag}:${pool.indexOf(picked)}`)
  }, [enabled, tag])

  if (enabled === null || enabled === false) return null
  if (!item) return null

  const shuffle = () => {
    const pool = humorBank[tag] ?? humorBank.general ?? []
    if (pool.length === 0) return
    let picked = pickForTag(tag, [pickedId ?? ""])
    if (!picked) picked = pool[Math.floor(Math.random() * pool.length)]
    setPickedId(`${tag}:${pool.indexOf(picked)}`)
    setItem(picked)
    rememberPicked(`${tag}:${pool.indexOf(picked)}`)
  }

  const t = humorTheme
  const dark = t.dark ?? false

  return (
    <div className={`my-10 ${t.container}`} data-humor-break>
      {/* Decorative themed border strip */}
      <div className="flex items-center justify-center gap-1.5 overflow-hidden" aria-hidden="true">
        {t.border && t.border.length > 0 ? (
          t.border.map((ch, i) => (
            <span key={i} className={`${t.borderOpacity} ${t.borderSize} select-none`}>{ch}</span>
          ))
        ) : (
          <span className={`h-px w-full ${t.borderLine}`} />
        )}
      </div>

      <div className={`relative mt-4 rounded-2xl border p-6 shadow-sm ${dark ? "border-slate-700 bg-slate-800/80" : `${t.cardBorder} ${t.cardBg}`}`}>
        <p className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${dark ? "text-slate-400" : t.eyebrowColor}`}>
          {t.label ?? "Comic relief"}
        </p>
        <p className={`mt-2 text-base font-medium ${dark ? "text-slate-100" : "text-slate-900"}`}>{item.setup}</p>
        {item.punchline && (
          <p className={`mt-1 text-base italic ${dark ? "text-slate-300" : t.punchColor}`}>{item.punchline}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className={`text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>{t.footerNote ?? "Even accountants need a break"}</span>
          <button
            type="button"
            onClick={shuffle}
            className={`text-xs font-medium ${dark ? "text-slate-400 hover:text-white" : t.eyebrowColor} hover:underline`}
          >
            {t.shuffleLabel ?? "Another one"}
          </button>
        </div>
      </div>
    </div>
  )
}
