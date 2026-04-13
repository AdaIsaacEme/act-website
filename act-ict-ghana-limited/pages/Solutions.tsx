import React, { useState } from "react";
import { useContent } from "../context/ContentContext";
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
    <div className="pt-32 min-h-screen bg-[#0A1628] pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#0A1628] via-[#1E3A5F] to-[#0A1628] text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Our Solutions</h1>
          <p className="text-[#7A9ABD] text-lg max-w-2xl">
            Comprehensive technology and engineering solutions built to meet the
            demanding needs of modern industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#00A8E8] text-white shadow-lg shadow-[#00A8E8]/50"
                  : "bg-[#0F2137] text-[#7A9ABD] border border-[#1E3A5F] hover:border-[#00A8E8] hover:text-[#00A8E8]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.id}
              className="group bg-[#0F2137] rounded-xl overflow-hidden border border-[#1E3A5F] hover:border-[#00A8E8] hover:shadow-lg hover:shadow-[#00A8E8]/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-8 flex-1 relative">
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

                <h3 className="font-display text-2xl font-black text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-[#7A9ABD] leading-relaxed">
                  {sol.description}
                </p>
              </div>

              {/* Hover Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-[#00A8E8] via-[#0090CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#7A9ABD] text-lg">
              No solutions found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solutions;
