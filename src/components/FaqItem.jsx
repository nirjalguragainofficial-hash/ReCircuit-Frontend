import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-100 rounded-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary-lt transition-colors duration-200"
      >
        <h3 className="text-left text-subheading font-semibold text-neutral-900">{question}</h3>
        <ChevronDown
          size={24}
          className={`text-accent flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-primary-lt border-t border-neutral-100 animate-fade-in">
          <p className="text-body text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
