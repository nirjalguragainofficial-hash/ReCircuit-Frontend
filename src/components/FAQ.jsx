import { FaqItem } from './FaqItem';
import { faqItems } from '../data/mockData';

export function FAQ() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display md:text-4xl font-bold text-neutral-900 mb-4">
            Common Questions
          </h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Got questions? We're here to help.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
