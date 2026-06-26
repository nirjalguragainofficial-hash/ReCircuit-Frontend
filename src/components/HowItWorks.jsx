import { StepCard } from './StepCard';
import { steps } from '../data/mockData';

export function HowItWorks() {
  return (
    <section id="works" className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display md:text-4xl font-bold text-neutral-900 mb-4">
            Three Steps to Responsible Recycling
          </h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Our streamlined process makes it simple to recycle responsibly.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} index={step.id - 1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary text-white rounded-btn font-semibold text-body hover:opacity-90 transition-opacity duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
