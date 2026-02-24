import React from "react";
import { useContent } from "../context/ContentContext";

const PartnerCarousel: React.FC = () => {
  const { partners } = useContent();

  // Duplicate partners to create seamless loop
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <div className="bg-gray-50 py-10 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          Our Trusted Partners
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-[200%] animate-scroll">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-none w-72 md:w-80 px-6 flex flex-col items-center justify-center transition duration-300 hover:scale-105"
            >
              <div className="h-32 flex items-center justify-center bg-white shadow-lg rounded-lg p-6 w-full hover:shadow-xl transition">
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <span className="mt-3 text-sm font-semibold text-gray-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCarousel;
