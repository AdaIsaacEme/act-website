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
    <div className="pt-32 bg-[#0A1628]">
      {/* Header */}
      <ScrollReveal slideDistance={30}>
        <div className="bg-gradient-to-r from-[#0A1628] via-[#1E3A5F] to-[#0A1628] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-display text-6xl font-black text-white mb-4">
              About ACT-ICT Ghana
            </h1>
            <p className="text-xl text-[#7A9ABD] max-w-2xl mx-auto">
              Your trusted partner in delivering world-class technology and
              engineering solutions in West Africa.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 space-y-20">
        {/* Company Background */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal slideDistance={40} direction="right" delay={0} duration={0.55}>
            <div>
              <h2 className="font-display text-4xl font-black text-white mb-6">
                Company Background
              </h2>
              <div className="space-y-4 text-[#7A9ABD] leading-relaxed text-lg">
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
          <ScrollReveal slideDistance={40} direction="left" delay={0.1} duration={0.55}>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#0F2137] ring-1 ring-[#1E3A5F] will-change-transform">
              <AnimatedWrapper hoverScale={1.06} transitionDuration={0.7}>
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
        <StaggeredGrid staggerDelay={0.08} containerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 text-center"
            >
              <div className="font-display text-4xl font-black text-[#00A8E8] mb-2">
                <AnimatedCounter value={stat.number} duration={2} />
              </div>
              <div className="text-[#7A9ABD] font-semibold">{stat.label}</div>
            </div>
          ))}
        </StaggeredGrid>

        {/* Awards Section */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div>
            <h2 className="font-display text-4xl font-black text-white text-center mb-12">
              Awards & Recognition
            </h2>
            <StaggeredGrid staggerDelay={0.1} containerDelay={0.15} className="grid md:grid-cols-2 gap-6">
              {awards.map((award, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F2137] border-l-4 border-[#F59E0B] rounded-xl p-6 hover:shadow-lg hover:shadow-[#F59E0B]/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{award.emoji}</div>
                    <div className="flex-1">
                      <div className="text-[#F59E0B] font-bold text-sm">
                        {award.year}
                      </div>
                      <h3 className="text-white font-semibold mt-1">
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
            <div className="bg-[#0F2137] border border-[#1E3A5F] p-8 rounded-xl">
              <h3 className="font-display text-2xl font-black text-white mb-4">
                Our Mission
              </h3>
              <p className="text-[#7A9ABD] leading-relaxed">
                To provide innovative, reliable, and sustainable technological
                solutions that empower businesses and communities to thrive in a
                connected world.
              </p>
            </div>
            <div className="bg-[#0F2137] border border-[#1E3A5F] p-8 rounded-xl">
              <h3 className="font-display text-2xl font-black text-white mb-4">
                Our Vision
              </h3>
              <p className="text-[#7A9ABD] leading-relaxed">
                To be the premier technology infrastructure provider in West
                Africa, known for engineering excellence and uncompromising
                quality.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Key Clients */}
        <ScrollReveal slideDistance={25} delay={0.2}>
          <div>
            <h2 className="font-display text-4xl font-black text-white text-center mb-12">
              Our Clients
            </h2>
            <div className="text-center">
              <p className="text-[#7A9ABD] mb-12">Among our clients:</p>
              <StaggeredGrid staggerDelay={0.08} containerDelay={0.15} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {clients.map((client, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 h-40 flex items-center justify-center hover:border-[#00A8E8] transition-all duration-300 group"
                  >
                    <AnimatedWrapper hoverScale={1.1}>
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-24 object-contain"
                        onError={(e) => {
                          const img = e.currentTarget;
                          img.style.display = "none";
                          const textFallback = document.createElement("span");
                          textFallback.className =
                            "text-[#7A9ABD] text-sm text-center";
                          textFallback.textContent = client.name;
                          if (img.parentElement) {
                            img.parentElement.appendChild(textFallback);
                          }
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
            <h2 className="font-display text-4xl font-black text-white text-center mb-12">
              Sectors We Serve
            </h2>
            <StaggeredGrid staggerDelay={0.1} containerDelay={0.15} className="grid md:grid-cols-3 gap-6">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-8 text-center hover:border-[#00A8E8] hover:bg-[#0F2137]/80 transition-all duration-300"
                >
                  <h3 className="font-display text-2xl font-black text-white">
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
            <h2 className="font-display text-4xl font-black text-center text-white mb-12">
              Why Choose Us?
            </h2>
            <StaggeredGrid staggerDelay={0.1} containerDelay={0.15} className="grid md:grid-cols-3 gap-8">
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
                  className="bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-8 text-center hover:border-[#00A8E8] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#00A8E8]/10 text-[#00A8E8] rounded-full flex items-center justify-center mb-4 mx-auto ring-1 ring-[#00A8E8]/30">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="font-display text-xl font-black text-white mb-2">
                    {val.title}
                  </h4>
                  <p className="text-[#7A9ABD]">{val.desc}</p>
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
