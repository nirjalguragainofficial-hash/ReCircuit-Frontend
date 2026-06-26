import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-accent/30 shadow-sm' : 'border-neutral-100'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 ${isOpen ? 'bg-accent/5' : 'bg-white hover:bg-neutral-50'}`}
      >
        <h3 className="text-base font-semibold text-neutral-900 pr-4 leading-snug">{question}</h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-neutral-100 text-neutral-500'}`}>
          <ChevronDown size={16} />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 pt-2 bg-accent/5 border-t border-accent/10">
          <p className="text-base text-neutral-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
