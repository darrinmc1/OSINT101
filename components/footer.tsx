import Link from "next/link"
import Image from "next/image"

const footerLinks = [
  {
    heading: "Learn",
    links: [
      { href: "/modules", label: "Modules" },
      { href: "/resources", label: "Resources" },
      { href: "/blog", label: "Blog" },
      { href: "/downloads", label: "Downloads" },
    ],
  },
  {
    heading: "Community",
    links: [
      { href: "/community", label: "Community" },
      { href: "/contribute", label: "Contribute" },
      { href: "/requests", label: "Requests" },
      { href: "/case-file", label: "Case File" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/pricing", label: "Pricing" },
      { href: "/improvements", label: "Improvements" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-lg font-display text-white hover:opacity-90 transition-opacity mb-3">
              <div className="relative h-7 w-7 shrink-0">
                <Image
                  src="/logo.png"
                  alt="OSINT 101 logo"
                  fill
                  sizes="28px"
                  loading="lazy"
                  quality={80}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span>OSINT 101</span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              Free open source intelligence training for analysts at every level.
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} OSINT 101. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built for analysts, by analysts.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
