"use client"

import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { hasClerkPublishableKey } from "@/lib/clerk"

function GuestCta() {
  return (
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
  )
}

function ClerkAuthNav() {
  const { isSignedIn } = useUser()

  return (
    <div className="flex items-center gap-3">
      {isSignedIn ? (
        <>
          <Link
            href="/modules"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Dashboard
          </Link>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <SignInButton mode="modal">
            <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Log In
            </button>
          </SignInButton>
          <GuestCta />
        </>
      )}
    </div>
  )
}

export default function AuthNav() {
  if (!hasClerkPublishableKey()) {
    return (
      <div className="flex items-center gap-3">
        <GuestCta />
      </div>
    )
  }

  return <ClerkAuthNav />
}
