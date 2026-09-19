import { CheckCircle, Star, TrendingUp, Shield } from 'lucide-react';

const pricingTestimonials = [
  {
    name: 'James Wilson',
    role: 'Now earning $145K/yr',
    avatar: 'JW',
    avatarColor: 'bg-violet-500',
    plan: 'Pro Plan',
    text: 'Best investment I ever made. The Pro plan paid for itself within the first month of my new job.',
    rating: 5,
  },
  {
    name: 'Lisa Park',
    role: 'Promoted to Senior Dev',
    avatar: 'LP',
    avatarColor: 'bg-emerald-500',
    plan: 'Pro Plan',
    text: 'The certificate and badges from the Pro plan were exactly what I needed to get promoted.',
    rating: 5,
  },
  {
    name: 'Tom Bradley',
    role: 'Freelancer, $200/hr',
    avatar: 'TB',
    avatarColor: 'bg-blue-500',
    plan: 'Enterprise',
    text: 'The Enterprise plan gave my whole team access. Our productivity increased by 40% in 3 months.',
    rating: 5,
  },
];

const trustSignals = [
  { icon: Shield, text: '30-day money-back guarantee', color: 'text-emerald-400' },
  { icon: TrendingUp, text: '94% of students complete their first course', color: 'text-violet-400' },
  { icon: CheckCircle, text: 'Cancel anytime, no questions asked', color: 'text-blue-400' },
  { icon: Star, text: '4.9/5 average rating from 50,000+ reviews', color: 'text-yellow-400' },
];

export function PricingSocialProof() {
  return (
    <div className="mt-16 space-y-12">
      {/* Trust Signals */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h3 className="text-white font-semibold text-lg mb-6 text-center">
          Why students choose us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div key={signal.text} className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${signal.color} flex-shrink-0`} />
                <span className="text-gray-300 text-sm">{signal.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mini Testimonials */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-6 text-center">
          Students who upgraded their plan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTestimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-violet-500/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm mb-4">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-full">
                    {t.plan}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Activity */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-full px-6 py-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-gray-300 text-sm">
            <span className="text-white font-semibold">342 people</span> are viewing pricing right now
          </span>
        </div>
      </div>
    </div>
  );
}
