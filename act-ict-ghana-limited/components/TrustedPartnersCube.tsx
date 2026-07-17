import React from 'react';
import { useContent } from '../context/ContentContext';

const TrustedPartnersCube: React.FC = () => {
  const { partners } = useContent();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {partners.map((partner, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '24px',
          }}
        >
          <img
            src={partner.logoUrl}
            alt={partner.name}
            style={{
              maxHeight: '100%',
              maxWidth: '80px',
              objectFit: 'contain',
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
              whiteSpace: 'nowrap',
            }}
          >
            {partner.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustedPartnersCube;
