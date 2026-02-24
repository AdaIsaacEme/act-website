import React from 'react';
import { Lightbulb, Disc, HardHat, Truck } from 'lucide-react';

const DivisionACTGlobal: React.FC = () => {
  const sections = [
    {
      title: 'Industrial LED Lights',
      icon: <Lightbulb className="w-8 h-8" />,
      desc: 'High-performance lighting for mines and heavy industry. Partnered with BEKA Schréder for superior illumination.'
    },
    {
      title: 'LED Mobile Worklamps',
      icon: <Truck className="w-8 h-8" />, // Using Truck as proxy for mobile work equipment
      desc: 'Portable and vehicle-mounted lighting solutions designed for rugged environments and night operations.'
    },
    {
      title: 'Safety Equipment',
      icon: <HardHat className="w-8 h-8" />,
      desc: 'Essential PPE and industrial safety gear ensuring the wellbeing of your workforce in hazardous zones.'
    },
    {
      title: 'Industrial Tires',
      icon: <Disc className="w-8 h-8" />,
      desc: 'Heavy-duty tires for earthmovers and industrial vehicles, built to withstand extreme terrain.'
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gray-400 font-bold tracking-wider uppercase text-sm">Division</span>
          <h1 className="text-5xl font-extrabold mt-2 mb-6">ACTGlobal</h1>
          <p className="text-xl max-w-2xl text-gray-300">
            Specialized industrial procurement and engineering supplies. Powering heavy industry with quality components.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((item, idx) => (
             <div key={idx} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
               <div className="flex items-center space-x-4 mb-6">
                 <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                   {item.icon}
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900">{item.title}</h2>
               </div>
               <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
               <div className="h-48 rounded-lg overflow-hidden bg-gray-100">
                  <img src={`/images/divisions/act-global-${idx + 1}.jpg`} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DivisionACTGlobal;
