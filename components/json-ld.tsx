import React from "react"

interface JsonLdProps {
  type: "Course" | "Organization" | "FAQPage" | "WebSite" | "BreadcrumbList"
  data: Record<string, unknown>
}

export function JsonLd({ type, data }: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

export function OrganizationSchema() {
  return (
    <JsonLd
      type="Organization"
      data={{
        name: "TrainingPlatform",
        url: "https://www.trainingplatform.com",
        logo: "https://www.trainingplatform.com/logo.png",
        description:
          "A comprehensive online training platform offering professional courses and certifications.",
        sameAs: [
          "https://twitter.com/trainingplatform",
          "https://www.linkedin.com/company/trainingplatform",
          "https://www.facebook.com/trainingplatform",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@trainingplatform.com",
          availableLanguage: "English",
        },
      }}
    />
  )
}

interface CourseSchemaProps {
  name: string
  description: string
  url: string
  provider?: string
  providerUrl?: string
  imageUrl?: string
  price?: number
  priceCurrency?: string
  duration?: string
  level?: string
  rating?: number
  ratingCount?: number
  instructor?: string
}

export function CourseSchema({
  name,
  description,
  url,
  provider = "TrainingPlatform",
  providerUrl = "https://www.trainingplatform.com",
  imageUrl,
  price,
  priceCurrency = "USD",
  duration,
  level,
  rating,
  ratingCount,
  instructor,
}: CourseSchemaProps) {
  const data: Record<string, unknown> = {
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: providerUrl,
    },
  }

  if (imageUrl) {
    data.image = imageUrl
  }

  if (price !== undefined) {
    data.offers = {
      "@type": "Offer",
      price: price,
      priceCurrency: priceCurrency,
      availability: "https://schema.org/InStock",
      url,
    }
  }

  if (duration) {
    data.timeRequired = duration
  }

  if (level) {
    data.educationalLevel = level
  }

  if (rating !== undefined && ratingCount !== undefined) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating,
      ratingCount: ratingCount,
      bestRating: 5,
      worstRating: 1,
    }
  }

  if (instructor) {
    data.instructor = {
      "@type": "Person",
      name: instructor,
    }
  }

  return <JsonLd type="Course" data={data} />
}

interface FAQItem {
  question: string
  answer: string
}

interface FAQPageSchemaProps {
  faqs: FAQItem[]
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  return (
    <JsonLd
      type="FAQPage"
      data={{
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  )
}

export function WebSiteSchema() {
  return (
    <JsonLd
      type="WebSite"
      data={{
        name: "TrainingPlatform",
        url: "https://www.trainingplatform.com",
        description:
          "Discover professional online courses and training programs to advance your career.",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.trainingplatform.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <JsonLd
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
