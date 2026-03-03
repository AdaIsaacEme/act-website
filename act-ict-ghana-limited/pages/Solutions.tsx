import React from "react";
import { useContent } from "../context/ContentContext";
import * as LucideIcons from "lucide-react";
import { Zap } from "lucide-react";

const Solutions: React.FC = () => {
  const { solutions } = useContent();

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={40} /> : <Zap size={40} />;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Comprehensive technology and engineering solutions built to meet the
            demanding needs of modern industry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="p-8 flex-1">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                  {getIcon(sol.iconName)}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {sol.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
