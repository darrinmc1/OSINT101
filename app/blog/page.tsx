import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
    { t: 'Google Dorking for Investigators', s: 'google-dorking-2026', e: 'Advanced search operators to find information hiding in plain sight.', d: '2026-07-26', r: '9 min' },
    { t: 'Social Media OSINT Techniques', s: 'social-media-osint', e: 'Extract intelligence from social platforms without alerting your target.', d: '2026-07-26', r: '11 min' },
    { t: 'Dark Web Monitoring for Analysts', s: 'dark-web-monitoring', e: 'What\'s on the dark web, how to monitor it, and what to do with findings.', d: '2026-07-26', r: '8 min' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white"><div className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">Blog</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">OSINT 101</h1>
        <p className="text-lg text-slate-600">Open source intelligence techniques</p>
      </div></div>
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
        <div className="space-y-8">{posts.map((p) => (
          <article key={p.s} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-all">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.d}</span>
              <span>{p.r}</span>
            </div>
            <h2 className="text-xl font-bold mb-2"><Link href={'/blog/' + p.s} className="hover:text-slate-700">{p.t}</Link></h2>
            <p className="text-sm text-slate-600 mb-3">{p.e}</p>
            <Link href={'/blog/' + p.s} className="text-sm font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1">Read More <ArrowRight className="h-3 w-3" /></Link>
          </article>
        ))}</div>
      </div>
    </div>
  )
}
