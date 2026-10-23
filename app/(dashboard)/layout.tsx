"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useUser, UserButton } from "@clerk/nextjs"
import { siteConfig } from "@/lib/site-config"
import { hasClerkPublishableKey } from "@/lib/clerk"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Settings,
  Menu,
  X,
  FolderOpen,
} from "lucide-react"
import { useState } from "react"

const GATED_NAV = new Set(["Dashboard", "Badges", "Progress"])

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Settings,
  FolderOpen,
}

function DashboardNav({
  pathname,
  onNavigate,
  showGated,
}: {
  pathname: string
  onNavigate: () => void
  showGated: boolean
}) {
  const links = siteConfig.nav.dashboard.filter(
    (link) => showGated || !GATED_NAV.has(link.label)
  )

  return (
    <>
      {links.map((link) => {
        const Icon = iconMap[link.icon] || LayoutDashboard
        const isActive =
          link.href === "/dashboard"
            ? pathname === "/dashboard" && link.label === "Dashboard"
            : pathname === link.href

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                : "text-slate-400 hover:text-white active:scale-[0.96] transition-transform hover:bg-white/5"
            )}
          >
            <Icon className="h-4 w-4 flex-shrink-0" />
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

function ClerkAccountCorner() {
  const { isLoaded, isSignedIn, user } = useUser()
  if (!isLoaded) return null
  if (!isSignedIn) {
    return (
      <Link href="/sign-in" className="text-sm font-medium text-slate-300 hover:text-white">
        Sign in
      </Link>
    )
  }
  const label = user?.firstName || user?.username || "Signed in"
  return (
    <div className="flex items-center gap-3">
      <p className="text-sm font-medium text-white hidden sm:block">{label}</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

function AccountCorner() {
  if (!hasClerkPublishableKey()) {
    return (
      <Link href="/sign-in" className="text-sm font-medium text-slate-300 hover:text-white">
        Sign in
      </Link>
    )
  }
  return <ClerkAccountCorner />
}

function GatedDashboardNav({
  pathname,
  onNavigate,
}: {
  pathname: string
  onNavigate: () => void
}) {
  const { isSignedIn, isLoaded } = useUser()
  return (
    <DashboardNav
      pathname={pathname}
      onNavigate={onNavigate}
      showGated={Boolean(isLoaded && isSignedIn)}
    />
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const clerkEnabled = hasClerkPublishableKey()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl">{siteConfig.theme.emoji}</span>
              <span className="font-display text-sm font-bold gradient-text-cyan">
                {siteConfig.name}
              </span>
            </Link>
            <button
              className="lg:hidden text-slate-400 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {clerkEnabled ? (
              <GatedDashboardNav
                pathname={pathname}
                onNavigate={() => setSidebarOpen(false)}
              />
            ) : (
              <DashboardNav
                pathname={pathname}
                onNavigate={() => setSidebarOpen(false)}
                showGated={false}
              />
            )}
          </nav>

          <div className="px-3 py-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5"
            >
              Back to the site
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex h-16 items-center gap-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl px-6">
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex-1" />

          <AccountCorner />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
