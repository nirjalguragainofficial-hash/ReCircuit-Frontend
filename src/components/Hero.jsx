import { ArrowRight } from 'lucide-react';

const CircuitPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
    {/* Circuit board dot pattern */}
    {Array.from({ length: 50 }).map((_, i) => {
      const x = Math.random() * 1000;
      const y = Math.random() * 600;
      return <circle key={i} cx={x} cy={y} r="8" fill="#1A7A4A" />;
    })}
    {/* Connecting lines */}
    {Array.from({ length: 15 }).map((_, i) => {
      const x1 = Math.random() * 1000;
      const y1 = Math.random() * 600;
      const x2 = x1 + (Math.random() - 0.5) * 200;
      const y2 = y1 + (Math.random() - 0.5) * 200;
      return <line key={`line-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A7A4A" strokeWidth="2" />;
    })}
  </svg>
);

export function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden py-20 md:py-28">
      <CircuitPattern />

      <div className="relative max-w-container mx-auto px-gutter">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-display-lg md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Give Your Old Electronics a Second Life
          </h1>

          {/* Subheadline */}
          <p className="text-body md:text-subheading text-neutral-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Find certified e-waste collection centers near you and keep harmful electronics out of landfills.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-accent text-white rounded-btn font-bold text-body hover:opacity-90 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2">
              Find a Collection Center
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-btn font-bold text-body hover:bg-primary-lt transition-colors duration-200">
              See What We Accept
            </button>
          </div>

          {/* Stats bar */}
          <div className="bg-primary-lt rounded-card p-8 border border-primary-lt/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="py-2">
                <p className="text-2xl md:text-3xl font-bold text-primary">3.2M+</p>
                <p className="text-label text-neutral-600 mt-1">Devices Recycled</p>
              </div>
              <div className="py-2 md:border-l md:border-r border-primary/20">
                <p className="text-2xl md:text-3xl font-bold text-primary">140+</p>
                <p className="text-label text-neutral-600 mt-1">Certified Centers</p>
              </div>
              <div className="py-2">
                <p className="text-2xl md:text-3xl font-bold text-primary">28</p>
                <p className="text-label text-neutral-600 mt-1">Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
