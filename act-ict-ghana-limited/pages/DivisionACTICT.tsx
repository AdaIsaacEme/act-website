import React from "react";
import { Radio, Server, Video, Check, MapPin, Cable } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedWrapper from "../components/AnimatedWrapper";

const DivisionACTICT: React.FC = () => {
  const sections = [
    {
      id: "radio",
      title: "Radio Communications",
      icon: <Radio size={48} />,
      content:
        "We provide mission-critical communication systems including TETRA, DMR, and analogue radios. As Platinum Partners of Motorola Solutions, we deploy robust networks for mining, public safety, and logistics.",
      features: [
        "Two-way Radio Systems",
        "Wide Area Networks",
        "Underground Comms (Leaky Feeder)",
        "Dispatch Consoles",
      ],
    },
    {
      id: "network",
      title: "Network Infrastructure",
      icon: <Server size={48} />,
      content:
        "Building the backbone of modern enterprise. We specialize in structured cabling, fiber optics, and wireless broadband solutions designed for high availability and speed.",
      features: [
        "Fiber Optic Splicing & Termination",
        "Data Center Cabling",
        "Wireless Point-to-Point",
        "Network Audits",
      ],
    },
    {
      id: "video",
      title: "Video Surveillance",
      icon: <Video size={48} />,
      content:
        "Advanced CCTV and video analytics solutions. We secure your perimeter and assets with high-definition cameras and intelligent monitoring software.",
      features: [
        "IP Camera Systems",
        "Video Analytics (AI)",
        "Control Room Setup",
        "Remote Monitoring",
      ],
    },
    {
      id: "tracking",
      title: "Personnel & Equipment Tracking",
      icon: <MapPin size={48} />,
      content:
        "Real-time tracking of personnel and vehicles using RFID, GPS, and wireless sensor networks — critical for underground mining safety compliance.",
      features: [
        "Underground Personnel Tracking",
        "Vehicle Location Systems",
        "Asset Management",
        "Compliance Reporting",
      ],
    },
    {
      id: "fiber",
      title: "Fiber Optic Networks",
      icon: <Cable size={48} />,
      content:
        "ADSS, mine-shaft, buried and underground fiber cable supply, installation and splicing. Authorised distributors for Fujikura, VIAVI, AFL, Teldor and OPTRAL.",
      features: [
        "Underground Fiber in Mines",
        "OTDR Testing & Certification",
        "Splicing & Termination",
        "Mine Shaft Fiber",
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '2rem' }}>
      {/* Header */}
      <ScrollReveal>
        <div className="text-white py-20 mb-24" style={{ background: 'linear-gradient(to right, var(--bg-surface), var(--bg-elevated), var(--bg-surface))' }}>
          <div className="max-w-7xl mx-auto px-4">
            <span className="text-[#00A8E8] font-bold tracking-[0.3em] uppercase text-sm">
              Division
            </span>
            <h1 className="font-display text-6xl font-black mt-2 mb-6" style={{ color: 'var(--text-heading)' }}>ACT-ICT</h1>
            <p className="text-xl max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
              Delivering the core of connectivity and security. We build the
              systems that keep your business communicating and secure.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 md:space-y-24 pb-20">
        {sections.map((section, idx) => {
          const direction = idx % 2 === 0 ? "right" : "left";
          return (
            <ScrollReveal key={section.id} direction={direction} delay={idx * 0.08} duration={0.6}>
              <div
                className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="inline-block p-4 bg-[#00A8E8]/10 text-[#00A8E8] rounded-2xl mb-6 ring-1 ring-[#00A8E8]/30">
                  {section.icon}
                </div>
                <h2 className="font-display text-4xl font-black mb-4" style={{ color: 'var(--text-heading)' }}>
                  {section.title}
                </h2>
                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {section.content}
                </p>
                <ul className="space-y-3">
                  {section.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center font-medium"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <Check className="text-[#00A8E8] mr-3" size={20} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-[#00A8E8]/20 hover:ring-[#00A8E8]/50 transition-all duration-300">
                  <AnimatedWrapper hoverScale={1.06} transitionDuration={0.4}>
                    <img
                      src={`/images/divisions/act-ict-${idx + 1}.jpg`}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </AnimatedWrapper>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/20 to-transparent" />
                </div>
              </div>
            </div>
          </ScrollReveal>
          );
        })}    
      </div>
    </div>
  );
};

export default DivisionACTICT;
