import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar } from "lucide-react"

const posts = [
  {
    slug: "google-dorking-2026",
    title: "Google Dorking in 2026: Advanced Search Operators for OSINT",
    excerpt:
      "Master the latest Google search operators and advanced dorking techniques to uncover hidden information across the web.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Techniques",
    image: "/blog/google-dorking.jpg",
  },
  {
    slug: "social-media-osint",
    title: "Social Media OSINT: A Complete Investigator's Guide",
    excerpt:
      "From Facebook to TikTok — learn how to extract, verify, and analyze social media intelligence ethically and effectively.",
    date: "2025-01-08",
    readTime: "12 min read",
    category: "Social Media",
    image: "/blog/social-media-osint.jpg",
  },
  {
    slug: "dark-web-monitoring",
    title: "Dark Web Monitoring: What Analysts Need to Know",
    excerpt:
      "A practical introduction to dark web intelligence gathering, including tools, safety practices, and legal considerations.",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Dark Web",
    image: "/blog/dark-web.jpg",
  },
]

export const metadata = {
  title: "Blog",
  description: "OSINT techniques, tools, and tradecraft from the OSINT 101 team.",
}

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-3">
          OSINT Blog
        </h1>
        <p className="text-slate-400 text-lg">
          Techniques, tools, and tradecraft for modern intelligence analysts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all"
          >
            {/* Post Image */}
            <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                quality={75}
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <span className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold bg-indigo-500/80 text-white backdrop-blur-sm">
                {post.category}
              </span>
            </div>

            {/* Post Content */}
            <div className="p-5">
              <h2 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
