import { Star, Users, Trophy, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    avatar: 'SC',
    rating: 5,
    text: 'This platform transformed how I approach system design interviews. The structured modules and hands-on practice helped me land my dream job. Highly recommend to anyone serious about leveling up.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Senior Developer at Stripe',
    avatar: 'MJ',
    rating: 5,
    text: 'I tried many resources before finding this. The completion tracking kept me accountable and the content quality is outstanding. Went from struggling with algorithms to confidently solving hard problems.',
  },
  {
    name: 'Priya Patel',
    role: 'Full Stack Engineer at Airbnb',
    avatar: 'PP',
    rating: 5,
    text: 'The bite-sized modules fit perfectly into my busy schedule. Within 8 weeks I completed the full curriculum and received 3 job offers. The ROI on this training is incredible.',
  },
];

const stats = [
  {
    icon: Users,
    value: '12,400+',
    label: 'Students Trained',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    icon: Trophy,
    value: '87%',
    label: 'Completion Rate',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: TrendingUp,
    value: '94%',
    label: 'Got Hired Within 3 Months',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

export default function SocialProof() {
  return (
    <section className="w-full py-16 px-4">
      {/* Stats Row */}
      <div className="max-w-5xl mx-auto mb-16">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-8">
          Trusted by engineers worldwide
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 text-center backdrop-blur"
              >
                <div className={`rounded-xl p-3 ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-sm text-zinc-400">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-8">
          What our students say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-zinc-300">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-zinc-800 pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
