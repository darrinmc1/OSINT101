import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer at Stripe',
    avatar: 'SC',
    avatarColor: 'bg-violet-500',
    rating: 5,
    text: 'This platform completely transformed my career. I went from zero coding knowledge to landing a job at Stripe in just 8 months. The structured curriculum and hands-on projects made all the difference.',
    badge: 'Full Stack Developer',
    completedCourses: 12,
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Software Engineer at Google',
    avatar: 'MJ',
    avatarColor: 'bg-blue-500',
    rating: 5,
    text: 'The quality of instruction here is unmatched. Every module builds on the last, and the badge system kept me motivated throughout. I earned my Advanced JavaScript badge and it opened so many doors.',
    badge: 'JavaScript Expert',
    completedCourses: 18,
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Data Scientist at Netflix',
    avatar: 'PP',
    avatarColor: 'bg-emerald-500',
    rating: 5,
    text: "I tried other platforms but nothing compared to this. The completion tracking and achievement system made learning feel like a game. I'm now working at Netflix thanks to the skills I built here.",
    badge: 'Data Science Pro',
    completedCourses: 15,
  },
  {
    id: 4,
    name: 'Alex Rivera',
    role: 'DevOps Engineer at Shopify',
    avatar: 'AR',
    avatarColor: 'bg-orange-500',
    rating: 5,
    text: 'The real-world projects and mentor support are exceptional. I completed the DevOps track in 6 months and immediately got hired. The badges on my portfolio made recruiters take notice instantly.',
    badge: 'DevOps Specialist',
    completedCourses: 10,
  },
  {
    id: 5,
    name: 'Emma Thompson',
    role: 'UX Engineer at Airbnb',
    avatar: 'ET',
    avatarColor: 'bg-pink-500',
    rating: 5,
    text: 'As a designer transitioning to engineering, I was nervous. But the step-by-step approach and supportive community made it achievable. My completion rate badge showed employers I was serious.',
    badge: 'UI/UX Developer',
    completedCourses: 9,
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Backend Engineer at Uber',
    avatar: 'DK',
    avatarColor: 'bg-cyan-500',
    rating: 5,
    text: 'The curriculum is always up-to-date with industry standards. I learned technologies that companies actually use. Within 3 months of completing the backend track, I had 5 job offers.',
    badge: 'Backend Master',
    completedCourses: 14,
  },
];

const stats = [
  { label: 'Students Enrolled', value: '127,000+', icon: '🎓' },
  { label: 'Course Completion Rate', value: '94%', icon: '✅' },
  { label: 'Badges Awarded', value: '2.3M+', icon: '🏆' },
  { label: 'Job Placement Rate', value: '89%', icon: '💼' },
  { label: 'Average Rating', value: '4.9/5', icon: '⭐' },
  { label: 'Countries Reached', value: '150+', icon: '🌍' },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by learners worldwide
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Join over 127,000 students who have transformed their careers through our platform
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-violet-500/50 transition-colors"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What our students say
            </h2>
            <p className="text-gray-400 text-lg">
              Real stories from real learners who achieved their goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-violet-500/30 transition-all hover:shadow-lg hover:shadow-violet-500/5 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-violet-500/40 mb-4 flex-shrink-0" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Badge earned */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs px-3 py-1 rounded-full">
                    <span>🏆</span>
                    <span>{testimonial.badge}</span>
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm font-semibold truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs truncate">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto text-right flex-shrink-0">
                    <div className="text-violet-400 text-xs font-medium">
                      {testimonial.completedCourses} courses
                    </div>
                    <div className="text-gray-500 text-xs">completed</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {['bg-violet-500', 'bg-blue-500', 'bg-emerald-500', 'bg-orange-500'].map((color, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${color} border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-300 text-sm">
              <span className="text-white font-semibold">2,847 students</span> joined this week
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
