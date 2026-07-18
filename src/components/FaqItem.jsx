import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FaqItem — Animated accordion item for the FAQ section.
 * Uses CSS max-height and opacity transitions for a smooth open/close effect.
 *
 * @param {string} question - The FAQ question text.
 * @param {string} answer   - The FAQ answer text shown when expanded.
 * @param {string|number} id - Unique identifier used for ARIA relationships.
 */
export function FaqItem({ question, answer, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `faq-panel-${id ?? question.slice(0, 10).replace(/\s+/g, '-').toLowerCase()}`;
  const triggerId = `faq-trigger-${id ?? question.slice(0, 10).replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-accent/30 shadow-sm' : 'border-neutral-100'
      }`}
    >
      <button
        id={triggerId}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer transition-colors duration-200 focus-ring ${
          isOpen ? 'bg-accent/5' : 'bg-white hover:bg-neutral-50'
        }`}
      >
        <h3 className="text-base font-semibold text-neutral-900 pr-4 leading-snug">{question}</h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-accent text-white rotate-180' : 'bg-neutral-100 text-neutral-500'
          }`}
        >
          <ChevronDown size={16} />
        </div>
      </button>

      {/* Animated answer panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.35s ease, opacity 0.25s ease',
          overflow: 'hidden',
        }}
      >
        <div className="px-6 pb-5 pt-2 bg-accent/5 border-t border-accent/10">
          <p className="text-base text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
