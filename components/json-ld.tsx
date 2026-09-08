import React from "react"

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://osinttraining.com/#organization",
  "name": "OSINT Training",
  "url": "https://osinttraining.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://osinttraining.com/logo.png",
    "width": 200,
    "height": 60
  },
  "description": "Professional OSINT (Open Source Intelligence) training courses for investigators, security professionals, and researchers.",
  "sameAs": [
    "https://twitter.com/osinttraining",
    "https://linkedin.com/company/osinttraining"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "availableLanguage": "English"
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://osinttraining.com/#website",
  "url": "https://osinttraining.com",
  "name": "OSINT Training",
  "description": "Professional OSINT training courses and certifications",
  "publisher": {
    "@id": "https://osinttraining.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://osinttraining.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export interface CourseSchemaProps {
  name: string
  description: string
  url: string
  imageUrl?: string
  provider?: string
  providerUrl?: string
  instructor?: string
  price?: number
  priceCurrency?: string
  duration?: string
  level?: string
  category?: string
  rating?: number
  ratingCount?: number
  datePublished?: string
  dateModified?: string
}

export function createCourseSchema(props: CourseSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": props.name,
    "description": props.description,
    "url": props.url,
    "provider": {
      "@type": "Organization",
      "@id": "https://osinttraining.com/#organization",
      "name": props.provider || "OSINT Training",
      "sameAs": props.providerUrl || "https://osinttraining.com"
    },
    "educationalLevel": props.level || "Beginner",
    "teaches": "Open Source Intelligence (OSINT) techniques and methodologies",
    "courseMode": "online",
    "availableLanguage": "English"
  }

  if (props.imageUrl) {
    schema["image"] = props.imageUrl
  }

  if (props.instructor) {
    schema["instructor"] = {
      "@type": "Person",
      "name": props.instructor
    }
  }

  if (props.price !== undefined) {
    schema["offers"] = {
      "@type": "Offer",
      "price": props.price,
      "priceCurrency": props.priceCurrency || "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": props.datePublished || new Date().toISOString().split("T")[0]
    }
  }

  if (props.duration) {
    schema["timeRequired"] = props.duration
  }

  if (props.category) {
    schema["about"] = {
      "@type": "Thing",
      "name": props.category
    }
  }

  if (props.rating !== undefined && props.ratingCount !== undefined) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": props.rating,
      "ratingCount": props.ratingCount,
      "bestRating": 5,
      "worstRating": 1
    }
  }

  if (props.datePublished) {
    schema["datePublished"] = props.datePublished
  }

  if (props.dateModified) {
    schema["dateModified"] = props.dateModified
  }

  return schema
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

export interface FAQItem {
  question: string
  answer: string
}

export function createFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }
}

export function createArticleSchema(props: {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.title,
    "description": props.description,
    "url": props.url,
    "image": props.imageUrl,
    "datePublished": props.datePublished,
    "dateModified": props.dateModified || props.datePublished,
    "author": {
      "@type": "Person",
      "name": props.authorName || "OSINT Training Team"
    },
    "publisher": {
      "@id": "https://osinttraining.com/#organization"
    }
  }
}
