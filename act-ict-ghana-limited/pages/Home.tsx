import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import AwardsTicker from "../components/AwardsTicker";
import PartnerCarousel from "../components/PartnerCarousel";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedWrapper from "../components/AnimatedWrapper";
import AnimatedLink from "../components/AnimatedLink";
import AnimatedButton from "../components/AnimatedButton";
import {
  ArrowRight,
  ExternalLink,
  Zap,
} from "lucide-react";
import * as LucideIcons from "lucide-react";

const Home: React.FC = () => {
  const { solutions, projects } = useContent();
  const featuredSolutions = solutions.slice(0, 4);
  const recentProjects = projects.slice(0, 3);

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} /> : <Zap size={32} />;
  };

  const [expandedExpertise, setExpandedExpertise] = useState<string | null>(
    null,
  );

  const expertiseItems = [
    {
      id: "tech",
      title: "IT & Comms",
      desc: "Providing state-of-the-art networking and communication backbones.",
      details:
        "We specialize in Fiber Optic cabling, Data Center setup, and Unified Communications.",
    },
    {
      id: "sec",
      title: "Security",
      desc: "Integrated security systems for critical infrastructure protection.",
      details:
        "CCTV, Access Control, Perimeter Fencing, and Intrusion Detection systems tailored for high-risk environments.",
    },
    {
      id: "eng",
      title: "Engineering Services",
      desc: "Shelter in tower construction, tower construction, and specialized engineering.",
      details:
        "Tower construction, power substations, and industrial civil works.",
    },
    {
      id: "elec",
      title: "Electricals",
      desc: "Industrial lighting and power management solutions.",
      details:
        "High-efficiency LED lighting for mines, factories, and streets, plus reliable backup power systems.",
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Hero />
      <AwardsTicker />

      {/* Divisions Section - Split Screen */}
      <section className="py-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* ACT-ICT Division */}
        <div className="grid md:grid-cols-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <ScrollReveal direction="right" delay={0} duration={0.6} distance={40}>
            <div className="relative overflow-hidden order-2 md:order-1">
              <AnimatedWrapper hoverScale={1.06}>
                <img
                  src="/images/divisions/act-ict.jpg"
                  alt="ACT-ICT"
                  className="w-full h-full object-cover will-change-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatedWrapper>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.12} duration={0.6} distance={40}>
            <div className="flex items-center px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 order-1 md:order-2" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div>
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2 mb-4 sm:mb-6" style={{ color: 'var(--text-heading)' }}>ACT-ICT</h2>
                  <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                    Radio & mission-critical communications, network infrastructure, intelligent CCTV, and security systems.
                  </p>
                  <div className="space-y-2 mb-8 text-sm" style={{ color: 'var(--text-primary)' }}>
                    <p>✓ TETRA & DMR Radio Systems</p>
                    <p>✓ Network Infrastructure</p>
                    <p>✓ Video Surveillance</p>
                    <p>✓ Fiber Optics</p>
                  </div>
                  <AnimatedLink
                    to="/act-ict"
                    className="inline-flex items-center text-[#00A8E8] hover:text-[#0090CC] font-semibold transition-all duration-300"
                  >
                    Explore <ArrowRight className="ml-2" size={18} />
                  </AnimatedLink>
                </div>
              </div>
            </ScrollReveal>
        </div>

        {/* ACTGlobal Division */}
        <div className="grid md:grid-cols-2 min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <ScrollReveal direction="left" delay={0} duration={0.6} distance={40}>
            <div className="flex items-center px-6 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mt-2 mb-4 sm:mb-6" style={{ color: 'var(--text-heading)' }}>ACT Global</h2>
                <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Industrial equipment, safety systems, and specialized solutions for demanding environments.
                </p>
                <div className="space-y-2 mb-8 text-sm" style={{ color: 'var(--text-primary)' }}>
                  <p>✓ Industrial LED Lights</p>
                  <p>✓ Safety Equipment</p>
                  <p>✓ Intrusion Detection</p>
                  <p>✓ Equipment Supply</p>
                </div>
                <AnimatedLink
                  to="/act-global"
                  className="inline-flex items-center text-[#F59E0B] hover:text-amber-400 font-semibold transition-all duration-300"
                >
                  Explore <ArrowRight className="ml-2" size={18} />
                </AnimatedLink>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.12} duration={0.6} distance={40}>
            <div className="relative overflow-hidden">
              <AnimatedWrapper hoverScale={1.06}>
                <img
                  src="/images/divisions/act-global.jpg"
                  alt="ACTGlobal"
                  className="w-full h-full object-cover will-change-transform"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatedWrapper>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A1628]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div id="partners" className="scroll-mt-24 md:scroll-mt-28">
        <PartnerCarousel />
      </div>

      {/* Solutions Overview */}
      <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal slideDistance={25}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl mb-2" style={{ color: 'var(--text-heading)' }}>
                  Our Solutions
                </h2>
                <div className="w-20 h-1 bg-[#00A8E8] rounded-full"></div>
              </div>
              <AnimatedLink
                to="/solutions"
                className="hidden md:flex items-center text-[#00A8E8] font-semibold hover:text-[#0090CC] transition-all duration-300"
              >
                View All Solutions <ArrowRight className="ml-2" size={20} />
              </AnimatedLink>
            </div>
          </ScrollReveal>

          <StaggeredGrid fromDirection="alternating" staggerDelay={0.06} containerDelay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {featuredSolutions.map((sol) => (
              <motion.div
                key={sol.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                className="relative group p-8 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#00A8E8]/20 transition-all duration-300 border hover:border-[#00A8E8] will-change-transform"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
              >
                <div className="w-14 h-14 bg-[#00A8E8]/10 rounded-lg flex items-center justify-center text-[#00A8E8] mb-6 group-hover:bg-[#00A8E8]/20 transition-all duration-300 ring-1 ring-[#00A8E8]/30">
                  {getIcon(sol.iconName)}
                </div>
                <h3 className="font-display text-xl mb-3" style={{ color: 'var(--text-heading)' }}>
                  {sol.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
                  {sol.description}
                </p>
                <AnimatedLink
                  to="/solutions"
                  className="text-[#00A8E8] text-sm font-semibold flex items-center hover:text-[#0090CC] transition-all duration-300"
                >
                  Learn more <ArrowRight className="ml-1" size={14} />
                </AnimatedLink>
                <div className="shimmer-overlay rounded-lg" />
              </motion.div>
            ))}
          </StaggeredGrid>

          <ScrollReveal delay={0.3} slideDistance={20}>
            <div className="mt-8 text-center md:hidden">
              <AnimatedButton
                onClick={() => window.location.href = '/solutions'}
                className="inline-flex items-center px-6 py-3 border text-[#00A8E8] font-semibold rounded-md transition-all duration-300 btn-lift"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
                hoverScale={1.05}
              >
                View All Solutions
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#060F1E] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#1E3A5F] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#00A8E8] rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal slideDistance={25}>
            <div className="text-center mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Areas of Expertise
              </h2>
              <p className="text-[#7A9ABD] max-w-2xl mx-auto">
                We combine technical knowledge with industry best practices to
                deliver superior results.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredGrid fromDirection="alternating" staggerDelay={0.07} containerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {expertiseItems.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  setExpandedExpertise(
                    expandedExpertise === item.id ? null : item.id,
                  )
                }
                className={`cursor-pointer bg-[#0F2137] border border-[#1E3A5F] rounded-xl p-6 transition-all duration-300 hover:border-[#00A8E8] hover:bg-[#0F2137]/80 ${
                  expandedExpertise === item.id ? "ring-2 ring-[#00A8E8]" : ""
                }`}
              >
                <h3 className="font-display text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-[#7A9ABD] text-sm mb-4">{item.desc}</p>

                {expandedExpertise === item.id && (
                  <div className="mt-4 pt-4 border-t border-[#1E3A5F] animate-fade-in text-sm text-[#E8EFF8]">
                    {item.details}
                    <div className="mt-3">
                      <AnimatedLink
                        to="/solutions"
                        className="text-[#00A8E8] hover:text-[#0090CC] text-xs uppercase font-bold tracking-wider transition-all duration-300"
                      >
                        See Services &rarr;
                      </AnimatedLink>
                    </div>
                  </div>
                )}

                <div className="flex justify-end mt-2">
                  <div
                    className={`p-1 rounded-full bg-[#1E3A5F] transition-transform duration-300 ${
                      expandedExpertise === item.id ? "rotate-90" : ""
                    }`}
                  >
                    <ExternalLink size={16} />
                  </div>
                </div>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </section>

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "clamp(48px, 8vw, 80px) 1rem", backgroundColor: 'var(--bg-secondary)' }}>
        <ScrollReveal slideDistance={25}>
          <div className="flex justify-between items-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl" style={{ color: 'var(--text-heading)' }}>Recent Projects</h2>
            <AnimatedButton
              onClick={() => window.location.href = '/projects'}
              className="hidden md:inline-flex px-6 py-2 border border-[#00A8E8] text-[#00A8E8] font-semibold rounded-full hover:bg-[#00A8E8] hover:text-white transition-all duration-300 btn-lift"
              hoverScale={1.05}
            >
              View More Projects
            </AnimatedButton>
          </div>
        </ScrollReveal>

        <StaggeredGrid fromDirection="alternating" staggerDelay={0.07} containerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {recentProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
              className="group cursor-pointer will-change-transform"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg aspect-video will-change-transform">
                <AnimatedWrapper hoverScale={1.06} transitionDuration={0.4}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover will-change-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </AnimatedWrapper>
                <div className="absolute inset-0 bg-gray-900/40" />
                <div className="absolute top-4 left-4 bg-[#00A8E8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <h3 className="font-display text-xl group-hover:text-[#00A8E8] transition-all duration-300" style={{ color: 'var(--text-heading)' }}>
                {project.title}
              </h3>
              <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </StaggeredGrid>

        <ScrollReveal delay={0.25} slideDistance={20}>
          <div className="mt-8 text-center md:hidden">
            <AnimatedButton
              onClick={() => window.location.href = '/projects'}
              className="inline-block px-6 py-3 bg-[#00A8E8] text-white font-semibold rounded-md shadow-lg hover:bg-[#0090CC] transition-all duration-300 btn-lift"
              hoverScale={1.08}
            >
              View All Projects
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Home;
