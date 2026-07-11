import { Navigation, Hero, HowItWorks, FindCenter, WhatWeAccept, Impact, ImpactCalculator, Testimonials, FAQ, Newsletter, Footer, ScrollToTop } from './components';

/**
 * App - The root component of the React application.
 * Composes all major sections of the landing page.
 */
function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-inter antialiased">
      {/* Navigation header */}
      <Navigation />
      
      {/* Page sections */}
      {/* @ts-ignore */}
      <main>
        {/* Hero section */}
        <Hero />
        
        {/* Steps section */}
        <HowItWorks />
        
        {/* Drop off center locator */}
        <FindCenter />
        
        {/* Accepted electronic items */}
        <WhatWeAccept />
        
        {/* Impact numbers / counters */}
        <Impact />

        {/* E-waste impact calculator */}
        <ImpactCalculator />
        
        {/* Customer testimonials */}
        <Testimonials />
        
        {/* Frequently Asked Questions */}
        <FAQ />


        {/* Newsletter subscription */}
        <Newsletter />
      </main>
      
      {/* Page footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
