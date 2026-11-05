import { MetadataRoute } from 'next'
import { HIDDEN_LISTING_IDS, learningModules } from '@/data/modules'
import posts from '@/lib/blog'
import { resourceLibrary } from '@/data/siteContent'

const BASE_URL = 'https://www.osint101.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/case-file`, priority: 0.95, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/modules`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/resources`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/downloads`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/pricing`, priority: 0.4, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/llm.txt`, priority: 0.4, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/llms.txt`, priority: 0.4, changeFrequency: 'weekly' as const },
  ]

  const moduleRoutes = Object.values(learningModules)
    .filter((mod) => !HIDDEN_LISTING_IDS.has(mod.id))
    .map((mod) => ({
      url: `${BASE_URL}/modules/${mod.id}`,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    }))

  const resourceRoutes = resourceLibrary.map((resource) => ({
    url: `${BASE_URL}/resources/${resource.id}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.s}`,
    priority: 0.5,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...moduleRoutes, ...resourceRoutes, ...blogRoutes].map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
