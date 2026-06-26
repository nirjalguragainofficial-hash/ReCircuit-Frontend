import { Search, Recycle, BarChart3 } from 'lucide-react';

const iconMap = {
  Search: Search,
  Recycle2: Recycle,
  BarChart3: BarChart3,
};

const stepColors = [
  { bg: 'bg-blue-50', icon: 'text-blue-500', border: 'border-blue-100', num: 'bg-blue-500' },
  { bg: 'bg-emerald-50', icon: 'text-emerald-500', border: 'border-emerald-100', num: 'bg-emerald-500' },
  { bg: 'bg-violet-50', icon: 'text-violet-500', border: 'border-violet-100', num: 'bg-violet-500' },
];

export function StepCard({ step, index }) {
  const IconComponent = iconMap[step.icon] || Search;
  const colors = stepColors[index] || stepColors[0];

  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Step number */}
      <div className={`absolute -top-3 -left-3 w-7 h-7 ${colors.num} text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md z-10`}>
        {index + 1}
      </div>

      {/* Icon box */}
      <div className={`w-20 h-20 ${colors.bg} border-2 ${colors.border} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 group-hover:shadow-md transition-all duration-300`}>
        <IconComponent size={36} className={colors.icon} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
      <p className="text-base text-neutral-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
    </div>
  );
}
