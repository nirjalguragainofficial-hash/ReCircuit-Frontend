import { Navigation, Hero, HowItWorks, FindCenter, WhatWeAccept, Impact, Testimonials, FAQ, Footer, ScrollToTop } from './components';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-inter antialiased">
      {/* Navigation header */}
      <Navigation />
      
      {/* Page sections */}
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
        
        {/* Customer testimonials */}
        <Testimonials />
        
        {/* Frequently Asked Questions */}
        <FAQ />
      </main>
      
      {/* Page footer */}
      <Footer />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
