import { Star } from 'lucide-react';

export function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white border border-neutral-100 rounded-card p-6 shadow-subtle">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-body text-neutral-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>

      {/* Avatar and info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-body-sm">{testimonial.initials}</span>
        </div>
        <div>
          <p className="font-semibold text-neutral-900">{testimonial.name}</p>
          <p className="text-body-sm text-neutral-500">{testimonial.city}</p>
        </div>
      </div>
    </div>
  );
}
