"use client"

import { useState } from "react"

/**
 * Small single-field email form for "email me when the next lesson is published."
 * Tags the subscriber with source="next-lesson-notify" so it's distinguishable
 * from the general newsletter signup, but uses the same /api/subscribe endpoint —
 * no separate notification infrastructure needed.
 */
export function NotifyNextLesson({ lessonTitle }: { lessonTitle: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "next-lesson-notify" }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Check your connection and try again.")
    }
  }

  if (status === "success") {
    return <p className="text-sm text-violet-300">You&apos;ll get an email when it&apos;s published.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <label htmlFor="notify-next-lesson-email" className="sr-only">
        Email
      </label>
      <input
        id="notify-next-lesson-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
        aria-label={`Email me when ${lessonTitle} is published`}
        className="flex-1 min-w-0 px-3 py-2 rounded-lg border border-white/15 bg-white/5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === "loading" ? "Saving..." : "Email me when it's published"}
      </button>
      {status === "error" && <p className="text-xs text-red-400">{message}</p>}
    </form>
  )
}
