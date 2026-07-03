import { useEffect, useRef, useState } from 'react';

export function CountUpStat({ number, unit, label, icon: Icon }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const numValue = parseInt(number.replace(/\D/g, ''));
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setDisplayNumber(numValue);
        clearInterval(timer);
      } else {
        setDisplayNumber(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className="group flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={22} className="text-accent" strokeWidth={1.5} />
        </div>
      )}
      <div className="flex items-end gap-1 mb-2">
        <span className="text-5xl md:text-6xl font-extrabold text-accent tabular-nums">{displayNumber.toLocaleString()}</span>
        <span className="text-2xl md:text-3xl font-bold text-accent mb-1">{unit}</span>
      </div>
      <p className="text-neutral-300 text-sm font-medium leading-snug max-w-[140px] mx-auto">{label}</p>
    </div>
  );
}
