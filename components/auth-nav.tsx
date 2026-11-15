"use client"

import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { hasClerkPublishableKey } from "@/lib/clerk"

function GuestCta() {
  return (
    <Link
      href="/sign-up"
      className={cn(
        "px-5 py-2 text-sm font-bold rounded-xl text-slate-950",
        "bg-emerald-500 hover:bg-emerald-400",
        "transition-all duration-300 hover:scale-105"
      )}
    >
      Create a free account
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
            Lessons
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
        <Link href="/sign-in" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Sign in
        </Link>
        <GuestCta />
      </div>
    )
  }

  return <ClerkAuthNav />
}
