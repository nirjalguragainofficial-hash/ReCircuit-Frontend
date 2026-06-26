import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export function CenterCard({ center }) {
  return (
    <div className="bg-white border border-neutral-100 rounded-card shadow-subtle hover:shadow-card transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        {/* Header with name and certified badge */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-heading font-bold text-neutral-900 flex-1 pr-2">{center.name}</h3>
          {center.certified && (
            <div className="flex items-center gap-1 flex-shrink-0 bg-primary-lt px-2 py-1 rounded-btn">
              <CheckCircle size={16} className="text-primary" />
              <span className="text-label text-primary">Certified</span>
            </div>
          )}
        </div>

        {/* Address and distance */}
        <div className="flex items-start gap-2 mb-4 text-neutral-600">
          <MapPin size={18} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-body-sm">{center.address}</p>
            <p className="text-body-sm font-semibold text-primary">{center.distance} away</p>
          </div>
        </div>

        {/* Operating hours */}
        <div className="flex items-start gap-2 mb-4 text-neutral-600">
          <Clock size={18} className="flex-shrink-0 mt-0.5" />
          <p className="text-body-sm">{center.hours}</p>
        </div>

        {/* Accepted items tags */}
        <div className="mb-6">
          <p className="text-label text-neutral-500 mb-2">Accepts</p>
          <div className="flex flex-wrap gap-2">
            {center.acceptedItems.map((item, idx) => (
              <span key={idx} className="inline-block bg-primary-lt text-primary px-3 py-1 rounded-btn text-body-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-4 border-t border-neutral-100">
          <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-btn font-semibold text-body-sm hover:bg-primary-lt transition-colors duration-200">
            Get Directions
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-btn font-semibold text-body-sm hover:opacity-90 transition-opacity duration-200">
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
