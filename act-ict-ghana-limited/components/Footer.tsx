import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Footer: React.FC = () => {
  const { content } = useContent();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
             <div className="flex flex-col mb-6">
                <h2 className="text-3xl font-extrabold text-white tracking-tighter">ACT-ICT</h2>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest -mt-1">GHANA LIMITED</span>
             </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the way in technological innovation. Providing top-tier IT, Security, and Engineering solutions across Ghana and West Africa.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href={content.socials.facebook} className="text-gray-400 hover:text-blue-500 transition"><Facebook size={20} /></a>
              <a href={content.socials.linkedin} className="text-gray-400 hover:text-blue-500 transition"><Linkedin size={20} /></a>
              <a href={content.socials.twitter} className="text-gray-400 hover:text-blue-500 transition"><Twitter size={20} /></a>
              <a href={content.socials.instagram} className="text-gray-400 hover:text-blue-500 transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-500">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/act-ict" className="hover:text-white transition">ACT-ICT Division</Link></li>
              <li><Link to="/act-global" className="hover:text-white transition">ACTGlobal Division</Link></li>
              <li><Link to="/projects" className="hover:text-white transition">Our Projects</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition">Solutions & Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-500">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 mt-1" size={16} />
                <span>{content.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="flex-shrink-0" size={16} />
                <span>{content.contact.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="flex-shrink-0" size={16} />
                <span>{content.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Certifications / Partners text */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-500">Partners</h3>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-800 p-2 rounded flex items-center justify-center text-xs text-center text-gray-400">Motorola Platinum</div>
               <div className="bg-gray-800 p-2 rounded flex items-center justify-center text-xs text-center text-gray-400">CISCO Select</div>
               <div className="bg-gray-800 p-2 rounded flex items-center justify-center text-xs text-center text-gray-400">BEKA Schréder</div>
               <div className="bg-gray-800 p-2 rounded flex items-center justify-center text-xs text-center text-gray-400">GM Afcon</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ACT-ICT Ghana Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
