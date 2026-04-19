import React, { useState } from "react";
import { motion } from "framer-motion";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import StaggeredGrid from "../components/StaggeredGrid";
import AnimatedButton from "../components/AnimatedButton";
import * as LucideIcons from "lucide-react";
import { Zap } from "lucide-react";

const Solutions: React.FC = () => {
  const { solutions } = useContent();
  const [activeCategory, setActiveCategory] = useState("All");

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={40} /> : <Zap size={40} />;
  };

  const categories = [
    "All",
    "Communications",
    "Security",
    "Infrastructure",
    "Electrical",
    "Engineering",
  ];

  const filteredSolutions =
    activeCategory === "All"
      ? solutions
      : solutions.filter((sol) => sol.category === activeCategory);

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '5rem' }} className="pt-28 sm:pt-32">
      {/* Header Section with Banner */}
      <ScrollReveal slideDistance={30}>
        <div className="relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '5rem', marginBottom: '4rem' }}>
          <img
            src="/images/banners/solutions-banner.png"
            alt="Our Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
          <div className="relative max-w-7xl mx-auto px-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white">Our Solutions</h1>
            <p className="text-lg max-w-2xl text-white/80">
              Comprehensive technology and engineering solutions built to meet the
              demanding needs of modern industry.
            </p>
          </div>
        </div>
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <ScrollReveal slideDistance={20} delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
            {categories.map((category) => (
              <AnimatedButton
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 btn-lift ${
                  activeCategory === category
                    ? "bg-[#00A8E8] text-white shadow-lg shadow-[#00A8E8]/50"
                    : ""
                }`}
                style={activeCategory !== category ? { backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' } : undefined}
                hoverScale={1.05}
              >
                {category}
              </AnimatedButton>
            ))}
          </div>
        </ScrollReveal>

        {/* Solutions Grid */}
        <StaggeredGrid fromDirection="alternating" staggerDelay={0.06} containerDelay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {filteredSolutions.map((sol) => (
            <motion.div
              key={sol.id}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              className="group rounded-xl overflow-hidden hover:border-[#00A8E8] hover:shadow-lg hover:shadow-[#00A8E8]/20 transition-all duration-300 flex flex-col h-full will-change-transform"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="p-5 sm:p-6 md:p-8 flex-1 relative">
                {/* Icon Circle with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#00A8E8]/20 rounded-full blur-xl group-hover:bg-[#00A8E8]/40 transition-all duration-300" />
                  <div className="relative w-16 h-16 bg-[#00A8E8]/10 rounded-full flex items-center justify-center text-[#00A8E8] ring-1 ring-[#00A8E8]/30 group-hover:ring-[#00A8E8]/50 transition-all duration-300">
                    {getIcon(sol.iconName)}
                  </div>
                </div>

                {/* Category Badge */}
                {sol.category && (
                  <div className="inline-block mb-3">
                    <span className="text-xs font-bold text-[#00A8E8] tracking-wider uppercase bg-[#00A8E8]/10 px-3 py-1 rounded-full">
                      {sol.category}
                    </span>
                  </div>
                )}

                <h3 className="font-display text-xl sm:text-2xl font-black mb-3" style={{ color: 'var(--text-heading)' }}>
                  {sol.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {sol.description}
                </p>
              </div>

              {/* Hover Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-[#00A8E8] via-[#0090CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.div>
          ))}
        </StaggeredGrid>

        {/* Empty State */}
        {filteredSolutions.length === 0 && (
          <ScrollReveal slideDistance={20}>
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                No solutions found in this category.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  );
};

export default Solutions;
