import { useState } from 'react';
import { Smartphone, Laptop, Tablet, Monitor, Printer, Keyboard, Lightbulb, Battery, Tv, Gamepad2, Camera, Wifi, ChevronDown, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Smartphone, Laptop, Tablet, Monitor, Printer, Keyboard,
  Lightbulb, Battery, Tv, Gamepad2, Camera, Wifi,
};

const categoryIcons = {
  'Smartphones': 'Smartphone',
  'Laptops': 'Laptop',
  'Tablets': 'Tablet',
  'Monitors': 'Monitor',
  'Printers': 'Printer',
  'Keyboards': 'Keyboard',
  'Cables & Chargers': 'Lightbulb',
  'Batteries': 'Battery',
  'TVs': 'Tv',
  'Game Consoles': 'Gamepad2',
  'Cameras': 'Camera',
  'Routers & Modems': 'Wifi',
};

const extraItems = [
  'Desktop Computers', 'External Hard Drives', 'USB Flash Drives',
  'Headphones', 'Smartwatches', 'Microwave Ovens', 'E-Readers',
  'Power Banks', 'Smart Speakers', 'VR Headsets',
];

export function WhatWeAccept() {
  const [showMore, setShowMore] = useState(false);

  const items = Object.keys(categoryIcons);

  return (
    <section id="accept" className="bg-neutral-50 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">What We Accept</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            50+ Electronics{' '}
            <span className="text-gradient-green">Accepted</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            We responsibly recycle a wide range of electronics and devices.
          </p>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {items.map((item) => {
            const IconComponent = iconMap[categoryIcons[item]];
            return (
              <div
                key={item}
                className="group flex flex-col items-center text-center p-5 bg-white border-2 border-neutral-100 rounded-2xl cursor-pointer hover:border-accent/40 hover:bg-accent/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-lt flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                  {IconComponent && <IconComponent size={28} className="text-primary" strokeWidth={1.5} />}
                </div>
                <p className="text-sm font-semibold text-neutral-700 leading-tight">{item}</p>
              </div>
            );
          })}
        </div>

        {/* Expanded full list */}
        {showMore && (
          <div className="mt-8 p-8 bg-white rounded-2xl border border-neutral-100 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <CheckCircle2 size={22} className="text-accent" />
              Complete Accepted Items List
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[...items, ...extraItems].map((item) => (
                <div key={item} className="flex items-center gap-2.5 py-1.5">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-neutral-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toggle button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-7 py-3 border-2 border-primary/20 text-primary bg-white rounded-full font-bold text-sm hover:bg-primary-lt hover:border-primary transition-all duration-200 shadow-sm"
          >
            {showMore ? 'Show Less' : 'Not Sure? See Full List'}
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
