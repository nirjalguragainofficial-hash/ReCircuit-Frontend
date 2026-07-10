import { StepCard } from './StepCard';
import { steps } from '../data/mockData';
import { ArrowRight } from 'lucide-react';

/**
 * HowItWorks — Section explaining the three-step recycling process.
 * Renders step cards in a responsive grid with a connecting line on desktop.
 */
export function HowItWorks() {
  return (
    <section id="works" className="relative bg-neutral-50 py-24 md:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1a7a4a 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Three Steps to{' '}
            <span className="text-gradient-green">Responsible Recycling</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Our simple process helps you recycle responsibly in just a few steps.
          </p>
        </div>

        {/* Steps grid with connector lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-violet-200 z-0"></div>

          {steps.map((step, i) => (
            <div key={step.id} className="relative z-10 bg-white rounded-2xl p-8 shadow-card border border-neutral-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <StepCard step={step} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="#centers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-base rounded-full shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Start Recycling Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
