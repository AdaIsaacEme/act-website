import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContent } from "../context/ContentContext";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedButton from "../components/AnimatedButton";
import * as LucideIcons from "lucide-react";
import { Zap, ChevronDown } from "lucide-react";
import { Solution, ProductGroup, Product } from "../types";

const Solutions: React.FC = () => {
  const { solutions } = useContent();
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedSolutions, setExpandedSolutions] = useState<Set<string>>(new Set());
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const categories = ["All", "Communications", "Safety", "Security", "Electricals"];

  const filteredSolutions = useMemo(() => {
    return activeCategory === "All"
      ? solutions
      : solutions.filter((sol) => sol.category === activeCategory);
  }, [activeCategory, solutions]);

  // Reset expanded states when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setExpandedSolutions(new Set());
    setExpandedGroups(new Set());
  };

  const toggleSolutionExpanded = (solutionId: string) => {
    const newSet = new Set(expandedSolutions);
    if (newSet.has(solutionId)) {
      newSet.delete(solutionId);
    } else {
      newSet.add(solutionId);
    }
    setExpandedSolutions(newSet);
    setExpandedGroups(new Set()); // Reset product groups when solution expands/collapses
  };

  const toggleGroupExpanded = (groupId: string) => {
    const newSet = new Set(expandedGroups);
    if (newSet.has(groupId)) {
      newSet.delete(groupId);
    } else {
      newSet.add(groupId);
    }
    setExpandedGroups(newSet);
  };

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={40} /> : <Zap size={40} />;
  };

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
                onClick={() => handleCategoryChange(category)}
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

        {/* Solutions Grid with Expandable Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {filteredSolutions.map((sol, idx) => {
            const isExpanded = expandedSolutions.has(sol.id);
            const hasProductGroups = sol.productGroups && sol.productGroups.length > 0;

            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
              >
                {/* Main Solution Card Header */}
                <button
                  onClick={() => toggleSolutionExpanded(sol.id)}
                  className="w-full text-left group hover:bg-[#00A8E8]/5 transition-colors duration-300 p-5 sm:p-6 md:p-8 flex items-start justify-between gap-4"
                  style={{ borderBottom: isExpanded ? '1px solid var(--border-color)' : 'none' }}
                >
                  <div className="flex-1 min-w-0">
                    {/* Icon Circle with Glow */}
                    <div className="relative mb-6 w-fit">
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
                    {sol.description && (
                      <p className="leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                        {sol.description}
                      </p>
                    )}
                  </div>

                  {/* Chevron Icon */}
                  {hasProductGroups && (
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-4"
                    >
                      <ChevronDown size={24} style={{ color: '#00A8E8' }} />
                    </motion.div>
                  )}
                </button>

                {/* Expandable Product Groups Container */}
                <AnimatePresence>
                  {isExpanded && hasProductGroups && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 md:px-8 py-4 space-y-3">
                        {sol.productGroups!.map((group) => {
                          const isGroupExpanded = expandedGroups.has(group.id);
                          return (
                            <ProductGroupAccordion
                              key={group.id}
                              group={group}
                              isExpanded={isGroupExpanded}
                              onToggle={() => toggleGroupExpanded(group.id)}
                            />
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-[#00A8E8] via-[#0090CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

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

// Product Group Accordion Component
interface ProductGroupAccordionProps {
  group: ProductGroup;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProductGroupAccordion: React.FC<ProductGroupAccordionProps> = ({
  group,
  isExpanded,
  onToggle,
}) => {
  return (
    <div
      className="rounded-lg overflow-hidden border transition-colors duration-300"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Group Header */}
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-[#00A8E8]/5 transition-colors duration-300 group/header"
      >
        <h4 className="font-semibold text-sm tracking-wider uppercase" style={{ color: 'var(--text-heading)' }}>
          {group.title}
        </h4>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} style={{ color: '#00A8E8' }} />
        </motion.div>
      </button>

      {/* Products Container */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 space-y-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
              {group.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="flex gap-4 p-3 rounded-lg border transition-all duration-300 hover:border-[#00A8E8]/50 hover:bg-[#00A8E8]/5"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Product Image */}
      {product.image && (
        <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>
      )}

      {/* Product Content */}
      <div className="flex-1 min-w-0">
        <h5 className="font-semibold text-sm mb-2" style={{ color: 'var(--text-heading)' }}>
          {product.title}
        </h5>

        {/* Product Specs */}
        {product.specs && product.specs.length > 0 && (
          <ul className="space-y-1">
            {product.specs.map((spec, idx) => (
              <li
                key={idx}
                className="text-xs flex items-start gap-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className="text-[#00A8E8] font-bold mt-0.5">•</span>
                <span className="leading-tight">{spec.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Solutions;
