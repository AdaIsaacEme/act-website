import React from "react";
import { CheckCircle, Award } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedWrapper from "../components/AnimatedWrapper";
import AnimatedCounter from "../components/AnimatedCounter";

const About: React.FC = () => {
  const awards = [
    {
      year: "2017",
      title: "Telecom Engineering Company of the Year",
      emoji: "🏆",
    },
    {
      year: "2019",
      title: "Ghana's Most Outstanding ICT Solutions – tmt Magazine",
      emoji: "🥇",
    },
    { year: "2019", title: "Ones to Watch – CV Magazine", emoji: "🏅" },
    {
      year: "2021",
      title: "ICT Solutions Provider of the Year – African Excellence Awards",
      emoji: "🌟",
    },
  ];

  const stats = [
    { number: "2011", label: "Founded" },
    { number: "25+", label: "Engineers" },
    { number: "10", label: "Service Vans" },
    { number: "4", label: "Industry Awards" },
  ];

  const clients = [
    { name: "Newmont Ghana", logo: "/images/logo/newmount-logo.png" },
    { name: "AngloGold Ashanti", logo: "/images/logo/aga.png" },
    { name: "Asanko Gold", logo: "/images/logo/asanko-logo.png" },
    { name: "Golden Star Resources", logo: "/images/logo/gsr-logo.png" },
    {
      name: "Ghana National Gas Company",
      logo: "/images/logo/ghana-national-gas-company.png",
    },
    {
      name: "Volta River Authority",
      logo: "/images/logo/volta-river-authority.png",
    },
    {
      name: "Ghana Ports & Harbours Authority",
      logo: "/images/logo/ghana-ports-harbours-authority.png",
    },
    { name: "Seadrill", logo: "/images/logo/seadrill.png" },
    {
      name: "University of Ghana Medical Centre",
      logo: "/images/logo/ugmc.png",
    },
    { name: "G4S", logo: "/images/logo/g4s.png" },
    { name: "Perseus Mining", logo: "/images/logo/perseus-logo.png" },
  ];

  const sectors = [
    "Mining",
    "Oil & Gas",
    "Healthcare",
    "Military & Government",
    "Commercial & Industrial",
    "Public Safety",
  ];

  return (
    <div className="pt-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header with Banner */}
      <ScrollReveal slideDistance={30}>
        <div className="relative overflow-hidden py-20">
          <img
            src="/images/about/about-banner.png"
            alt="About ACT-ICT Ghana"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-white">
              About ACT-ICT Ghana
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-white/80">
              Your trusted partner in delivering world-class technology and
              engineering solutions in West Africa.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-20">
        {/* Company Background */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal direction="right" delay={0} duration={0.35} distance={40}>
            <div>
              <h2 className="font-display text-4xl font-black mb-6" style={{ color: 'var(--text-heading)' }}>
                Company Background
              </h2>
              <div className="space-y-4 leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  ACT-ICT Ghana Limited was established with a clear mandate: to
                  bridge the technological gap in the region by providing superior
                  Engineering, IT, Security, and Electrical solutions.
                </p>
                <p>
                  Over the years, we have grown into a powerhouse of innovation,
                  partnering with global giants like Motorola Solutions, CISCO,
                  and BEKA Schréder to bring state-of-the-art infrastructure to
                  Ghana. Our commitment to quality and excellence has earned us
                  the trust of major government and private sector entities.
                </p>
                <p>
                  From complex radio communication networks in remote mining areas
                  to sophisticated security surveillance in urban centers, ACT-ICT
                  delivers reliability where it matters most.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.08} duration={0.35} distance={40}>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#0F2137] ring-1 ring-[#1E3A5F] will-change-transform">
              <AnimatedWrapper hoverScale={1.06} transitionDuration={0.4}>
                <img
                  src="/images/about/cisco-router-hack.jpg"
                  alt="Strategic Partnership"
                  className="absolute inset-0 w-full h-full object-cover will-change-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatedWrapper>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <StaggeredGrid fromDirection="alternating" staggerDelay={0.08} containerDelay={0.15} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="font-display text-4xl font-black text-[#00A8E8] mb-2">
                <AnimatedCounter value={stat.number} duration={1.2} />
              </div>
              <div className="font-semibold" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
            </div>
          ))}
        </StaggeredGrid>

        {/* Awards Section */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12" style={{ color: 'var(--text-heading)' }}>
              Awards & Recognition
            </h2>
            <StaggeredGrid staggerDelay={0.05} containerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-[#F59E0B] rounded-xl p-6 hover:shadow-lg hover:shadow-[#F59E0B]/20 transition-all duration-300"
                  style={{ backgroundColor: 'var(--bg-surface)' }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{award.emoji}</div>
                    <div className="flex-1">
                      <div className="text-[#F59E0B] font-bold text-sm">
                        {award.year}
                      </div>
                      <h3 className="font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>
                        {award.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </ScrollReveal>

        {/* Mission & Vision */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-8 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <h3 className="font-display text-2xl font-black mb-4" style={{ color: 'var(--text-heading)' }}>
                Our Mission
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To provide innovative, reliable, and sustainable technological
                solutions that empower businesses and communities to thrive in a
                connected world.
              </p>
            </div>
            <div className="border p-8 rounded-xl" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
              <h3 className="font-display text-2xl font-black mb-4" style={{ color: 'var(--text-heading)' }}>
                Our Vision
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                To be the premier technology infrastructure provider in West
                Africa, known for engineering excellence and uncompromising
                quality.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Key Clients */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div style={{ backgroundColor: '#0F2137', borderRadius: '16px', padding: 'clamp(40px, 8vw, 80px) clamp(16px, 4vw, 32px)' }}>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-4" style={{ color: '#ffffff' }}>
              Our Clients
            </h2>
            <div className="text-center">
              <p className="mb-12" style={{ color: '#7A9ABD' }}>Among our clients:</p>
              <StaggeredGrid staggerDelay={0.04} containerDelay={0.15} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {clients.map((client, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: '#1E3A5F',
                      border: '1px solid #2a4f7a',
                      borderRadius: '12px',
                      padding: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '80px',
                    }}
                  >
                    <AnimatedWrapper hoverScale={1.1}>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="client-logo"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = "none";
                          const span = document.createElement('span');
                          span.textContent = client.name;
                          span.style.color = '#7A9ABD';
                          span.style.fontSize = '13px';
                          span.style.textAlign = 'center';
                          span.style.fontWeight = '600';
                          img.parentElement?.appendChild(span);
                        }}
                      />
                    </AnimatedWrapper>
                  </div>
                ))}
              </StaggeredGrid>
            </div>
          </div>
        </ScrollReveal>

        {/* Sectors */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12" style={{ color: 'var(--text-heading)' }}>
              Sectors We Serve
            </h2>
            <StaggeredGrid staggerDelay={0.05} containerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-8 text-center hover:border-[#00A8E8] transition-all duration-300"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
                >
                  <h3 className="font-display text-2xl font-black" style={{ color: 'var(--text-heading)' }}>
                    {sector}
                  </h3>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </ScrollReveal>

        {/* Why Choose Us */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-12" style={{ color: 'var(--text-heading)' }}>
              Why Choose Us?
            </h2>
            <StaggeredGrid staggerDelay={0.05} containerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Certified Experts",
                  desc: "Our team consists of certified engineers and technicians trained by our global partners.",
                },
                {
                  title: "Global Partnerships",
                  desc: "Direct access to world-class technology through platinum partnerships.",
                },
                {
                  title: "Proven Track Record",
                  desc: "Successfully delivered complex projects for top-tier clients across various industries.",
                },
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="border rounded-xl p-8 text-center hover:border-[#00A8E8] transition-all duration-300"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
                >
                  <div className="w-12 h-12 bg-[#00A8E8]/10 text-[#00A8E8] rounded-full flex items-center justify-center mb-4 mx-auto ring-1 ring-[#00A8E8]/30">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-display text-xl font-black mb-2" style={{ color: 'var(--text-heading)' }}>
                    {val.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{val.desc}</p>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
