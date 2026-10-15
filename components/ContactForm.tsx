"use client"

import { FormEvent, useState } from "react"

const CONTACT_WEBHOOK_URL = "https://n8n.peelboss.com/webhook/site-contact"

type Status = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const message = String(data.get("message") ?? "").trim()

    if (!message) {
      setStatus("error")
      setError("Message is required.")
      return
    }

    setStatus("sending")
    setError("")

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "osint101",
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          message,
          website: String(data.get("website") ?? ""),
        }),
      })

      const body = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null

      if (response.ok && body?.ok === true) {
        setStatus("success")
        setError("")
        form.reset()
        return
      }

      if (
        (response.status === 400 || response.status === 429) &&
        body?.ok === false &&
        body.error
      ) {
        setStatus("error")
        setError(body.error)
        return
      }

      setStatus("error")
      setError(body?.error || "The message did not send.")
    } catch {
      setStatus("error")
      setError("The message did not send.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4 border-t border-white/10 pt-6">
      <div>
        <h2 className="text-lg font-bold text-white">Send a message</h2>
        <p className="mt-1 text-sm text-slate-400">Message is required. Name and email are optional.</p>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <label htmlFor="website">Leave this blank</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-name" className="text-sm text-slate-300">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-email" className="text-sm text-slate-300">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="contact-message" className="text-sm text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-indigo-400"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-400 disabled:opacity-60"
      >
        {status === "sending" ? "Sending" : "Send"}
      </button>

      {status === "success" ? (
        <p role="status" className="text-sm text-emerald-300">
          Message sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm text-rose-300">
          {error}
        </p>
      ) : null}
    </form>
  )
}
