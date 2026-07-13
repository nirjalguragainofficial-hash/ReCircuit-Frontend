import { MapPin, CheckCircle, Clock, ArrowRight, Star } from 'lucide-react';

/**
 * CenterCard — Renders an individual drop-off center's details.
 * Includes information on location, rating, operating hours, and accepted items.
 */
export function CenterCard({ center }) {
  return (
    <div className="group bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Card top color strip */}
      <div className="h-1.5 bg-gradient-to-r from-primary to-accent"></div>

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold text-neutral-900 flex-1 pr-3 leading-snug">{center.name}</h3>
          {center.certified && (
            <div className="flex items-center gap-1 flex-shrink-0 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 px-2.5 py-1 rounded-full">
              <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">Certified</span>
            </div>
          )}
        </div>

        {/* Rating */}
        {center.rating && (
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className={i < Math.floor(center.rating) ? 'text-amber-400 fill-amber-400' : 'text-neutral-200 fill-neutral-200'}
              />
            ))}
            <span className="text-xs font-semibold text-neutral-500 ml-1">{center.rating}</span>
          </div>
        )}

        {/* Address and distance */}
        <div className="flex items-start gap-2 mb-3 text-neutral-500">
          <MapPin size={15} className="flex-shrink-0 mt-0.5 text-accent" />
          <div>
            <p className="text-sm">{center.address}</p>
            <p className="text-sm font-bold text-primary mt-0.5">{center.distance} away</p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-2 mb-4 text-neutral-500">
          <Clock size={15} className="flex-shrink-0 text-neutral-400" />
          <p className="text-sm">{center.hours}</p>
        </div>

        {/* Accepted items */}
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Accepts</p>
          <div className="flex flex-wrap gap-1.5">
            {center.acceptedItems.map((item, idx) => (
              <span key={idx} className="inline-block bg-primary/8 dark:bg-emerald-500/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-neutral-100">
          <button className="flex-1 px-3 py-2 border-2 border-primary/20 text-primary rounded-xl font-semibold text-sm hover:bg-primary-lt hover:border-primary transition-all duration-200">
            Directions
          </button>
          <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-accent text-white rounded-xl font-semibold text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm">
            Learn More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
