import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const SURFACE_IMG = "/images/mining/surface-mining.webp";
const UNDERGROUND_IMG = "/images/mining/underground-mining.webp";

const SURFACE_SOLUTIONS = [
  "Digital Radio",
  "IP CCTV & AI Video Analytics",
  "WAN / LAN",
  "Surface Proximity & Collision Detection",
  "Personnel & Equipment Tracking",
  "Lamp Room Management",
  "Safety & Fire Detection Systems",
  "Solar Lighting Trailers",
  "Plant and Power Solutions",
];

const UNDERGROUND_SOLUTIONS = [
  "Radio & Leaky Feeder Systems",
  "Fiber Optic & Ethernet Networks",
  "Underground Lighting & Electrical",
  "CCTV & IP Telephony",
  "Personnel Tracking — RFID / UWB",
  "Gas Detection & Safety Monitoring",
  "Cap Lamps & Rescue Packs",
];

// ─── Reusable image component with React-based fallback ─────────────────────
const MiningImage: React.FC<{ src: string; alt: string; eager?: boolean }> = ({
  src,
  alt,
  eager = false,
}) => {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <div
        style={{
          backgroundColor: "#0F2137",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#7A9ABD",
          fontSize: "14px",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      onError={() => setFailed(true)}
    />
  );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const MiningIndustrial: React.FC = () => {

  return (
    <div
      style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}
      className="pt-28 sm:pt-32"
    >
      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "420px",
          overflow: "hidden",
        }}
      >
        <MiningImage src={SURFACE_IMG} alt="" eager />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 60%, rgba(10,22,40,0.3) 100%)",
          }}
        />
        {/* Hero content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            width: "100%",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "white",
                lineHeight: 1,
                margin: "0 0 24px 0",
              }}
            >
              Mining
            </h1>
            <p
              style={{
                color: "#C9D6E6",
                fontSize: "18px",
                maxWidth: "540px",
                lineHeight: "1.6",
                marginBottom: "32px",
              }}
            >
              From surface operations to underground connectivity — we deploy
              where it matters most. Trusted by Ghana's leading mining companies
              since 2011.
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                backgroundColor: "#0077B6",
                color: "white",
                fontWeight: "700",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#005F92")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#0077B6")
              }
            >
              Get a Mining Solutions Assessment →
            </Link>
          </div>
        </div>
      </div>

      {/* ── SURFACE SOLUTIONS ── */}
      <section
        className="py-20"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 2rem" }}
      >
        <ScrollReveal slideDistance={30}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p
                style={{
                  color: "var(--accent-text)",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Surface Operations
              </p>
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "var(--text-heading)",
                  marginTop: "8px",
                  marginBottom: "20px",
                  lineHeight: 1.1,
                }}
              >
                Surface Mining Solutions
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "17px",
                  lineHeight: "1.7",
                  marginBottom: "28px",
                }}
              >
                Comprehensive technology infrastructure for open-pit and surface
                mining.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {SURFACE_SOLUTIONS.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                      fontSize: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent-text)",
                        marginRight: "12px",
                        fontSize: "18px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                position: "relative",
                height: "420px",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid #1E3A5F",
              }}
            >
              <MiningImage src={SURFACE_IMG} alt="Surface Mining Solutions" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── UNDERGROUND SOLUTIONS ── */}
      <section
        style={{ backgroundColor: "var(--bg-secondary)", padding: "80px 0" }}
      >
        <ScrollReveal slideDistance={30} delay={0.15}>
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div
                style={{
                  position: "relative",
                  height: "420px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #1E3A5F",
                  order: 2,
                }}
                className="md:order-1"
              >
                <MiningImage
                  src={UNDERGROUND_IMG}
                  alt="Underground Mining Connectivity"
                />
              </div>

              <div className="md:order-2">
                <p
                  style={{
                    color: "var(--accent-text)",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Underground Operations
                </p>
                <h2
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    color: "var(--text-heading)",
                    marginTop: "8px",
                    marginBottom: "20px",
                    lineHeight: 1.1,
                  }}
                >
                  Underground Mining Solutions
                </h2>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    marginBottom: "28px",
                  }}
                >
                  Specialized in underground connectivity using leaky feeder,
                  fiber optic networks, and wireless systems.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {UNDERGROUND_SOLUTIONS.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "var(--text-primary)",
                        marginBottom: "12px",
                        fontSize: "15px",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent-text)",
                          marginRight: "12px",
                          fontSize: "18px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#0077B6",
          padding: "80px 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "white",
            marginBottom: "16px",
            margin: "0 0 16px 0",
          }}
        >
          Ready to upgrade your mine's technology?
        </h2>
        <p
          style={{
            color: "#ffffff",
            fontSize: "18px",
            marginBottom: "32px",
          }}
        >
          Our engineers have deployed in Ghana's most demanding mining
          environments.
        </p>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "white",
            color: "#0077B6",
            fontWeight: "700",
            padding: "16px 40px",
            textDecoration: "none",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#f0f0f0")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "white")
          }
        >
          Request a Site Assessment →
        </Link>
      </section>
    </div>
  );
};

export default MiningIndustrial;
