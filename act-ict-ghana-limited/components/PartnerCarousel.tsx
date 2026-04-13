import React, { useRef } from "react";
import { useContent } from "../context/ContentContext";

const PartnerCarousel: React.FC = () => {
  const { partners } = useContent();
  const trackRef = useRef<HTMLDivElement>(null);

  const displayPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <>
      <style>{`
        @keyframes partnerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
      `}</style>

      <div style={{ backgroundColor: "#060F1E", borderTop: "1px solid #1E3A5F", borderBottom: "1px solid #1E3A5F", paddingTop: "48px", paddingBottom: "48px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "16px", paddingRight: "16px", marginBottom: "32px", textAlign: "center" }}>
          <p style={{ color: "#7A9ABD", letterSpacing: "0.3em", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", margin: 0 }}>
            Our Trusted Partners
          </p>
        </div>

        <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: "max-content",
              animation: "partnerScroll 35s linear infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            }}
          >
            {displayPartners.map((partner, index) => (
              <div
                key={`partner-${partner.id}-${index}`}
                style={{
                  flexShrink: 0,
                  width: "200px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "96px",
                    backgroundColor: "#0F2137",
                    border: "1px solid #1E3A5F",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "12px",
                    transition: "border-color 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#00A8E8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1E3A5F";
                  }}
                >
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    style={{
                      maxHeight: "60px",
                      maxWidth: "160px",
                      objectFit: "contain",
                      filter: "brightness(0.8)",
                    }}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = "block";
                      }
                    }}
                  />
                  <span
                    style={{
                      display: "none",
                      color: "#7A9ABD",
                      fontSize: "11px",
                      fontWeight: "700",
                      textAlign: "center",
                      lineHeight: "1.3",
                      padding: "8px",
                    }}
                  >
                    {partner.name}
                  </span>
                </div>

                <span
                  style={{
                    marginTop: "12px",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#7A9ABD",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "168px",
                  }}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCarousel;
