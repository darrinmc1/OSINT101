import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { JsonLd, organizationSchema, websiteSchema } from "@/components/json-ld"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://osinttraining.com"),
  title: {
    default: "OSINT Training | Professional Open Source Intelligence Courses",
    template: "%s | OSINT Training"
  },
  description: "Master OSINT techniques with professional training courses. Learn open source intelligence gathering, digital investigations, and cyber research skills.",
  keywords: [
    "OSINT training",
    "open source intelligence",
    "OSINT courses",
    "digital investigation",
    "cyber intelligence",
    "OSINT certification",
    "intelligence gathering",
    "online investigation training"
  ],
  authors: [{ name: "OSINT Training" }],
  creator: "OSINT Training",
  publisher: "OSINT Training",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osinttraining.com",
    siteName: "OSINT Training",
    title: "OSINT Training | Professional Open Source Intelligence Courses",
    description: "Master OSINT techniques with professional training courses. Learn open source intelligence gathering, digital investigations, and cyber research skills.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OSINT Training - Professional Intelligence Courses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "OSINT Training | Professional Open Source Intelligence Courses",
    description: "Master OSINT techniques with professional training courses.",
    images: ["/og-image.png"],
    creator: "@osinttraining"
  },
  alternates: {
    canonical: "https://osinttraining.com"
  },
  verification: {
    google: "your-google-verification-code"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
