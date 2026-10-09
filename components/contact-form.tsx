"use client"

import { useState } from "react"
import { HoneypotField } from "@/components/HoneypotField"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [note, setNote] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    setNote("")

    const data = new FormData(event.currentTarget)
    const website = String(data.get("website") ?? "")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      })
      const payload = (await res.json().catch(() => null)) as { error?: string } | null
      if (!res.ok) {
        setStatus("error")
        setNote(payload?.error || "That did not go through. Try again.")
        return
      }
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setNote("Lost the trail. Check your connection and try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-none border border-intel-green/30 bg-intel-green/5 p-8">
        <h2 className="font-mono text-2xl text-white">Received.</h2>
        <p className="mt-3 text-gray-300">
          A person reads these. That is the whole feature.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-4">
      <HoneypotField />
      <div>
        <label htmlFor="contact-name" className="mb-1 block font-mono text-xs uppercase tracking-widest text-intel-green/70">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={120}
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          className="w-full rounded-none border border-intel-green/20 bg-black px-4 py-3 text-white placeholder:text-gray-600 focus:border-intel-green focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block font-mono text-xs uppercase tracking-widest text-intel-green/70">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={200}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          className="w-full rounded-none border border-intel-green/20 bg-black px-4 py-3 text-white placeholder:text-gray-600 focus:border-intel-green focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block font-mono text-xs uppercase tracking-widest text-intel-green/70">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="What happened, where, and what you expected."
          className="w-full rounded-none border border-intel-green/20 bg-black px-4 py-3 text-white placeholder:text-gray-600 focus:border-intel-green focus:outline-none"
        />
      </div>
      {status === "error" ? <p className="text-sm text-red-300">{note}</p> : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-none bg-intel-green px-8 py-3 font-mono font-bold text-black hover:bg-intel-green/80 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send it"}
      </button>
    </form>
  )
}
