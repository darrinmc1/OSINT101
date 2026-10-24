import { learningModules } from "@/data/modules"

// Public routes that actually answer for a signed-out visitor.
// Clerk rewrites /community, /contribute, /requests, /dashboard, /badges,
// and /progress to 404, so they are not link targets.
const PUBLIC_SLUGS: Record<string, string> = {
  "case-file": "/case-file",
  about: "/about",
  contact: "/contact",
  resources: "/resources",
  modules: "/modules",
  blog: "/blog",
  downloads: "/downloads",
  privacy: "/privacy",
  terms: "/terms",
}

export function resolveUpdateHref(href: string | null | undefined): string | null {
  if (!href) return null
  if (href === "/darrinmc1" || href === "darrinmc1") return null
  if (href.startsWith("http://") || href.startsWith("https://")) return href

  const learn = href.match(/^\/learn\/([^/?#]+)/)
  if (learn) {
    const slug = learn[1]
    if (slug in learningModules) return `/modules/${slug}`
    return PUBLIC_SLUGS[slug] ?? null
  }

  if (!href.startsWith("/")) return null
  const [top] = href.split("/").filter(Boolean)
  if (!top) return href === "/" ? "/" : null
  if (top === "modules" || top === "resources" || top === "blog") return href
  if (PUBLIC_SLUGS[top] === `/${top}`) return href
  return null
}
