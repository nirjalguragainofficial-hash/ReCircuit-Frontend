import { Search, Recycle, BarChart3 } from 'lucide-react';

const iconMap = {
  Search: Search,
  Recycle2: Recycle,
  BarChart3: BarChart3,
};

export function StepCard({ step, index }) {
  const IconComponent = iconMap[step.icon];

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-card bg-primary-lt flex items-center justify-center">
          <IconComponent size={40} className="text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-heading font-bold text-neutral-900 mb-3">{step.title}</h3>
      <p className="text-body text-neutral-600 leading-relaxed">{step.description}</p>
    </div>
  );
}
