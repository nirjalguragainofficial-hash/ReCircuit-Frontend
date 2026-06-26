import { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Find a Center', href: '#centers' },
    { label: 'What We Accept', href: '#accept' },
    { label: 'How It Works', href: '#works' },
    { label: 'About', href: '#footer' },
  ];

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)', borderBottom: '1px solid #e5e7eb' }}>
      <div className="max-w-container px-gutter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <div style={{ width: '2rem', height: '2rem', backgroundColor: '#1a7a4a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cpu size={20} style={{ color: 'white', strokeWidth: 2 }} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>ReCircuit</span>
        </a>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#1a7a4a'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button (desktop) */}
        <button className="btn-primary" style={{ display: 'none' }}>
          Drop Off Now
        </button>

        {/* Mobile menu button */}
        <button
          style={{ padding: '0.5rem', display: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div style={{ borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
          <div className="max-w-container px-gutter" style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="btn-primary" style={{ width: '100%' }}>
              Drop Off Now
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
