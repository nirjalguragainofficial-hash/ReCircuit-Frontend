import { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

/**
 * Newsletter — Email subscription section.
 * Validates the email client-side, simulates an async API call,
 * and shows success or error feedback to the user.
 */
export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (emailStr) => {
    // Basic RFC 5322 email regex verification pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailStr.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setErrorMessage('Email address is required.');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call with 1.2s delay
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (trimmedEmail.toLowerCase() === 'error@recircuit.com') {
            reject(new Error('This email is already registered.'));
          } else {
            resolve();
          }
        }, 1200);
      });

      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
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
                Get e-waste recycling tips, new center alerts, and monthly environmental impact reports — straight to your inbox.
              </p>
            </div>

            {/* Right form */}
            <div className="w-full md:w-auto md:min-w-[380px]">
              {isSubscribed ? (
                <div aria-live="polite" className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 animate-reveal">
                  <CheckCircle size={28} className="text-white flex-shrink-0" />
                  <div>
                    <p className="text-white font-bold text-lg">You're subscribed!</p>
                    <p className="text-white/80 text-sm">Check your inbox for a welcome email.</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3">
                    {/* Visually hidden label for screen readers */}
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      disabled={isLoading}
                      required
                      className="flex-1 px-5 py-4 bg-white/95 border-2 border-white rounded-xl text-neutral-900 text-base placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200 disabled:opacity-70"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-neutral-900 text-white font-bold text-sm rounded-xl hover:bg-neutral-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg whitespace-nowrap disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {isLoading ? (
                        <>
                          Subscribing <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Subscribe <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                  {errorMessage && (
                    <div className="flex items-center gap-2 text-rose-100 bg-rose-500/20 px-4 py-2.5 rounded-xl text-xs border border-rose-500/30 animate-reveal">
                      <AlertCircle size={14} className="text-rose-200 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </div>
              )}
              <p className="text-white/60 text-xs mt-3 text-center md:text-left">
                We send 2–4 emails per month. Unsubscribe anytime, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

