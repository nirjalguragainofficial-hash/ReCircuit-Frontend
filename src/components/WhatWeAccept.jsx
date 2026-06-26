import { useState } from 'react';
import { Smartphone, Laptop, Tablet, Monitor, Printer, Keyboard, Lightbulb, Battery, Tv, Gamepad2, Camera, Wifi, ChevronDown } from 'lucide-react';

const iconMap = {
  Smartphone,
  Laptop,
  Tablet,
  Monitor,
  Printer,
  Keyboard,
  Lightbulb,
  Battery,
  Tv,
  Gamepad2,
  Camera,
  Wifi,
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

export function WhatWeAccept() {
  const [showMore, setShowMore] = useState(false);

  const items = [
    'Smartphones', 'Laptops', 'Tablets', 'Monitors',
    'Printers', 'Keyboards', 'Cables & Chargers', 'Batteries',
    'TVs', 'Game Consoles', 'Cameras', 'Routers & Modems',
  ];

  return (
    <section id="accept" className="bg-neutral-50 py-20 md:py-28">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-display md:text-4xl font-bold text-neutral-900 mb-4">
            50+ Electronics Accepted
          </h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            We responsibly recycle a wide range of electronics and devices.
          </p>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {items.map((item) => {
            const IconComponent = iconMap[categoryIcons[item]];
            return (
              <div key={item} className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-card bg-white border border-neutral-200 flex items-center justify-center mb-4 group-hover:bg-primary-lt group-hover:border-primary transition-all duration-200">
                  <IconComponent size={32} className="text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-body-sm font-medium text-neutral-900">{item}</p>
              </div>
            );
          })}
        </div>

        {/* Expandable full list */}
        {showMore && (
          <div className="mt-12 p-8 bg-white rounded-card border border-neutral-100">
            <h3 className="text-subheading font-bold text-neutral-900 mb-6">Complete Accepted Items List</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-body text-neutral-600">{item}</span>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">Desktop Computers</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">External Hard Drives</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">USB Flash Drives</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">Headphones</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">Smartwatches</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                <span className="text-body text-neutral-600">Microwave Ovens</span>
              </div>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-btn font-semibold text-body hover:bg-primary-lt transition-colors duration-200"
          >
            {showMore ? 'Show Less' : 'Not Sure? See Full List'}
            <ChevronDown size={20} className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
