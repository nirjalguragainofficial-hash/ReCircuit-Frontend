import { FaqItem } from './FaqItem';
import { faqItems } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export function FAQ() {
  return (
    <section id="faq" aria-label="Frequently Asked Questions" className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Common <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Got questions? We're here to help.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Contact prompt */}
        <div className="text-center mt-12">
          <p className="text-neutral-500 text-base mb-4">Still have questions?</p>
          {/* Launches the user's default system mail client */}
          <a
            href="mailto:support@recircuit.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-700 transition-colors duration-200"
          >
            <MessageCircle size={16} /> Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
