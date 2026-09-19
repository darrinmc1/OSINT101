import Link from 'next/link';
import { ArrowRight, BookOpen, Zap, Target } from 'lucide-react';
import SocialProof from '@/components/SocialProof';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[800px] rounded-full bg-blue-600/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <Zap className="h-3.5 w-3.5" />
            <span>12,400+ engineers trained and counting</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Master the skills that{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              get you hired
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg leading-relaxed text-zinc-400 sm:text-xl">
            Structured, bite-sized training modules built for working engineers. Track your progress,
            complete the curriculum, and land the role you deserve — with an{' '}
            <span className="font-semibold text-zinc-200">87% completion rate</span> and{' '}
            <span className="font-semibold text-zinc-200">94% hire rate</span> among our graduates.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-500/40"
            >
              Start Training Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-7 py-3.5 text-base font-semibold text-zinc-300 transition hover:border-zinc-500 hover:text-zinc-100"
            >
              <BookOpen className="h-4 w-4" />
              Browse Modules
            </Link>
          </div>

          {/* Micro trust signals below CTAs */}
          <p className="mt-5 text-xs text-zinc-600">
            No credit card required &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Join 12,400+ students
          </p>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: 'Structured Curriculum',
              desc: 'Carefully sequenced modules that build on each other so you never feel lost.',
              color: 'text-blue-400',
              bg: 'bg-blue-400/10',
            },
            {
              icon: Target,
              title: 'Progress Tracking',
              desc: 'Visual dashboards keep you accountable and show exactly how far you have come.',
              color: 'text-emerald-400',
              bg: 'bg-emerald-400/10',
            },
            {
              icon: Zap,
              title: 'Bite-Sized Lessons',
              desc: 'Designed for busy engineers — complete meaningful lessons in 15 minutes or less.',
              color: 'text-purple-400',
              bg: 'bg-purple-400/10',
            },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur"
              >
                <div className={`mb-4 inline-flex rounded-xl p-3 ${f.bg}`}>
                  <Icon className={`h-5 w-5 ${f.color}`} />
                </div>
                <h3 className="mb-2 font-semibold text-zinc-100">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social Proof — stats + testimonials */}
      <SocialProof />

      {/* Bottom CTA */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to level up your career?
          </h2>
          <p className="mb-8 text-zinc-400">
            Join thousands of engineers who have already transformed their skills and landed better roles.
          </p>
          <Link
            href="/modules"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
          >
            Get Started Today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
