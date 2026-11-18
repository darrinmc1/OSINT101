"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { hasClerkPublishableKey } from "@/lib/clerk"

function Beacon() {
  const pathname = usePathname()
  const { isLoaded, isSignedIn } = useUser()

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !pathname) return
    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) return
    const key = `osint101-view:${pathname}`
    try {
      if (sessionStorage.getItem(key)) return
      sessionStorage.setItem(key, "1")
    } catch {
      // Private mode can block storage. Still try to record the view.
    }
    fetch("/api/usage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    }).catch(() => {})
  }, [isLoaded, isSignedIn, pathname])

  return null
}

export function UsageBeacon() {
  if (!hasClerkPublishableKey()) return null
  return <Beacon />
}
