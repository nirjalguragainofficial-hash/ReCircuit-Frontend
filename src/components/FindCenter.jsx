import { useState, useMemo } from 'react';
import { Search, MapPin, X } from 'lucide-react';
import { CenterCard } from './CenterCard';
import { mockCenters } from '../data/mockData';

export function FindCenter() {
  const [searchLocation, setSearchLocation] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filters = ['All', 'Phones', 'Laptops', 'TVs', 'Batteries', 'Appliances'];

  // Compute filtered and sorted drop-off centers list dynamically based on search, filter, and sorting states
  const filteredCenters = useMemo(() => {
    let result = mockCenters.filter((center) => {
      const matchesLocation = center.address.toLowerCase().includes(searchLocation.toLowerCase());
      const matchesFilter = activeFilter === 'All' || center.acceptedItems.some((item) =>
        item.toLowerCase().includes(activeFilter.toLowerCase())
      );
      return matchesLocation && matchesFilter;
    });

    if (sortBy === 'distance') {
      result = [...result].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
    } else if (sortBy === 'rating') {
      result = [...result].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [searchLocation, activeFilter, sortBy]);

  return (
    <section id="centers" className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">Find a Center</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            Drop-Off Centers{' '}
            <span className="text-gradient-green">Near You</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Search for certified recycling centers in your area.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your location or address..."
              aria-label="Search for recycling centers by location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full pl-14 pr-12 py-4 bg-neutral-50 border-2 border-neutral-200 rounded-2xl text-base focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-200 placeholder-neutral-300"
            />
            <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
            {searchLocation && (
              <button
                onClick={() => setSearchLocation('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                aria-label="Clear search location"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Filter chips */}
        <div className="mb-10 flex overflow-x-auto no-scrollbar md:flex-wrap gap-2 justify-start md:justify-center pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap border ${
                activeFilter === filter
                  ? 'bg-accent text-white border-accent shadow-sm'
                  : 'bg-white text-neutral-500 border-neutral-200 hover:border-accent/50 hover:text-accent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results count & Sort */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            <p className="text-sm font-medium text-neutral-500">
              Showing <span className="text-neutral-900 font-bold">{filteredCenters.length}</span> center{filteredCenters.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Sort By:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm font-semibold rounded-xl px-3 py-1.5 focus:outline-none focus:border-accent transition-colors"
            >
              <option value="default">Featured</option>
              <option value="distance">Distance (Nearest First)</option>
              <option value="rating">Rating (Highest First)</option>
            </select>
          </div>
        </div>

        {/* Centers grid */}
        {filteredCenters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center) => (
              <CenterCard key={center.id} center={center} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50 rounded-2xl border-2 border-dashed border-neutral-200">
            <Search size={40} className="text-neutral-300 mx-auto mb-4" />
            <p className="text-lg font-medium text-neutral-400">No centers found matching your criteria.</p>
            <p className="text-sm text-neutral-400 mt-1">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
