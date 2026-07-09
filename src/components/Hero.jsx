import { ArrowRight, Leaf } from 'lucide-react';

/**
 * Decorative SVG circuit board pattern rendered as a background overlay.
 * Purely visual — hidden from assistive technologies via aria-hidden.
 */
const CircuitPattern = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 700"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Grid dots */}
    {Array.from({ length: 8 }).map((_, row) =>
      Array.from({ length: 16 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 80 + 40}
          cy={row * 90 + 45}
          r="2"
          fill="#1A7A4A"
          opacity="0.12"
        />
      ))
    )}
    {/* Circuit traces */}
    <polyline points="120,90 200,90 200,180 280,180" stroke="#1A7A4A" strokeWidth="1" fill="none" opacity="0.08" />
    <polyline points="400,45 400,135 480,135 480,225" stroke="#00C875" strokeWidth="1.5" fill="none" opacity="0.07" />
    <polyline points="720,180 800,180 800,270 880,270" stroke="#1A7A4A" strokeWidth="1" fill="none" opacity="0.08" />
    <polyline points="960,90 1040,90 1040,180" stroke="#00C875" strokeWidth="1" fill="none" opacity="0.06" />
    {/* Corner pads */}
    <rect x="196" y="86" width="8" height="8" rx="2" fill="#1A7A4A" opacity="0.15" />
    <rect x="476" y="131" width="8" height="8" rx="2" fill="#00C875" opacity="0.15" />
    <rect x="796" y="176" width="8" height="8" rx="2" fill="#1A7A4A" opacity="0.15" />
  </svg>
);

/**
 * Hero section — the main landing area of ReCircuit.
 * Displays the headline, CTA buttons, and a stats summary bar.
 */
export function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <CircuitPattern />

      {/* Gradient orbs for depth */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Leaf size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Trusted E-Waste Recycling</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 mb-6 leading-[1.05] tracking-tight">
            Give Your Old Electronics a{' '}
            <span className="text-gradient-green">Second Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-neutral-500 mb-10 leading-relaxed max-w-xl mx-auto">
            Find certified e-waste collection centers near you and keep harmful electronics out of landfills.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a
              href="#centers"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold text-base rounded-full shadow-lg hover:shadow-glow-accent hover:-translate-y-1 transition-all duration-300 shimmer-btn"
            >
              Find a Collection Center
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#accept"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-primary font-bold text-base rounded-full hover:bg-primary-lt hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              See What We Accept
            </a>
          </div>

          {/* Stats bar */}
          <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card border border-neutral-100">
            <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-100">
              <div className="px-4 py-2 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-green">3.2M+</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-1">Devices Recycled</p>
              </div>
              <div className="px-4 py-2 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-green">140+</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-1">Certified Centers</p>
              </div>
              <div className="px-4 py-2 text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-gradient-green">32</p>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-1">Cities Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
