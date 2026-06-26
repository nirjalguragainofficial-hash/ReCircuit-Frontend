import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CenterCard } from './CenterCard';
import { mockCenters } from '../data/mockData';

export function FindCenter() {
  const [searchLocation, setSearchLocation] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Phones', 'Laptops', 'TVs', 'Batteries', 'Appliances'];

  const filteredCenters = useMemo(() => {
    return mockCenters.filter((center) => {
      const matchesLocation = center.address.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesFilter = activeFilter === 'All' || center.acceptedItems.some((item) =>
        item.toLowerCase().includes(activeFilter.toLowerCase())
      );
      return matchesLocation && matchesFilter;
    });
  }, [searchLocation, activeFilter]);

  return (
    <section id="centers" className="bg-white py-20 md:py-28">
      <div className="max-w-container mx-auto px-gutter">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-display md:text-4xl font-bold text-neutral-900 mb-4">
            Find a Drop-Off Center Near You
          </h2>
          <p className="text-body text-neutral-600 max-w-2xl mx-auto">
            Search for certified recycling centers in your area.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location or address..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full px-6 py-3 pl-12 border border-neutral-200 rounded-input text-body focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        {/* Filter chips */}
        <div className="mb-12 flex overflow-x-auto no-scrollbar md:flex-wrap gap-3 justify-start md:justify-center px-4 md:px-0 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-btn font-medium text-body-sm transition-all duration-200 whitespace-nowrap hover:-translate-y-0.5 ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-glow-accent'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-body-sm text-neutral-600 mb-6">
          Showing {filteredCenters.length} center{filteredCenters.length !== 1 ? 's' : ''}
        </p>

        {/* Centers grid */}
        {filteredCenters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-card">
            <p className="text-body text-neutral-600">
              No centers found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
