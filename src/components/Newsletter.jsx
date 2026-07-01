import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" aria-label="Newsletter Subscription" className="bg-neutral-50 py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-16 overflow-hidden">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(white 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          ></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Left content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 rounded-full mb-5">
                <Mail size={14} className="text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Stay Updated</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
                Get Recycling Tips & Updates
              </h2>
              <p className="text-white/80 text-base leading-relaxed max-w-md">
                Join our newsletter for the latest e-waste recycling tips, new center openings, and environmental impact reports.
              </p>
            </div>

            {/* Right form */}
            <div className="w-full md:w-auto md:min-w-[380px]">
              {isSubscribed ? (
                <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <CheckCircle size={28} className="text-white flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-lg">You're subscribed!</p>
                    <p className="text-white/80 text-sm">Check your inbox for a welcome email.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address for newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-4 bg-white/95 border-2 border-white rounded-xl text-neutral-900 text-base placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900 text-white font-bold text-sm rounded-xl hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg whitespace-nowrap"
                  >
                    Subscribe <ArrowRight size={16} />
                  </button>
                </form>
              )}
              <p className="text-white/60 text-xs mt-3 text-center md:text-left">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
