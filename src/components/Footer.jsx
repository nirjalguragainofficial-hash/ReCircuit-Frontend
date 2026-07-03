import { Cpu, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-neutral-900 text-white relative overflow-hidden">
      {/* CTA Banner */}
      <div className="relative bg-gradient-to-r from-primary to-accent py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Ready to Recycle?</h3>
            <p className="text-white/80 text-lg">Join thousands of responsible recyclers and find a certified center near you.</p>
          </div>
          <a
            href="#centers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-base rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 flex-shrink-0"
          >
            Find a Center <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Cpu size={20} className="text-white" strokeWidth={2} />
              </div>
              <span className="text-xl font-bold">Re<span className="text-accent">Circuit</span></span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              Connecting people with certified e-waste collection centers for a cleaner, greener planet.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, name: 'Twitter' },
                { Icon: Linkedin, name: 'LinkedIn' },
                { Icon: Instagram, name: 'Instagram' }
              ].map(({ Icon, name }) => (
                <a
                  key={name}
                  href="#"
                  aria-label={`Follow ReCircuit on ${name}`}
                  title={`Follow ReCircuit on ${name}`}
                  className="w-9 h-9 bg-neutral-800 text-neutral-400 rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-200 focus-ring"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Platform</h4>
            <ul className="space-y-3">
              {[
                { label: 'Find a Center', href: '#centers' },
                { label: 'Track Device', href: '#works' },
                { label: 'For Business', href: '#faq' },
                { label: 'Pricing', href: '#faq' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#footer' },
                { label: 'Blog', href: '#home' },
                { label: 'Careers', href: '#footer' },
                { label: 'Contact', href: 'mailto:support@recircuit.com' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { label: 'Help Center', href: '#faq' },
                { label: 'Environmental Report', href: '#impact' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Newsletter', href: '#newsletter' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {currentYear} ReCircuit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-neutral-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
