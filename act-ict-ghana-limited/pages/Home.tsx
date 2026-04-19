import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      title: "Engineering",
      desc: "Civil and electrical engineering projects delivered with precision.",
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
    <div className="bg-[#0A1628]">
      <Hero />
      <AwardsTicker />

      {/* Divisions Section - Split Screen */}
      <section className="py-0 bg-[#0A1628]">
        {/* ACT-ICT Division */}
        <ScrollReveal slideDistance={30}>
          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="relative overflow-hidden order-2 md:order-1">
              <AnimatedWrapper hoverScale={1.05}>
                <img
                  src="/images/divisions/act-ict.jpg"
                  alt="ACT-ICT"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatedWrapper>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A1628]" />
            </div>
            <div className="bg-[#0A1628] flex items-center px-8 md:px-16 py-20 order-1 md:order-2">
              <div>
                <span className="text-[#00A8E8] text-sm font-bold tracking-[0.3em] uppercase">Division One</span>
                <h2 className="font-display text-6xl text-white mt-2 mb-6">ACT-ICT</h2>
                <p className="text-[#7A9ABD] text-lg mb-8">
                  Radio & mission-critical communications, network infrastructure, intelligent CCTV, and security systems.
                </p>
                <div className="space-y-2 mb-8 text-white text-sm">
                  <p>✓ TETRA & DMR Radio Systems</p>
                  <p>✓ Network Infrastructure</p>
                  <p>✓ Video Surveillance</p>
                  <p>✓ Fiber Optics</p>
                </div>
                <AnimatedLink
                  to="/act-ict"
                  className="inline-flex items-center text-[#00A8E8] hover:text-[#0090CC] font-semibold transition-all duration-300"
                >
                  Explore Division <ArrowRight className="ml-2" size={18} />
                </AnimatedLink>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ACTGlobal Division */}
        <ScrollReveal slideDistance={30} delay={0.15}>
          <div className="grid md:grid-cols-2 min-h-[500px]">
            <div className="bg-[#060F1E] flex items-center px-8 md:px-16 py-20">
              <div>
                <span className="text-[#F59E0B] text-sm font-bold tracking-[0.3em] uppercase">Division Two</span>
                <h2 className="font-display text-6xl text-white mt-2 mb-6">ACTGlobal</h2>
                <p className="text-[#7A9ABD] text-lg mb-8">
                  Industrial equipment, safety systems, and specialized solutions for demanding environments.
                </p>
                <div className="space-y-2 mb-8 text-white text-sm">
                  <p>✓ Industrial LED Lights</p>
                  <p>✓ Safety Equipment</p>
                  <p>✓ Intrusion Detection</p>
                  <p>✓ Equipment Supply</p>
                </div>
                <AnimatedLink
                  to="/act-global"
                  className="inline-flex items-center text-[#F59E0B] hover:text-amber-400 font-semibold transition-all duration-300"
                >
                  Explore Division <ArrowRight className="ml-2" size={18} />
                </AnimatedLink>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <AnimatedWrapper hoverScale={1.05}>
                <img
                  src="/images/divisions/act-global.jpg"
                  alt="ACTGlobal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </AnimatedWrapper>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A1628]" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <PartnerCarousel />

      {/* Solutions Overview */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal slideDistance={25}>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display text-4xl text-white mb-2">
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

          <StaggeredGrid staggerDelay={0.1} containerDelay={0.2} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSolutions.map((sol) => (
              <div
                key={sol.id}
                className="bg-[#0F2137] p-8 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#00A8E8]/20 transition-all duration-300 border border-[#1E3A5F] hover:border-[#00A8E8] group"
              >
                <div className="w-14 h-14 bg-[#00A8E8]/10 rounded-lg flex items-center justify-center text-[#00A8E8] mb-6 group-hover:bg-[#00A8E8]/20 transition-all duration-300 ring-1 ring-[#00A8E8]/30">
                  {getIcon(sol.iconName)}
                </div>
                <h3 className="font-display text-xl text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-[#7A9ABD] text-sm mb-4 leading-relaxed line-clamp-3">
                  {sol.description}
                </p>
                <AnimatedLink
                  to="/solutions"
                  className="text-[#00A8E8] text-sm font-semibold flex items-center hover:text-[#0090CC] transition-all duration-300"
                >
                  Learn more <ArrowRight className="ml-1" size={14} />
                </AnimatedLink>
              </div>
            ))}
          </StaggeredGrid>

          <ScrollReveal delay={0.3} slideDistance={20}>
            <div className="mt-8 text-center md:hidden">
              <AnimatedButton
                onClick={() => window.location.href = '/solutions'}
                className="inline-flex items-center px-6 py-3 border border-[#1E3A5F] text-[#00A8E8] font-semibold rounded-md bg-[#0F2137] hover:bg-[#1E3A5F] transition-all duration-300 btn-lift"
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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Areas of Expertise
              </h2>
              <p className="text-[#7A9ABD] max-w-2xl mx-auto">
                We combine technical knowledge with industry best practices to
                deliver superior results.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredGrid staggerDelay={0.1} containerDelay={0.15} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 2rem" }}>
        <ScrollReveal slideDistance={25}>
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-display text-4xl text-white">Recent Projects</h2>
            <AnimatedButton
              onClick={() => window.location.href = '/projects'}
              className="hidden md:inline-flex px-6 py-2 border border-[#00A8E8] text-[#00A8E8] font-semibold rounded-full hover:bg-[#00A8E8] hover:text-[#0A1628] transition-all duration-300 btn-lift"
              hoverScale={1.05}
            >
              View More Projects
            </AnimatedButton>
          </div>
        </ScrollReveal>

        <StaggeredGrid staggerDelay={0.12} containerDelay={0.1} className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg aspect-video">
                <AnimatedWrapper hoverScale={1.08} transitionDuration={0.7}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </AnimatedWrapper>
                <div className="absolute inset-0 bg-[#0A1628]/40" />
                <div className="absolute top-4 left-4 bg-[#00A8E8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <h3 className="font-display text-xl text-white group-hover:text-[#00A8E8] transition-all duration-300">
                {project.title}
              </h3>
              <p className="text-[#7A9ABD] text-sm mt-2">
                {project.description}
              </p>
            </div>
          ))}
        </StaggeredGrid>

        <ScrollReveal delay={0.25} slideDistance={20}>
          <div className="mt-8 text-center md:hidden">
            <AnimatedButton
              onClick={() => window.location.href = '/projects'}
              className="inline-block px-6 py-3 bg-[#00A8E8] text-[#0A1628] font-semibold rounded-md shadow-lg hover:bg-[#0090CC] transition-all duration-300 btn-lift"
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
