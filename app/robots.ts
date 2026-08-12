import type { MetadataRoute } from "next"
import { SELF_URL } from "@/lib/network"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/sign-in", "/sign-up"],
      },
      // Marketing content is deliberately open to AI crawlers — being quotable in
      // AI search is distribution. Member/paid areas stay behind the rules above.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/"],
      },
    ],
    sitemap: `${SELF_URL}/sitemap.xml`,
    host: SELF_URL,
  }
}
