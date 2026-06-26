import { useState, useRef, useEffect } from 'react';
import { Cpu, Search, Recycle, BarChart3, Star, ArrowRight, ChevronDown, MapPin, Clock, CheckCircle, Menu, X, Share2, Smartphone, Laptop, Tablet, Monitor, Printer, Keyboard, Lightbulb, Battery, Tv, Gamepad2, Camera, Wifi } from 'lucide-react';
import { mockCenters, testimonials, faqItems, acceptedItems, stats, steps } from './data/mockData';

// Utility function to format large numbers
const formatNumber = (num) => num.toLocaleString();

function App() {
  const [searchLocation, setSearchLocation] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showMoreItems, setShowMoreItems] = useState(false);
  const [displayedStats, setDisplayedStats] = useState([0, 0, 0]);

  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Animate stats on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !statsVisible) {
        setStatsVisible(true);
        animateStats();
      }
    }, { threshold: 0.1 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsVisible]);

  const animateStats = () => {
    const finalStats = [12000, 98, 500000];
    const duration = 2000;
    const steps = 60;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      if (current >= steps) {
        setDisplayedStats(finalStats);
        clearInterval(interval);
      } else {
        setDisplayedStats(finalStats.map(s => Math.floor(s * (current / steps))));
      }
    }, duration / steps);
  };

  const filters = ['All', 'Phones', 'Laptops', 'TVs', 'Batteries', 'Appliances'];

  const filteredCenters = mockCenters.filter((center) => {
    const matchesLocation = center.address.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesFilter = activeFilter === 'All' || center.acceptedItems.some((item) =>
      item.toLowerCase().includes(activeFilter.toLowerCase())
    );
    return matchesLocation && matchesFilter;
  });

  const iconMap = {
    Smartphone, Laptop, Tablet, Monitor, Printer, Keyboard, Lightbulb, Battery, Tv, Gamepad2, Camera, Wifi
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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)', borderBottom: '1px solid #e5e7eb', padding: '1rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0, textDecoration: 'none' }}>
            <div style={{ width: '2rem', height: '2rem', backgroundColor: '#1a7a4a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Cpu size={20} color="white" />
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>ReCircuit</span>
          </a>

          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {['Home', 'Find a Center', 'What We Accept', 'How It Works', 'About'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', textDecoration: 'none', cursor: 'pointer' }}>
                {link}
              </a>
            ))}
          </div>

          <button className="desktop-btn" style={{ display: 'none', padding: '0.75rem 1.5rem', backgroundColor: '#00c875', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            Drop Off Now
          </button>

          <button className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{ borderTop: '1px solid #e5e7eb', backgroundColor: '#f9fafb', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Home', 'Find a Center', 'What We Accept', 'How It Works', 'About'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '')}`} style={{ fontSize: '1rem', fontWeight: 500, color: '#6b7280', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
                {link}
              </a>
            ))}
          </div>
        )}

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
            .desktop-btn { display: none !important; }
            .mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }} viewBox="0 0 1000 600">
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={`dot-${i}`} cx={Math.random() * 1000} cy={Math.random() * 600} r="8" fill="#1a7a4a" />
            ))}
          </svg>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', color: '#111827', letterSpacing: '-0.02em' }}>Give Your Old Electronics a Second Life</h1>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem', lineHeight: 1.6 }}>Find certified e-waste collection centers near you and keep harmful electronics out of landfills.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                <button style={{ padding: '1rem 2rem', backgroundColor: '#00c875', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', margin: '0 auto', transition: 'all 0.2s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                  Find a Collection Center <ArrowRight size={20} />
                </button>
                <button style={{ padding: '1rem 2rem', backgroundColor: 'transparent', color: '#1a7a4a', border: '2px solid #1a7a4a', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                  See What We Accept
                </button>
              </div>

              <div style={{ backgroundColor: '#e8f5ee', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(26, 122, 74, 0.5)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                  <div>
                    <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1a7a4a' }}>3.2M+</p>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.25rem' }}>Devices Recycled</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1a7a4a' }}>140+</p>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.25rem' }}>Certified Centers</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#1a7a4a' }}>28</p>
                    <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', marginTop: '0.25rem' }}>Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="howitworks" style={{ backgroundColor: '#f9fafb', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Three Steps to Responsible Recycling</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>Our streamlined process makes it simple to recycle responsibly.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              {steps.map((step) => {
                const iconMap = { 'Search': Search, 'Recycle': Recycle, 'BarChart3': BarChart3 };
                const Icon = iconMap[step.icon] || Search;
                return (
                  <div key={step.id} style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                      <div style={{ width: '5rem', height: '5rem', backgroundColor: '#e8f5ee', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={40} color="#1a7a4a" />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>{step.title}</h3>
                    <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6 }}>{step.description}</p>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button style={{ padding: '0.75rem 2rem', backgroundColor: '#1a7a4a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Find Center */}
        <section id="centers" style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Find a Drop-Off Center Near You</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>Search for certified recycling centers in your area.</p>
            </div>

            <div style={{ maxWidth: '40rem', margin: '0 auto 2rem' }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Enter your location or address..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 3rem', border: '1px solid #e5e7eb', borderRadius: '4px', fontSize: '1rem' }}
                />
                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#d1d5db' }} />
              </div>
            </div>

            <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{ padding: '0.5rem 1rem', backgroundColor: activeFilter === filter ? '#00c875' : '#f3f4f6', color: activeFilter === filter ? 'white' : '#6b7280', border: 'none', borderRadius: '8px', fontWeight: 500, fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>Showing {filteredCenters.length} center{filteredCenters.length !== 1 ? 's' : ''}</p>

            {filteredCenters.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {filteredCenters.map((center) => (
                  <div key={center.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', padding: '1.5rem', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111827', flex: 1, marginRight: '0.5rem' }}>{center.name}</h3>
                      {center.certified && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', backgroundColor: '#e8f5ee', padding: '0.25rem 0.5rem', borderRadius: '8px', flexShrink: 0 }}>
                          <CheckCircle size={16} color="#1a7a4a" />
                          <span style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a7a4a' }}>Certified</span>
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.125rem', color: '#6b7280' }} />
                      <div>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{center.address}</p>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1a7a4a' }}>{center.distance} away</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', color: '#6b7280' }}>
                      <Clock size={18} style={{ flexShrink: 0 }} />
                      <p style={{ fontSize: '0.875rem' }}>{center.hours}</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.5rem' }}>Accepts</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {center.acceptedItems.map((item, idx) => (
                          <span key={idx} style={{ backgroundColor: '#e8f5ee', color: '#1a7a4a', padding: '0.25rem 0.75rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500 }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                      <button style={{ flex: 1, padding: '0.5rem 1rem', border: '1px solid #1a7a4a', color: '#1a7a4a', backgroundColor: 'transparent', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                        Get Directions
                      </button>
                      <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#00c875', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
                        Learn More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
                <p style={{ fontSize: '1rem', color: '#6b7280' }}>No centers found matching your criteria. Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* What We Accept */}
        <section id="accept" style={{ backgroundColor: '#f9fafb', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>50+ Electronics Accepted</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>We responsibly recycle a wide range of electronics and devices.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              {acceptedItems.map((item) => {
                const IconComponent = iconMap[categoryIcons[item.name]];
                return (
                  <div key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', cursor: 'pointer' }}>
                    <div style={{ width: '5rem', height: '5rem', borderRadius: '12px', backgroundColor: 'white', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'all 0.2s' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e8f5ee'; e.currentTarget.style.borderColor = '#1a7a4a'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.borderColor = '#e5e7eb'; }}>
                      {IconComponent && <IconComponent size={32} color="#1a7a4a" />}
                    </div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>{item.name}</p>
                  </div>
                );
              })}
            </div>

            {showMoreItems && (
              <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', animation: 'fadeIn 0.6s ease-out' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827', marginBottom: '1.5rem' }}>Complete Accepted Items List</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                  {acceptedItems.concat([
                    { name: 'Desktop Computers', category: 'Computers' },
                    { name: 'External Hard Drives', category: 'Storage' },
                    { name: 'USB Flash Drives', category: 'Storage' },
                    { name: 'Headphones', category: 'Audio' },
                    { name: 'Smartwatches', category: 'Wearables' },
                    { name: 'Microwave Ovens', category: 'Appliances' },
                  ]).map((item) => (
                    <div key={item.name} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '0.5rem', height: '0.5rem', backgroundColor: '#00c875', borderRadius: '50%', marginTop: '0.25rem', flexShrink: 0 }}></div>
                      <span style={{ fontSize: '1rem', color: '#6b7280' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button onClick={() => setShowMoreItems(!showMoreItems)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: '1px solid #1a7a4a', color: '#1a7a4a', backgroundColor: 'transparent', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', margin: '0 auto', transition: 'all 0.3s' }}>
                {showMoreItems ? 'Show Less' : 'Not Sure? See Full List'}
                <ChevronDown size={20} style={{ transition: 'transform 0.3s', transform: showMoreItems ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section style={{ backgroundColor: '#111827', color: 'white', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '24rem', height: '24rem', backgroundColor: 'rgba(0, 200, 117, 0.05)', borderRadius: '50%', marginRight: '-12rem', marginTop: '-12rem' }}></div>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Every Device Matters</h2>
              <p style={{ fontSize: '1rem', color: '#d1d5db', maxWidth: '32rem', margin: '0 auto' }}>Together, we're creating a sustainable future by responsibly recycling electronics.</p>
            </div>

            <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00c875' }}>{formatNumber(displayedStats[0])}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00c875' }}>tons</span>
                </div>
                <p style={{ fontSize: '1rem', color: '#d1d5db' }}>E-waste Diverted from Landfills</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00c875' }}>{displayedStats[1]}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00c875' }}>%</span>
                </div>
                <p style={{ fontSize: '1rem', color: '#d1d5db' }}>Material Recovery Rate</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#00c875' }}>{formatNumber(displayedStats[2])}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00c875' }}>+</span>
                </div>
                <p style={{ fontSize: '1rem', color: '#d1d5db' }}>Happy Recyclers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ backgroundColor: 'white', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Trusted by Conscious Consumers</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>Hear from people making a difference with ReCircuit.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} style={{ fill: '#00c875', color: '#00c875' }} />
                    ))}
                  </div>
                  <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: 1.6 }}>"{testimonial.quote}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#1a7a4a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>{testimonial.initials}</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: '#111827' }}>{testimonial.name}</p>
                      <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: '#f9fafb', padding: '5rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '1rem' }}>Common Questions</h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: '32rem', margin: '0 auto' }}>Got questions? We're here to help.</p>
            </div>

            <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqItems.map((item) => (
                <div key={item.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                    style={{ width: '100%', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: expandedFaq === item.id ? '#e8f5ee' : 'white', border: 'none', cursor: 'pointer', transition: 'all 0.2s' }}
                  >
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', textAlign: 'left' }}>{item.question}</h3>
                    <ChevronDown size={24} style={{ color: '#00c875', transition: 'transform 0.3s', transform: expandedFaq === item.id ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }} />
                  </button>
                  {expandedFaq === item.id && (
                    <div style={{ padding: '1.5rem', backgroundColor: '#e8f5ee', borderTop: '1px solid #e5e7eb', animation: 'fadeIn 0.3s ease-out' }}>
                      <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.6 }}>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" style={{ backgroundColor: '#111827', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '2rem', height: '2rem', backgroundColor: '#00c875', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={20} color="#111827" />
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ReCircuit</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>Connecting people with e-waste responsibly.</p>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>Platform</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Find a Center', 'Track Device', 'For Business', 'Pricing'].map((link) => (
                  <li key={link}><a href="#" style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none' }}>{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['About Us', 'Blog', 'Careers', 'Contact'].map((link) => (
                  <li key={link}><a href="#" style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none' }}>{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '1rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Help Center', 'Environmental Report', 'FAQs', 'Newsletter'].map((link) => (
                  <li key={link}><a href="#" style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none' }}>{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1f2937', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: '#9ca3af' }}>© {new Date().getFullYear()} ReCircuit. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {[Share2, Share2, Share2].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: '2.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', backgroundColor: '#1f2937', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#00c875'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <a href="#" style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ fontSize: '0.875rem', color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </footer>
    </div>
  );
}

export default App;
