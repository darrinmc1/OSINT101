import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.osint101.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/case-file`, priority: 0.95, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/modules`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/pricing`, priority: 0.85, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/pricing.json`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/llm.txt`, priority: 0.6, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/llms.txt`, priority: 0.5, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/resources`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/community`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contribute`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.5, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/requests`, priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  return staticRoutes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
