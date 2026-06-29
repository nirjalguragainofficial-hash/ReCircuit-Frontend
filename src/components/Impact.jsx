import { CountUpStat } from './CountUpStat';
import { stats } from '../data/mockData';
import { Recycle, BarChart3, Users } from 'lucide-react';

const statIcons = [Recycle, BarChart3, Users];

export function Impact() {
  return (
    <section className="relative bg-neutral-900 py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] -ml-40 -mb-40 pointer-events-none"></div>

      {/* Grid dot background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#00c875 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="relative max-w-[1200px] mx-auto px-6 z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/15 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">Our Impact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Every Device <span className="text-accent">Matters</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Together, we’re building a cleaner future by recycling electronics responsibly.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <CountUpStat
              key={stat.label}
              number={stat.number}
              unit={stat.unit}
              label={stat.label}
              icon={statIcons[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
