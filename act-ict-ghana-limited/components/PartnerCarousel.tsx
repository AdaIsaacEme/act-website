import React from 'react';
import { useContent } from '../context/ContentContext';

const PartnerCarousel: React.FC = () => {
  const { partners } = useContent();

  // Duplicate partners to create seamless loop
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-gray-50 py-10 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
         <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Trusted Partners</h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-[200%] animate-scroll">
          {displayPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="flex-none w-48 md:w-64 px-4 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="h-16 flex items-center justify-center bg-white shadow-sm rounded-lg p-4 w-full">
                 <img src={partner.logoUrl} alt={partner.name} className="max-h-full max-w-full object-contain" />
              </div>
              <span className="mt-2 text-xs font-semibold text-gray-500">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
