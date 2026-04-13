import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import TrustedPartnersCube from './TrustedPartnersCube';

const Footer: React.FC = () => {
  const { content } = useContent();
  const location = useLocation();
  const isMiningPage = location.pathname === '/mining';
  const isProjectsPage = location.pathname === '/projects';
  const hideCTA = isMiningPage || isProjectsPage;

  return (
    <footer className="bg-[#060F1E] border-t border-[#1E3A5F]">
      {/* CTA Strip - Hidden on mining and projects pages */}
      {!hideCTA && (
        <div className="bg-[#00A8E8] py-8 px-4 text-center">
          <h3 className="font-display text-2xl text-white">Ready to transform your operations?</h3>
          <Link to="/contact" className="mt-4 inline-block bg-white text-[#00A8E8] font-bold px-8 py-3 hover:bg-gray-100 transition-all duration-300">
            Get in Touch →
          </Link>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-12">

          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="/images/logo/act-ict-logo.png"
              alt="ACT-ICT Ghana Limited"
              className="h-10 w-auto object-contain mb-4"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                if (img.parentElement) {
                  const fallback = document.createElement("div");
                  fallback.className = "flex flex-col mb-4";
                  fallback.innerHTML =
                    '<h2 class="font-display text-3xl font-extrabold text-white tracking-tighter">ACT-ICT</h2><span class="text-[10px] text-[#7A9ABD] font-semibold tracking-widest -mt-1">GHANA LIMITED</span>';
                  img.parentElement.insertBefore(fallback, img.nextSibling);
                }
              }}
            />
            <p className="text-[#7A9ABD] text-sm leading-relaxed">
              Leading the way in technological innovation. Providing top-tier IT, Security, and Engineering solutions across Ghana and West Africa.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href={content.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-[#7A9ABD] hover:text-[#00A8E8] transition-all duration-300"><Facebook size={20} /></a>
              <a href={content.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#7A9ABD] hover:text-[#00A8E8] transition-all duration-300"><Linkedin size={20} /></a>
              <a href={content.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#7A9ABD] hover:text-[#00A8E8] transition-all duration-300"><Twitter size={20} /></a>
              <a href={content.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#7A9ABD] hover:text-[#00A8E8] transition-all duration-300"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-[#00A8E8]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-[#7A9ABD]">
              <li><Link to="/about" className="hover:text-white transition-all duration-300">About Us</Link></li>
              <li><Link to="/act-ict" className="hover:text-white transition-all duration-300">ACT-ICT Division</Link></li>
              <li><Link to="/act-global" className="hover:text-white transition-all duration-300">ACTGlobal Division</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-all duration-300">Our Projects</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-all duration-300">Solutions & Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-all duration-300">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-[#00A8E8]">Contact Us</h3>
            <ul className="space-y-4 text-sm text-[#7A9ABD]">
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

          {/* Trusted Partners */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-[#F59E0B]">Trusted Partners</h3>
            <p className="text-[#7A9ABD] text-sm mb-6">Official technology partners across global brands</p>
            <TrustedPartnersCube />
          </div>
        </div>

        <div className="border-t border-[#1E3A5F] py-4 text-center text-[#7A9ABD] text-xs">
          <p>&copy; {new Date().getFullYear()} ACT-ICT Ghana Limited. All rights reserved. | Cantonments, Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
