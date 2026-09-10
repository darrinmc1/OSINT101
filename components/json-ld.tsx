export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "AI Workforce Training",
        url: "https://aiworkforcetraining.com",
        logo: "https://aiworkforcetraining.com/logo.png",
        description:
          "Professional AI and machine learning training programs for individuals and enterprises.",
        sameAs: [
          "https://twitter.com/aiworkforcetraining",
          "https://linkedin.com/company/aiworkforcetraining",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          availableLanguage: "English",
        },
      }}
    />
  )
}

export function CourseJsonLd({
  name,
  description,
  provider,
  url,
  image,
  datePublished,
  offers,
}: {
  name: string
  description: string
  provider?: string
  url?: string
  image?: string
  datePublished?: string
  offers?: { price: string; priceCurrency: string }
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Course",
        name,
        description,
        provider: {
          "@type": "Organization",
          name: provider ?? "AI Workforce Training",
          sameAs: url ?? "https://aiworkforcetraining.com",
        },
        ...(image ? { image } : {}),
        ...(datePublished ? { datePublished } : {}),
        ...(offers
          ? {
              offers: {
                "@type": "Offer",
                price: offers.price,
                priceCurrency: offers.priceCurrency,
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
      }}
    />
  )
}

export function FaqPageJsonLd({
  questions,
}: {
  questions: { question: string; answer: string }[]
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: questions.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      }}
    />
  )
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "AI Workforce Training",
        url: "https://aiworkforcetraining.com",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://aiworkforcetraining.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }}
    />
  )
}
