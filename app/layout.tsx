import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { FeedbackWidget } from "@/components/feedback-widget"
import { WaitlistPopup } from "@/components/waitlist-popup"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI training",
    "artificial intelligence",
    "machine learning",
    "prompt engineering",
    "ChatGPT",
    "AI tools",
    "learn AI",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased ${siteConfig.theme.bgClass} ${siteConfig.theme.textClass}`}
      >
        {children}
        <FeedbackWidget />
        <WaitlistPopup />
      </body>
    </html>
  )
}
