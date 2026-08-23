import { Mail, MessageSquare, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-3">
          Get in Touch
        </h1>
        <p className="text-slate-400 text-lg">
          Questions, partnerships, or feedback — we&apos;d love to hear from you.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-white font-bold mb-1">Email Us</h2>
            <p className="text-slate-400 text-sm mb-2">
              Reach our team directly for training inquiries, partnerships, or support.
            </p>
            <a
              href="mailto:hello@osint101.com"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              hello@osint101.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
            <MessageSquare className="h-5 w-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-white font-bold mb-1">Community &amp; Feedback</h2>
            <p className="text-slate-400 text-sm">
              For course feedback, module requests, or community discussions, visit our{" "}
              <a href="/community" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Community page
              </a>
              .
            </p>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
            <Clock className="h-5 w-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-white font-bold mb-1">Response Time</h2>
            <p className="text-slate-400 text-sm">
              We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
