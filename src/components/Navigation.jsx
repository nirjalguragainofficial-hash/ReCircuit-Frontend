import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Find a Center', href: '#centers' },
    { label: 'What We Accept', href: '#accept' },
    { label: 'How It Works', href: '#works' },
    { label: 'About', href: '#footer' },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
        aria-label="Toggle menu"
      >
        <span
          className="block w-5 h-0.5 bg-neutral-700 transition-all duration-200"
          style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }}
        ></span>
        <span
          className="block w-5 h-0.5 bg-neutral-700 transition-all duration-200"
          style={{ opacity: open ? 0 : 1 }}
        ></span>
        <span
          className="block w-5 h-0.5 bg-neutral-700 transition-all duration-200"
          style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
        ></span>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-100 shadow-lg md:hidden z-50">
          <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-neutral-600 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#centers"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-full shadow-sm"
              onClick={() => setOpen(false)}
            >
              Drop Off Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 relative flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 flex-shrink-0 group no-underline">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            <Cpu size={20} className="text-white" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold text-neutral-900 tracking-tight">
            Re<span className="text-accent">Circuit</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: 'Home', href: '#home' },
            { label: 'Find a Center', href: '#centers' },
            { label: 'What We Accept', href: '#accept' },
            { label: 'How It Works', href: '#works' },
            { label: 'About', href: '#footer' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#centers"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-full shadow-sm hover:-translate-y-0.5 transition-all duration-200"
        >
          Drop Off Now
        </a>

        {/* Mobile hamburger */}
        <MobileMenu />
      </div>
    </nav>
  );
}
