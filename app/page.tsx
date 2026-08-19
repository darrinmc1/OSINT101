import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/json-ld";
import { Shield, BookOpen, Users, Star, Quote, TrendingUp, Award, CheckCircle } from "lucide-react";

const testimonials = [
  {
    quote: "OSINT 101 took me from zero to confidently running open-source investigations in under a month. The structured modules are exactly what I needed.",
    author: "Sarah K.",
    role: "Threat Intelligence Analyst",
    company: "Fortune 500 Financial Firm",
    avatar: "SK",
    stars: 5,
  },
  {
    quote: "I've recommended OSINT 101 to my entire security team. The practical, hands-on approach beats any textbook I've found.",
    author: "Marcus T.",
    role: "Senior Penetration Tester",
    company: "Independent Consultant",
    avatar: "MT",
    stars: 5,
  },
  {
    quote: "As a journalist, understanding OSINT techniques has been a game-changer for source verification and investigative research.",
    author: "Priya M.",
    role: "Investigative Journalist",
    company: "Regional News Network",
    avatar: "PM",
    stars: 5,
  },
  {
    quote: "The community alone is worth it. Real practitioners sharing real techniques — not watered-down theory.",
    author: "James R.",
    role: "Law Enforcement Analyst",
    company: "State Agency",
    avatar: "JR",
    stars: 5,
  },
];

const stats = [
  { value: "12,000+", label: "Investigators Trained", icon: Users },
  { value: "95%", label: "Completion Rate", icon: TrendingUp },
  { value: "50+", label: "Hands-On Modules", icon: BookOpen },
  { value: "4.9/5", label: "Average Rating", icon: Star },
];

const usedBy = [
  "Security Teams",
  "Law Enforcement",
  "Journalists",
  "HR Professionals",
  "Private Investigators",
  "Fraud Analysts",
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "OSINT 101",
          description:
            "Learn open-source intelligence techniques with structured modules, practical tools, and a community of investigators.",
          url: "https://osint101.com",
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 text-sm">
              🔍 Trusted by 12,000+ investigators worldwide
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Master OSINT.
              <br />
              <span className="text-primary">Investigate Smarter.</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              The most practical open-source intelligence training on the web.
              Structured modules, real-world techniques, and a community of
              professionals who actually do this work.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/sign-up">Start Learning Free</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/modules">Browse Modules</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required · Free tier available · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Stats Bar */}
      <section className="border-y bg-muted/40 py-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-bold md:text-3xl">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Used By Section */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by professionals across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {usedBy.map((role) => (
              <div
                key={role}
                className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Everything you need to investigate like a pro
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              From beginner fundamentals to advanced tradecraft — OSINT 101
              covers the full spectrum of open-source intelligence.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Structured Learning</h3>
              <p className="text-muted-foreground">
                50+ modules organized from foundational concepts to advanced
                techniques. Learn at your own pace with clear progression.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <BookOpen className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Practical Tools</h3>
              <p className="text-muted-foreground">
                Curated resources, tool guides, and real investigation
                frameworks used by professionals in the field today.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Active Community</h3>
              <p className="text-muted-foreground">
                Connect with thousands of analysts, researchers, and
                investigators sharing techniques and case studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mb-3">
              <Award className="mr-1 h-3 w-3" /> Student Success Stories
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Investigators who leveled up with OSINT 101
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Real feedback from real practitioners — not cherry-picked
              marketing copy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="relative rounded-xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/20" />
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to start your OSINT journey?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join 12,000+ investigators already using OSINT 101 to sharpen their
            skills. Free to start — no credit card needed.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="/sign-up">Create Free Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
