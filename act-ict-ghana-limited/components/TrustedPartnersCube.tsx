import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';

const TrustedPartnersCube: React.FC = () => {
  const { partners } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
    <div
      style={{
        perspective: '800px',
        width: '120px',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${currentIndex * 90}deg)`,
          transition: 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        }}
      >
        {Array.from({ length: Math.min(4, partners.length) }).map((_, faceIndex) => {
          const partnerIndex = (currentIndex + faceIndex) % partners.length;
          const partner = partners[partnerIndex];
          const faceRotation = faceIndex * 90;
          const distance = 60;

          return (
            <div
              key={faceIndex}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '120px',
                height: '70px',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${faceRotation}deg) translateZ(${distance}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 168, 232, 0.05)',
                border: '1px solid rgba(0, 168, 232, 0.2)',
                borderRadius: '8px',
                padding: '8px',
              }}
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  opacity: 0.8,
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector(
                    '.partner-fallback'
                  ) as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                className="partner-fallback"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00A8E8',
                  fontSize: '9px',
                  fontWeight: '600',
                  textAlign: 'center',
                  maxWidth: '100%',
                  padding: '4px',
                }}
              >
                {partner.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default TrustedPartnersCube;
