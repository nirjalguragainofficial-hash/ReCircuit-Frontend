import { Cpu, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-neutral-900 text-white">
      {/* Main footer content */}
      <div className="max-w-container mx-auto px-gutter py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-btn flex items-center justify-center">
                <Cpu size={20} className="text-neutral-900" strokeWidth={2} />
              </div>
              <span className="font-inter text-heading font-bold">ReCircuit</span>
            </div>
            <p className="text-body-sm text-neutral-400">
              Connecting people with e-waste responsibly.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="font-semibold text-body mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Find a Center</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Track Device</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">For Business</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold text-body mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="font-semibold text-body mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Environmental Report</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-neutral-400 text-body-sm hover:text-white transition-colors">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-body-sm text-neutral-400">
            © {currentYear} ReCircuit. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-btn bg-neutral-800 hover:bg-accent transition-colors duration-200">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-btn bg-neutral-800 hover:bg-accent transition-colors duration-200">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-btn bg-neutral-800 hover:bg-accent transition-colors duration-200">
              <Instagram size={18} />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex gap-6">
            <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-body-sm text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
