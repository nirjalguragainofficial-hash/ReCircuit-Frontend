import { CountUpStat } from './CountUpStat';
import { stats } from '../data/mockData';

export function Impact() {
  return (
    <section className="bg-neutral-900 py-20 md:py-28 text-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mt-48"></div>

      <div className="max-w-container mx-auto px-gutter relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display md:text-4xl font-bold mb-4">
            Every Device Matters
          </h2>
          <p className="text-body text-neutral-300 max-w-2xl mx-auto">
            Together, we're creating a sustainable future by responsibly recycling electronics.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <CountUpStat
              key={stat.label}
              number={stat.number}
              unit={stat.unit}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
