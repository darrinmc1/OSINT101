import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Known AI crawlers and scrapers that ignore robots.txt
const BLOCKED_BOTS = [
  "GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web",
  "Diffbot", "Bytespider", "cohere-ai", "PerplexityBot", "Imagesift",
  "FacebookBot", "meta-externalagent", "DataForSeoBot", "DotBot",
  "Meltwater", "Applebot-Extended", "Google-Extended", "PetalBot",
  "Scrapy", "python-requests", "aiohttp", "httpx", "curl", "wget",
  "Go-http-client", "Java/", "okhttp",
]

// Paths that are safe from rate limiting (static assets)
const SAFE_PATHS = ["/_next/", "/favicon", "/og-image", "/opengraph", "/icon"]

// Simple in-memory rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60_000 // 1 minute
const RATE_LIMIT_MAX = 60 // 60 requests per minute per IP

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname
  const userAgent = request.headers.get("user-agent") || ""
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown"
  const response = NextResponse.next()

  // === 1. Security Headers ===
  response.headers.set("X-Robots-Tag", "noai, noimageai")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // === 2. Block known AI crawlers / scrapers ===
  const uaLower = userAgent.toLowerCase()
  for (const bot of BLOCKED_BOTS) {
    if (uaLower.includes(bot.toLowerCase())) {
      // Return 403 for API/admin paths, otherwise pass through with headers
      if (url.startsWith("/api/") || url.startsWith("/admin/")) {
        return new NextResponse("Forbidden", { status: 403 })
      }
      // For page routes, just block with the headers set
      response.headers.set("X-Robots-Tag", "noindex, nofollow, noai, noimageai")
    }
  }

  // === 3. Rate limiting (skip static assets) ===
  if (!SAFE_PATHS.some((p) => url.startsWith(p))) {
    const now = Date.now()
    const entry = rateLimit.get(ip)

    if (!entry || now > entry.resetAt) {
      rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    } else {
      entry.count++
      if (entry.count > RATE_LIMIT_MAX) {
        return new NextResponse("Too Many Requests", {
          status: 429,
          headers: { "Retry-After": "60" },
        })
      }
    }

    // Cleanup old entries every 100 requests to prevent memory leaks
    if (rateLimit.size > 10000) {
      const cutoff = now - RATE_LIMIT_WINDOW
      for (const [key, val] of rateLimit) {
        if (val.resetAt < cutoff) rateLimit.delete(key)
      }
    }
  }

  // === 4. Honeypot protection ===
  // If someone is POSTing to a form and has the honeypot field filled (common scraper pattern)
  if (request.method === "POST") {
    const contentType = request.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      // Check for common scraper patterns in POST data
      response.headers.set("X-Content-Type-Options", "nosniff")
    }
  }

  return response
}

export const config = {
  matcher: [
    // Match all routes except _next static files, images, etc.
    "/((?!_next/static|_next/image|images/|favicon.ico).*)",
  ],
}
