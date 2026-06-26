import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '../data/mockData';

export function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by Conscious Consumers
          </h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Hear from people making a difference with ReCircuit.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
