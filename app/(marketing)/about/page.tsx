import { siteConfig } from "@/lib/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} and our mission to make AI education accessible to everyone.`,
}

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient hero-glow py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-8">
            <span className="text-lg">{siteConfig.theme.emoji}</span>
            <span className="text-sm font-semibold text-cyan-400 tracking-wide uppercase">
              About Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold font-display mb-6">
            <span className="gradient-text">Making AI Education</span>
            <br />
            <span className="text-white">Actually Make Sense</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We believe everyone should be able to harness the power of AI
            &mdash; not just engineers with PhDs. {siteConfig.name} is built
            to take you from confused to confident, one hands-on lesson at a
            time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold font-display text-white mb-6">
                Why We Built This
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  AI is moving fast. Like, &quot;blink and you missed three new
                  models&quot; fast. Most people know AI is important but feel
                  overwhelmed by the noise, the hype, and the endless stream of
                  new tools.
                </p>
                <p>
                  We created {siteConfig.name} because we were tired of seeing
                  smart people left behind simply because existing resources were
                  too technical, too theoretical, or too boring.
                </p>
                <p>
                  Our approach is different: hands-on projects, real-world
                  applications, and a gamified progression system that makes
                  learning genuinely fun. You go from{" "}
                  <span className="text-cyan-400 font-semibold">
                    {siteConfig.badges.tierNames[0]}
                  </span>{" "}
                  to{" "}
                  <span className="text-violet-400 font-semibold">
                    {siteConfig.badges.tierNames[4]}
                  </span>{" "}
                  by actually building things, not just watching videos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  emoji: "\u{1F3AF}",
                  title: "Practical Focus",
                  desc: "Every lesson ends with something you built or learned to use",
                },
                {
                  emoji: "\u{1F3AE}",
                  title: "Gamified Progress",
                  desc: "Earn badges, track XP, and level up through 5 tiers",
                },
                {
                  emoji: "\u{1F4F0}",
                  title: "Always Current",
                  desc: "Weekly updates on the latest AI developments and tools",
                },
                {
                  emoji: "\u{1F91D}",
                  title: "Community",
                  desc: "Learn alongside other curious humans navigating the AI revolution",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <div className="relative z-10">
                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                    <h3 className="font-bold text-white text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Badge Tiers */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Your Evolution Path
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Every learner starts as a {siteConfig.badges.tierNames[0]} and
            evolves through five tiers of AI mastery.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {siteConfig.badges.tierNames.map((name, i) => (
              <div
                key={name}
                className="glass-card px-6 py-4 text-center min-w-[140px]"
              >
                <div className="relative z-10">
                  <span className="text-3xl block mb-2">
                    {siteConfig.badges.tierEmojis[i]}
                  </span>
                  <p className="font-bold text-white text-sm">{name}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {siteConfig.badges.xpPerTier[i]} XP
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold font-display text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-8">
            Questions, ideas, or just want to say beep boop? We&apos;d love to
            hear from you.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>Send Us a Message</span>
          </a>
        </div>
      </section>
    </div>
  )
}
