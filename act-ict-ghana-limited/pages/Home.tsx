import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PartnerCarousel from '../components/PartnerCarousel';
import { useContent } from '../context/ContentContext';
import { ArrowRight, ShieldCheck, Radio, Server, HardHat, ExternalLink, Zap } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Home: React.FC = () => {
  const { solutions, projects } = useContent();
  const featuredSolutions = solutions.slice(0, 4);
  const recentProjects = projects.slice(0, 3);

  // Dynamic Icon rendering
  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={32} /> : <Zap size={32} />;
  };

  const [expandedExpertise, setExpandedExpertise] = useState<string | null>(null);

  const expertiseItems = [
     { id: 'tech', title: 'IT & Comms', desc: 'Providing state-of-the-art networking and communication backbones.', details: 'We specialize in Fiber Optic cabling, Data Center setup, and Unified Communications.' },
     { id: 'sec', title: 'Security', desc: 'Integrated security systems for critical infrastructure protection.', details: 'CCTV, Access Control, Perimeter Fencing, and Intrusion Detection systems tailored for high-risk environments.' },
     { id: 'eng', title: 'Engineering', desc: 'Civil and electrical engineering projects delivered with precision.', details: 'Tower construction, power substations, and industrial civil works.' },
     { id: 'elec', title: 'Electricals', desc: 'Industrial lighting and power management solutions.', details: 'High-efficiency LED lighting for mines, factories, and streets, plus reliable backup power systems.' }
  ];

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Divisions Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Divisions</h2>
           <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/act-ict" className="group relative overflow-hidden rounded-2xl shadow-xl h-80">
            <img src="https://picsum.photos/800/600?random=20" alt="ACT-ICT" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">ACT-ICT</h3>
              <p className="text-blue-100 mb-4">Specialized in Radio Communications, Network Infrastructure, and Video Surveillance.</p>
              <span className="text-white font-semibold flex items-center group-hover:underline">Explore Division <ArrowRight className="ml-2" size={16} /></span>
            </div>
          </Link>

          <Link to="/act-global" className="group relative overflow-hidden rounded-2xl shadow-xl h-80">
            <img src="https://picsum.photos/800/600?random=21" alt="ACTGlobal" className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">ACTGlobal</h3>
              <p className="text-gray-200 mb-4">Leaders in Industrial LED Lights, Mobile Worklamps, and Safety Equipment.</p>
              <span className="text-white font-semibold flex items-center group-hover:underline">Explore Division <ArrowRight className="ml-2" size={16} /></span>
            </div>
          </Link>
        </div>
      </section>

      <PartnerCarousel />

      {/* Solutions Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Solutions</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
            </div>
            <Link to="/solutions" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
              View All Solutions <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSolutions.map((sol) => (
              <div key={sol.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getIcon(sol.iconName)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sol.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">{sol.description}</p>
                <Link to="/solutions" className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
                  Learn more <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/solutions" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
               View All Solutions
             </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-900 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">We combine technical knowledge with industry best practices to deliver superior results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
             {expertiseItems.map((item) => (
               <div 
                 key={item.id}
                 onClick={() => setExpandedExpertise(expandedExpertise === item.id ? null : item.id)}
                 className={`cursor-pointer bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/20 ${expandedExpertise === item.id ? 'ring-2 ring-blue-400' : ''}`}
               >
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className="text-blue-100 text-sm mb-4">{item.desc}</p>
                 
                 {expandedExpertise === item.id && (
                   <div className="mt-4 pt-4 border-t border-white/20 animate-fade-in text-sm text-white">
                     {item.details}
                     <div className="mt-3">
                        <Link to="/solutions" className="text-blue-300 hover:text-white text-xs uppercase font-bold tracking-wider">See Services &rarr;</Link>
                     </div>
                   </div>
                 )}
                 
                 <div className="flex justify-end mt-2">
                   <div className={`p-1 rounded-full bg-white/10 transition-transform duration-300 ${expandedExpertise === item.id ? 'rotate-90' : ''}`}>
                      <ExternalLink size={16} />
                   </div>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
           <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
           <Link to="/projects" className="hidden md:inline-flex px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition">
             View More Projects
           </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link to="/projects" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700">
             View All Projects
           </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 px-4 text-center">
         <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your infrastructure?</h2>
         <Link to="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1">
           Contact ACT-ICT Today
         </Link>
      </section>
    </div>
  );
};

export default Home;
