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
  name: "OSINT 101",
  url: "https://osint101.com",
  logo: "https://osint101.com/logo.png",
  description:
    "OSINT 101 is a structured open-source intelligence training platform offering courses from beginner to advanced levels for analysts, investigators, and security professionals.",
  sameAs: [
    "https://twitter.com/osint101",
    "https://github.com/osint101"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://osint101.com/contact"
  }
}

export const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "OSINT 101 Training Modules",
  description:
    "A comprehensive list of open-source intelligence training modules covering fundamentals, digital footprinting, social media analysis, dark web monitoring, and advanced tradecraft.",
  url: "https://osint101.com/modules",
  numberOfItems: 6,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "OSINT Fundamentals",
        description:
          "Learn the core principles of open-source intelligence gathering, including source evaluation, data collection methodologies, and ethical considerations.",
        url: "https://osint101.com/modules/osint-fundamentals",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Beginner",
        teaches: "Open-source intelligence fundamentals, source evaluation, ethical OSINT",
        courseMode: "online",
        isAccessibleForFree: true
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Digital Footprinting",
        description:
          "Master techniques for mapping digital footprints including domain research, IP analysis, WHOIS lookups, and passive reconnaissance methods.",
        url: "https://osint101.com/modules/digital-footprinting",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Beginner",
        teaches: "Domain research, IP analysis, WHOIS lookups, passive reconnaissance",
        courseMode: "online",
        isAccessibleForFree: true
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "Social Media Intelligence",
        description:
          "Develop skills for extracting actionable intelligence from social media platforms, including profile analysis, network mapping, and geolocation techniques.",
        url: "https://osint101.com/modules/social-media-intelligence",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Intermediate",
        teaches: "Social media analysis, profile investigation, network mapping, geolocation",
        courseMode: "online",
        isAccessibleForFree: true
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Course",
        name: "Advanced Search Operators",
        description:
          "Master Google dorking, advanced search operators, and specialized search engines to uncover hidden information across the open web.",
        url: "https://osint101.com/modules/advanced-search-operators",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Intermediate",
        teaches: "Google dorking, search operators, specialized search engines",
        courseMode: "online",
        isAccessibleForFree: false
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Course",
        name: "Dark Web Monitoring",
        description:
          "Learn safe and effective techniques for monitoring dark web sources, understanding Tor infrastructure, and identifying threat intelligence signals.",
        url: "https://osint101.com/modules/dark-web-monitoring",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Advanced",
        teaches: "Dark web navigation, Tor infrastructure, threat intelligence, operational security",
        courseMode: "online",
        isAccessibleForFree: false
      }
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Course",
        name: "OSINT Tradecraft & Reporting",
        description:
          "Develop professional-grade OSINT tradecraft including operational security, source documentation, analytical frameworks, and intelligence report writing.",
        url: "https://osint101.com/modules/osint-tradecraft",
        provider: {
          "@type": "Organization",
          name: "OSINT 101",
          url: "https://osint101.com"
        },
        educationalLevel: "Advanced",
        teaches: "Operational security, intelligence reporting, analytical frameworks, tradecraft",
        courseMode: "online",
        isAccessibleForFree: false
      }
    }
  ]
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is OSINT 101?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OSINT 101 is a structured online training platform for open-source intelligence (OSINT). It offers courses ranging from beginner fundamentals to advanced tradecraft for analysts, investigators, journalists, and security professionals."
      }
    },
    {
      "@type": "Question",
      name: "Is OSINT 101 free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, OSINT 101 offers a free plan that includes access to 3 core training modules and basic badges. A Premium plan is available for full access to all modules, advanced certifications, and priority support."
      }
    },
    {
      "@type": "Question",
      name: "What topics does OSINT 101 cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OSINT 101 covers a wide range of topics including OSINT fundamentals, digital footprinting, social media intelligence, advanced search operators (Google dorking), dark web monitoring, and professional OSINT tradecraft and reporting."
      }
    },
    {
      "@type": "Question",
      name: "Who is OSINT 101 designed for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OSINT 101 is designed for anyone interested in open-source intelligence, including cybersecurity professionals, private investigators, journalists, law enforcement, corporate security teams, and curious individuals who want to learn ethical intelligence gathering techniques."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to complete the OSINT 101 training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each module is self-paced and can be completed in 1-3 hours. The full curriculum of 6 modules typically takes 10-20 hours depending on your prior experience and how deeply you engage with the practical exercises."
      }
    },
    {
      "@type": "Question",
      name: "Do I receive a certificate after completing OSINT 101 courses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premium plan members receive advanced certifications upon completing modules. Free plan members earn basic badges to track their progress through the curriculum."
      }
    },
    {
      "@type": "Question",
      name: "Is OSINT legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open-source intelligence (OSINT) involves collecting information from publicly available sources, which is generally legal. OSINT 101 emphasizes ethical practices and legal compliance throughout all training modules. Users are responsible for ensuring their activities comply with applicable laws in their jurisdiction."
      }
    }
  ]
}
