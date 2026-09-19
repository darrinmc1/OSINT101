'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Award, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    stat: '127K+',
    label: 'Active Learners',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    icon: TrendingUp,
    stat: '94%',
    label: 'Completion Rate',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: Award,
    stat: '2.3M+',
    label: 'Badges Earned',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Zap,
    stat: '89%',
    label: 'Get Hired',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
];

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {current.toLocaleString()}{suffix}
    </span>
  );
}

export function CompletionStatsBar() {
  return (
    <div className="bg-gray-900/50 border-y border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-4">
                <div className={`${item.bgColor} p-3 rounded-xl flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className={`text-2xl font-bold ${item.color}`}>{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
