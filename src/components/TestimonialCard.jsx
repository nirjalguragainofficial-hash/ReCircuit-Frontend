import { Star, Quote } from 'lucide-react';

// Renders an individual customer review card with star ratings, quote text, and user initials avatar.
export function TestimonialCard({ testimonial }) {
  return (
    <div className="group bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
      {/* Quote icon watermark */}
      <Quote size={60} className="absolute top-4 right-4 text-neutral-50 dark:text-neutral-800/30 rotate-180 pointer-events-none" />

      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={15}
            className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'fill-neutral-200 text-neutral-200'}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-base text-neutral-600 dark:text-neutral-300 mb-6 italic leading-relaxed flex-1 relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Avatar and info */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-sm" title={testimonial.name}>
          <span className="text-white font-bold text-sm">{testimonial.initials}</span>
        </div>
        <div>
          <p className="font-bold text-neutral-900 text-sm">{testimonial.name}</p>
          <p className="text-xs text-neutral-400 font-medium">{testimonial.city}</p>
        </div>
      </div>
    </div>
  );
}
