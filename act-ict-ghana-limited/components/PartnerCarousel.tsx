import React, { useRef } from "react";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "./ScrollReveal";

const PartnerCarousel: React.FC = () => {
  const { partners } = useContent();
  const trackRef = useRef<HTMLDivElement>(null);

  const displayPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <ScrollReveal slideDistance={20}>
      <>
        <style>{`
          @keyframes partnerScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
        `}</style>

        <div style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)", paddingTop: "clamp(24px, 4vw, 48px)", paddingBottom: "clamp(24px, 4vw, 48px)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "16px", paddingRight: "16px", marginBottom: "32px", textAlign: "center" }}>
            <p style={{ color: "var(--text-secondary)", letterSpacing: "0.3em", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", margin: 0 }}>
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
                    width: "clamp(110px, 18vw, 180px)",
                    paddingLeft: "clamp(8px, 2vw, 16px)",
                    paddingRight: "clamp(8px, 2vw, 16px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "clamp(56px, 10vw, 96px)",
                      backgroundColor: "var(--bg-surface)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "clamp(6px, 1.5vw, 12px)",
                      overflow: "hidden",
                      transition: "border-color 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "#2596be";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-color)";
                    }}
                  >
                    <img
                      src={partner.logoUrl}
                      alt={partner.name}
                      style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
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
                        color: "var(--text-secondary)",
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
                      marginTop: "8px",
                      fontSize: "clamp(9px, 1.5vw, 11px)",
                      fontWeight: "600",
                      color: "var(--text-secondary)",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "100%",
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
    </ScrollReveal>
  );
};

export default PartnerCarousel;
