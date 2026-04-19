import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedLink from "../components/AnimatedLink";

const SURFACE_IMG = "/images/mining/surface-mining.jpg";
const UNDERGROUND_IMG = "/images/mining/underground-mining.jpg";

// ─── Mining client logos — ACTUAL filenames on disk ───────────────────────
const MINING_CLIENTS = [
  {
    name: "Newmont Ghana",
    logo: "/images/logo/newmount-logo.png",
    projects: "SkyStar™ Aerostat, Radio Networks",
  },
  {
    name: "AngloGold Ashanti",
    logo: "/images/logo/aga-logo.png",
    projects: "Leaky Feeder, Underground CCTV",
  },
  {
    name: "Asanko Gold",
    logo: "/images/logo/asanko-logo.png",
    projects: "CCTV, Network Infrastructure",
  },
  {
    name: "Golden Star Resources",
    logo: "/images/logo/gsr-logo.png",
    projects: "CCTV — Prestea & Wassa",
  },
  {
    name: "Perseus Mining",
    logo: "/images/logo/perseus-logo.png",
    projects: "Perimeter Intrusion Detection",
  },
];

const SURFACE_SOLUTIONS = [
  "Digital Radio — TETRA, DMR, MotoTrbo",
  "IP CCTV & AI Video Analytics",
  "WAN / LAN / Fiber Optic Networks",
  "Surface Proximity & Collision Detection",
  "Personnel & Equipment Tracking",
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
  "Ventilation Control Systems",
  "Cap Lamps & Rescue Packs",
];

// ─── Reusable image component with React-based fallback ─────────────────────
const MiningImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
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
      style={{ objectFit: "cover", width: "100%", height: "100%" }}
      onError={() => setFailed(true)}
    />
  );
};

// ─── Client logo with React-based text fallback ────────────────────────────
const ClientLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [failed, setFailed] = React.useState(false);

  return (
    <div
      style={{
        height: "64px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "12px",
      }}
    >
      {failed ? (
        <span
          style={{
            color: "#7A9ABD",
            fontWeight: "700",
            fontSize: "13px",
            textAlign: "center",
            lineHeight: "1.3",
            padding: "8px",
          }}
        >
          {alt}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{
            maxHeight: "56px",
            maxWidth: "140px",
            objectFit: "contain",
            filter: "brightness(0.75)",
            transition: "filter 0.3s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "brightness(1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "brightness(0.75)";
          }}
        />
      )}
    </div>
  );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
const MiningIndustrial: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#0A1628", minHeight: "100vh" }}
      className="pt-20"
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
        <MiningImage src={SURFACE_IMG} alt="Mining Operations" />
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
            <p
              style={{
                color: "#00A8E8",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                margin: "0 0 12px 0",
              }}
            >
              Industries
            </p>
            <h1
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "white",
                lineHeight: 1,
                margin: "0 0 24px 0",
              }}
            >
              MINING &<br />
              INDUSTRIAL
            </h1>
            <p
              style={{
                color: "#7A9ABD",
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
                backgroundColor: "#00A8E8",
                color: "white",
                fontWeight: "700",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0090CC")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00A8E8")
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
                  color: "#00A8E8",
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
                  color: "white",
                  marginTop: "8px",
                  marginBottom: "20px",
                  lineHeight: 1.1,
                }}
              >
                Surface Mining Solutions
              </h2>
              <p
                style={{
                  color: "#7A9ABD",
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
                      color: "white",
                      marginBottom: "12px",
                      fontSize: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#00A8E8",
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
      <section style={{ backgroundColor: "#060F1E", padding: "80px 0" }}>
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
                    color: "#00A8E8",
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
                    color: "white",
                    marginTop: "8px",
                    marginBottom: "20px",
                    lineHeight: 1.1,
                  }}
                >
                  Underground Mining Solutions
                </h2>
                <p
                  style={{
                    color: "#7A9ABD",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    marginBottom: "28px",
                  }}
                >
                  Specialist underground connectivity using leaky feeder, fiber
                  optic networks, and wireless systems.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {UNDERGROUND_SOLUTIONS.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: "12px",
                        fontSize: "15px",
                      }}
                    >
                      <span
                        style={{
                          color: "#00A8E8",
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

      {/* ── MINING CLIENTS ── */}
      <section
        style={{
          padding: "80px 0",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              color: "#00A8E8",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Trusted By
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "white",
              marginTop: "8px",
              marginBottom: "12px",
            }}
          >
            Our Mining Clients
          </h2>
          <p
            style={{
              color: "#7A9ABD",
              fontSize: "16px",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Ghana and West Africa's leading mining companies trust ACT-ICT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {MINING_CLIENTS.map((client, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#0F2137",
                border: "1px solid #1E3A5F",
                borderRadius: "12px",
                padding: "24px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#00A8E8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#1E3A5F";
              }}
            >
              <ClientLogo src={client.logo} alt={client.name} />
              <h4
                style={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "14px",
                  margin: "0 0 6px 0",
                }}
              >
                {client.name}
              </h4>
              <p
                style={{
                  color: "#7A9ABD",
                  fontSize: "12px",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {client.projects}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          backgroundColor: "#00A8E8",
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
            color: "rgba(255,255,255,0.85)",
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
            color: "#00A8E8",
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
