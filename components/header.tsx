"use client"

import { useState } from "react"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:animate-float">
              {siteConfig.theme.emoji}
            </span>
            <span className="font-display text-lg font-bold gradient-text-cyan">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.marketing.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  Log In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <Link
              href="/modules"
              className={cn(
                "px-5 py-2 text-sm font-bold rounded-xl text-white",
                "bg-gradient-to-r from-indigo-500 to-violet-600",
                "hover:from-indigo-400 hover:to-violet-500",
                "shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
                "transition-all duration-300 hover:scale-105"
              )}
            >
              {siteConfig.copy.ctaButton}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {siteConfig.nav.marketing.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-indigo-400 rounded-lg hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <SignedOut>
                <SignInButton>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 text-sm font-medium text-slate-300 hover:text-white text-center rounded-lg hover:bg-white/5"
                  >
                    Log In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <Link
                href="/modules"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-bold text-white text-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600"
              >
                {siteConfig.copy.ctaButton}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
