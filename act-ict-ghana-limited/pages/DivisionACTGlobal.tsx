import React from "react";
import {
  Lightbulb,
  Disc,
  HardHat,
  Truck,
  Sun,
  Navigation,
  Wind,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedWrapper from "../components/AnimatedWrapper";

const DivisionACTGlobal: React.FC = () => {
  const sections = [
    {
      title: "Industrial LED Lights",
      icon: <Lightbulb size={24} />,
      desc: "High-performance industrial LED lighting by Beka Schréder, powering safer and more efficient mining and industrial operations with expert support.",
    },

    {
      title: "Industrial Tires",
      icon: <Disc size={24} />,
      desc: "Heavy-duty tires for earthmovers and industrial vehicles, built to withstand extreme terrain.",
    },
    {
      title: "Solar Lighting Solutions",
      icon: <Sun size={24} />,
      desc: "BEKA Schréder solar-powered trailers and lights — rapidly deployable standalone units for remote mining sites, providing lighting, Wi-Fi, CCTV, and radio in one package.",
    },
    {
      title: "Drone & Aerostat Systems",
      icon: <Navigation size={24} />,
      desc: "RT SkyStar™ tactical aerostat systems and drone services for aerial surveillance, mapping, 3D scanning, and security operations across Ghana and West Africa.",
    },
    {
      title: "Ventilation Solutions",
      icon: <Wind size={24} />,
      desc: "Underground mine ventilation monitoring and control systems ensuring safe air quality and regulatory compliance in tunnel and shaft environments.",
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }} className="pt-28 sm:pt-32">
      {/* Header with Banner */}
      <ScrollReveal slideDistance={30}>
        <div className="relative overflow-hidden py-20 mb-24">
          <img
            src="/images/divisions/act-global-banner.png"
            alt="ACTGlobal Division"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative max-w-7xl mx-auto px-4">
            <span className="text-[#F59E0B] font-bold tracking-[0.3em] uppercase text-sm">
              Division
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mt-2 mb-6 text-white">
              ACTGlobal
            </h1>
            <p className="text-xl max-w-2xl text-white/80">
              From industrial automation to advanced lighting and monitoring
              systems, we bring global technology to your operations.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 pb-20">
        <StaggeredGrid staggerDelay={0.05} containerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {sections.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-xl p-8 hover:border-[#F59E0B] hover:shadow-lg hover:shadow-[#F59E0B]/20 transition-all duration-300 flex flex-col h-full"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              {/* Icon */}
              <div className="p-3 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg w-fit mb-6 ring-1 ring-[#F59E0B]/30 group-hover:ring-[#F59E0B]/50 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl font-black mb-4" style={{ color: 'var(--text-heading)' }}>
                {item.title}
              </h2>

              {/* Description */}
              <p className="leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>

              {/* Image */}
              <div className="h-40 rounded-lg overflow-hidden bg-[#060F1E] ring-1 ring-[#1E3A5F]">
                <AnimatedWrapper hoverScale={1.06} transitionDuration={0.4}>
                  <img
                    src={`/images/divisions/act-global-${idx + 1}.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </AnimatedWrapper>
              </div>

              {/* Hover Border */}
              <div className="h-1 bg-gradient-to-r from-[#F59E0B] via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4" />
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </div>
  );
};

export default DivisionACTGlobal;
