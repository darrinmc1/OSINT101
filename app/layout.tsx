import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "OSINT 101 — Learn Open Source Intelligence",
    template: "%s | OSINT 101",
  },
  description:
    "Master open source intelligence with structured modules, hands-on exercises, and a community of analysts. Free to start.",
  metadataBase: new URL("https://osint101.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osint101.com",
    siteName: "OSINT 101",
    title: "OSINT 101 — Learn Open Source Intelligence",
    description:
      "Master open source intelligence with structured modules, hands-on exercises, and a community of analysts.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OSINT 101",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSINT 101 — Learn Open Source Intelligence",
    description:
      "Master open source intelligence with structured modules, hands-on exercises, and a community of analysts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
        </head>
        <body className={`${inter.className} antialiased bg-slate-950 text-white`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
