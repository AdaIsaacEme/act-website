import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedWrapper from "../components/AnimatedWrapper";
import AnimatedButton from "../components/AnimatedButton";
import AnimatedLink from "../components/AnimatedLink";

const Projects: React.FC = () => {
  const { projects } = useContent();
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const categoryColors: { [key: string]: string } = {
    Infrastructure: "#00A8E8",
    Communications: "#F59E0B",
    Security: "#EF4444",
    Engineering: "#10B981",
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }} className="pt-28 sm:pt-32">
      {/* Header Section with Banner */}
      <ScrollReveal slideDistance={30}>
        <div className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '5rem', marginBottom: '4rem' }}>
          <img
            src="/images/projects/projects-banner.png"
            alt="Our Projects"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Our Projects</h1>
            <p className="text-lg text-white/80">
              Showcasing excellence in execution across Ghana and West Africa.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <ScrollReveal slideDistance={20} delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <AnimatedButton
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full font-semibold transition-all duration-300 btn-lift ${
                  filter === cat
                    ? "bg-[#00A8E8] text-white shadow-lg shadow-[#00A8E8]/50 scale-105"
                    : ""
                }`}
                style={filter !== cat ? { backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' } : undefined}
                hoverScale={1.05}
              >
                {cat}
              </AnimatedButton>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggeredGrid fromDirection="alternating" staggerDelay={0.07} containerDelay={0.2} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="group rounded-xl overflow-hidden hover:border-[#00A8E8] transition-all duration-300 hover:shadow-lg hover:shadow-[#00A8E8]/20 flex flex-col h-full will-change-transform"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#060F1E] will-change-transform">
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
                <div className="absolute inset-0 bg-[#0A1628]/30 group-hover:bg-[#0A1628]/10 transition-all duration-300" />

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: categoryColors[project.category] || "#00A8E8",
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-black mb-2 group-hover:text-[#00A8E8] transition-all duration-300" style={{ color: 'var(--text-heading)' }}>
                  {project.title}
                </h3>
                <p className="text-sm flex-1" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>
              </div>

              {/* Bottom Border Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-[#00A8E8] via-[#0090CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </StaggeredGrid>

        {/* CTA Section */}
        <ScrollReveal slideDistance={25} delay={0.3}>
          <div className="rounded-xl p-12 text-center" style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}>
            <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--text-heading)' }}>More Projects on Request</h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We have completed 100+ projects across Ghana and West Africa. Contact us for a full portfolio of our engineering excellence and proven track record.
            </p>
            <AnimatedLink
              to="/contact"
              className="inline-block px-8 py-3 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#00A8E8]/50 btn-lift"
            >
              Get in Touch →
            </AnimatedLink>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Projects;
