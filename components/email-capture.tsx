"use client"

import { useState } from "react"
import { siteConfig } from "@/lib/site-config"

type ThemeColors = {
  primary: string
  primaryHover: string
  bg: string
  bgGradient: string
  border: string
  accent: string
  text: string
  textMuted: string
  inputBg: string
  inputBorder: string
  inputFocusBorder: string
  inputFocusRing: string
  badgeBg: string
  badgeText: string
}

const themes: Record<string, ThemeColors> = {
  cyan: {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600",
    primaryHover: "hover:from-cyan-400 hover:to-blue-500",
    bg: "bg-white/5 backdrop-blur-xl",
    bgGradient: "bg-gradient-to-br from-cyan-950/40 to-indigo-950/40",
    border: "border-white/10",
    accent: "text-cyan-400",
    text: "text-white",
    textMuted: "text-slate-400",
    inputBg: "bg-white/10 backdrop-blur-sm",
    inputBorder: "border-white/20",
    inputFocusBorder: "focus:border-cyan-500",
    inputFocusRing: "focus:ring-cyan-500/30",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30",
    badgeText: "text-cyan-400",
  },
  banana: {
    primary: "bg-yellow-900",
    primaryHover: "hover:bg-yellow-950",
    bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
    bgGradient: "hero-gradient",
    border: "border-yellow-200/60",
    accent: "text-yellow-600",
    text: "text-yellow-950",
    textMuted: "text-yellow-900/70",
    inputBg: "bg-white/80 backdrop-blur-sm",
    inputBorder: "border-yellow-200",
    inputFocusBorder: "focus:border-yellow-500",
    inputFocusRing: "focus:ring-yellow-200",
    badgeBg: "bg-yellow-900/10 border-yellow-600/30",
    badgeText: "text-yellow-900",
  },
}

interface EmailCaptureProps {
  variant?: "inline" | "hero" | "modal"
  siteName?: string
  theme?: string
  heading?: string
  subheading?: string
  source?: string
  showName?: boolean
}

export function EmailCapture({
  variant = "inline",
  siteName = siteConfig.name,
  theme = "cyan",
  heading,
  subheading,
  source = "website",
  showName = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [message, setMessage] = useState("")

  const colors = themes[theme] || themes.cyan

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined, source }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus("success")
        setMessage(data.message)
        setEmail("")
        setName("")
      } else {
        setStatus("error")
        setMessage(data.error || "Something went sideways. Try again.")
      }
    } catch {
      setStatus("error")
      setMessage("Lost the trail. Check your connection and try again.")
    }
  }

  // Success state
  if (status === "success") {
    return (
      <div
        className={`${
          variant === "hero" ? "py-12 px-8" : "py-8 px-6"
        } ${colors.bg} rounded-2xl ${colors.border} border-2 text-center`}
      >
        <div className="animate-bounce text-5xl mb-4">
          {siteConfig.theme.emoji}
        </div>
        <h3 className={`text-2xl font-extrabold ${colors.text} mb-2`}>
          On the list. Case opened.
        </h3>
        <p className={`${colors.textMuted} text-lg`}>{message}</p>
        <div className="mt-4 inline-flex items-center gap-2 bg-cyan-500/10 rounded-full px-4 py-2 border border-cyan-500/30">
          <span className="text-sm font-semibold text-cyan-400">
            Founding Member Status: Verified
          </span>
          <span>{siteConfig.badges.tierEmojis[4]}</span>
        </div>
      </div>
    )
  }

  // Hero variant
  if (variant === "hero") {
    return (
      <div
        className={`${colors.bgGradient} rounded-2xl ${colors.border} border-2 p-8 md:p-12 glass-card`}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 ${colors.badgeBg} border backdrop-blur-sm rounded-full px-4 py-2 mb-6`}
          >
            <span className="text-lg">{siteConfig.theme.emoji}</span>
            <span
              className={`text-sm font-semibold ${colors.badgeText} tracking-wide uppercase`}
            >
              Founding Member
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl font-extrabold ${colors.text} mb-4 font-display`}
          >
            {heading || siteConfig.copy.emailCaptureHeading}
          </h2>
          <p
            className={`text-lg ${colors.textMuted} mb-8 max-w-xl mx-auto`}
          >
            {subheading || siteConfig.copy.emailCaptureSubheading}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {showName && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className={`w-full px-5 py-3.5 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} text-white placeholder:text-slate-500 focus:outline-none ${colors.inputFocusBorder} focus:ring-2 ${colors.inputFocusRing} transition-all text-base`}
              />
            )}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className={`flex-1 px-5 py-3.5 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} text-white placeholder:text-slate-500 focus:outline-none ${colors.inputFocusBorder} focus:ring-2 ${colors.inputFocusRing} transition-all text-base`}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap`}
              >
                {status === "loading" ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Cross-referencing...
                  </span>
                ) : (
                  siteConfig.copy.ctaButton
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">{message}</p>
            )}
          </form>

          <p className="text-xs text-slate-600 mt-4">
            No spam, ever. Unsubscribe anytime. We trained our email bot better
            than that.
          </p>
        </div>
      </div>
    )
  }

  // Inline variant (default)
  return (
    <div
      className={`${colors.bg} rounded-2xl ${colors.border} border-2 p-6 md:p-8 glass-card`}
    >
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{siteConfig.theme.emoji}</span>
            <span
              className={`text-xs font-bold ${colors.badgeText} ${colors.badgeBg} border rounded-full px-3 py-1 uppercase tracking-wide`}
            >
              Founding Member
            </span>
          </div>
          <h3
            className={`text-xl md:text-2xl font-extrabold ${colors.text} mb-1 font-display`}
          >
            {heading || siteConfig.copy.emailCaptureHeading}
          </h3>
          <p className={`${colors.textMuted} text-sm md:text-base`}>
            {subheading || siteConfig.copy.emailCaptureSubheading}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-[360px]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className={`flex-1 min-w-0 px-4 py-3 rounded-xl border-2 ${colors.inputBorder} ${colors.inputBg} text-white placeholder:text-slate-500 focus:outline-none ${colors.inputFocusBorder} focus:ring-2 ${colors.inputFocusRing} transition-all text-sm`}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={`${colors.primary} ${colors.primaryHover} text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap text-sm`}
          >
            {status === "loading" ? "Cross-referencing..." : "Join Free"}
          </button>
        </form>
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm font-medium mt-3">{message}</p>
      )}
    </div>
  )
}
