"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/lib/site-config"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    router.push("/modules")
  }

  const handleDemo = () => {
    router.push("/modules")
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl">{siteConfig.theme.emoji}</span>
            <span className="font-display text-xl font-bold text-white">
              {siteConfig.name}
            </span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-extrabold font-display text-white">
            Welcome back, Analyst
          </h1>
          <p className="text-slate-400 mt-2 text-sm">
            Log in to resume your training. No real auth yet &mdash; this is a
            placeholder.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="analyst@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-[1.02]"
            >
              Log in
            </button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider text-slate-500">
            <div className="h-px flex-1 bg-white/10" />
            or
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <button
            type="button"
            onClick={handleDemo}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-200 border-2 border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all duration-300"
          >
            Continue as Demo Analyst
          </button>
        </div>

        <p className="text-center text-xs text-slate-500 mt-6">
          By continuing you agree to the{" "}
          <Link href="/terms" className="text-indigo-400 hover:text-indigo-300">
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  )
}
