"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AuthNav } from "@/components/auth-nav"

const navLinks = [
  { href: "/modules", label: "Modules" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-extrabold text-xl font-display text-white hover:opacity-90 transition-opacity">
            <div className="relative h-8 w-8 shrink-0">
              <Image
                src="/logo.png"
                alt="OSINT 101 logo"
                fill
                sizes="32px"
                loading="eager"
                quality={90}
                style={{ objectFit: "contain" }}
              />
            </div>
            <span>OSINT 101</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <AuthNav />
            </div>
            <button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
              <AuthNav />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
