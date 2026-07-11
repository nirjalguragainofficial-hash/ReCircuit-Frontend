import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/mockData';

/**
 * Testimonials - Renders a grid of customer reviews.
 */
export function Testimonials() {
  return (
    <section id="testimonials" aria-label="Customer Testimonials" className="bg-neutral-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Trusted by <span className="text-gradient-green">Conscious Consumers</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Hear from people who are making a real difference with ReCircuit every day.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
