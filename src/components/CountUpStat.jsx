import { useEffect, useRef, useState } from 'react';

export function CountUpStat({ number, unit, label }) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

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
    <div ref={ref} className="text-center">
      <div className="flex items-center justify-center gap-1">
        <span className="text-5xl md:text-6xl font-bold text-accent">{displayNumber.toLocaleString()}</span>
        <span className="text-2xl md:text-3xl font-bold text-accent">{unit}</span>
      </div>
      <p className="text-neutral-500 text-body mt-3 max-w-xs mx-auto">{label}</p>
    </div>
  );
}
