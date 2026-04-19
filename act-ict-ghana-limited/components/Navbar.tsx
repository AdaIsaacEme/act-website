import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import AnimatedButton from "./AnimatedButton";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-[#00A8E8] font-bold"
      : isDark
        ? "text-white hover:text-[#00A8E8]"
        : "text-gray-800 hover:text-[#00A8E8]";

  const navBg = isDark ? 'bg-[#0A1628]/95 border-[#1E3A5F]' : 'bg-white/95 border-gray-200';
  const linkColor = isDark ? 'text-white hover:text-[#00A8E8]' : 'text-gray-800 hover:text-[#00A8E8]';
  const topBarBg = isDark ? 'bg-[#060F1E] text-[#7A9ABD] border-[#1E3A5F]' : 'bg-gray-100 text-gray-600 border-gray-200';

  return (
    <nav className={`fixed w-full z-50 ${navBg} backdrop-blur-md border-b transition-all duration-300`}>
      {/* Top Bar */}
      <div className={`${topBarBg} text-xs py-2 hidden md:block border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+233577700555" className="flex items-center space-x-2 hover:text-[#00A8E8] transition-all duration-300">
              <Phone size={14} /> <span>+233 577 700 555</span>
            </a>
            <a href="mailto:office@act-ict.com.gh" className="flex items-center space-x-2 hover:text-[#00A8E8] transition-all duration-300">
              <Mail size={14} /> <span className="overflow-hidden text-ellipsis">office@act-ict.com.gh</span>
            </a>
          </div>
          <div className="flex space-x-4"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/images/logo/act-ict-logo.png"
              alt="ACT-ICT Ghana Limited"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
                if (img.parentElement) {
                  const fallback = document.createElement("div");
                  fallback.className = "flex flex-col";
                  fallback.innerHTML =
                    '<h1 class="text-2xl font-extrabold text-white tracking-tighter">ACT-ICT</h1><span class="text-[10px] text-[#7A9ABD] font-semibold tracking-widest -mt-1">GHANA LIMITED</span>';
                  img.parentElement.appendChild(fallback);
                }
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <AnimatedLink
              to="/"
              className={`transition-all duration-300 ${isActive("/")}`}
            >
              Home
            </AnimatedLink>
            <AnimatedLink
              to="/about"
              className={`transition-all duration-300 ${isActive("/about")}`}
            >
              About Us
            </AnimatedLink>

            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition-all duration-300 ${
                  isActive("/act-ict") || isActive("/act-global")
                    ? "text-[#00A8E8] font-bold"
                    : !isDark
                      ? "text-gray-800 hover:text-[#00A8E8]"
                      : "text-white hover:text-[#00A8E8]"
                }`}
              >
                <span>Divisions</span>
                <ChevronDown size={16} />
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border ${isDark ? "bg-[#0F2137] border-[#1E3A5F]" : "bg-white border-gray-200"}`}>
                <Link
                  to="/act-ict"
                  className={`block px-4 py-2 text-sm transition-all duration-300 ${isDark ? "text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F]" : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-100"}`}
                >
                  ACT-ICT
                </Link>
                <Link
                  to="/act-global"
                  className={`block px-4 py-2 text-sm transition-all duration-300 ${isDark ? "text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F]" : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-100"}`}
                >
                  ACTGlobal
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-all duration-300 ${linkColor}`}>
                <span>Industries</span>
                <ChevronDown size={16} />
              </button>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border ${isDark ? "bg-[#0F2137] border-[#1E3A5F]" : "bg-white border-gray-200"}`}>
                <Link
                  to="/mining"
                  className={`block px-4 py-2 text-sm transition-all duration-300 ${isDark ? "text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F]" : "text-gray-700 hover:text-[#00A8E8] hover:bg-gray-100"}`}
                >
                  Mining & Industrial
                </Link>
              </div>
            </div>

            <AnimatedLink
              to="/solutions"
              className={`transition-all duration-300 ${isActive("/solutions")}`}
            >
              Solutions
            </AnimatedLink>
            <AnimatedLink
              to="/projects"
              className={`transition-all duration-300 ${isActive("/projects")}`}
            >
              Projects
            </AnimatedLink>
            <AnimatedLink
              to="/contact"
              className={`transition-all duration-300 ${isActive("/contact")}`}
            >
              Contact
            </AnimatedLink>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
                isDark ? 'bg-[#1E3A5F]' : 'bg-gray-200'
              }`}
              title="Toggle theme"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${
                isDark 
                  ? 'translate-x-6 bg-[#00A8E8]' 
                  : 'translate-x-0 bg-white shadow'
              }`}>
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>

            <AnimatedButton
              onClick={() => window.location.href = '/contact'}
              className="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-3 sm:px-6 py-1.5 sm:py-2 text-sm transition-all duration-300 shadow-lg btn-lift rounded-lg"
              hoverScale={1.05}
            >
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
                isDark ? 'bg-[#1E3A5F]' : 'bg-gray-200'
              }`}
              title="Toggle theme"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-all duration-300 flex items-center justify-center text-xs ${
                isDark 
                  ? 'translate-x-6 bg-[#00A8E8]' 
                  : 'translate-x-0 bg-white shadow'
              }`}>
                {isDark ? '🌙' : '☀️'}
              </span>
            </button>

            <button
              onClick={toggleMenu}
              className={`transition-all duration-300 focus:outline-none ${linkColor}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={toggleMenu}
            style={{
              top: "calc(var(--navbar-height, 80px) + var(--top-bar-height, 32px))",
            }}
          />
          {/* Mobile menu */}
          <div className={`md:hidden absolute w-full shadow-2xl z-50 max-h-[calc(100vh-120px)] overflow-y-auto border-t transition-all duration-300 ${isDark ? "bg-[#0A1628] border-[#1E3A5F]" : "bg-white border-gray-200"}`}>
            <div className="px-4 pt-4 pb-6 space-y-1">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/' 
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10' 
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/about'
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                About Us
              </Link>

              {/* Divisions Accordion */}
              <div className={`rounded-lg overflow-hidden ${isDark ? 'bg-[#0F1D2F]' : 'bg-gray-50'}`}>
                <button
                  onClick={() => setDivisionOpen(!divisionOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3.5 text-base font-medium transition-all duration-200 ${
                    (location.pathname === '/act-ict' || location.pathname === '/act-global')
                      ? 'text-[#00A8E8]'
                      : isDark ? "text-white hover:text-[#00A8E8]" : "text-gray-800 hover:text-[#00A8E8]"
                  }`}
                >
                  <span>Divisions</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 ${divisionOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {divisionOpen && (
                  <div className={`pb-2 space-y-0.5 ${isDark ? 'border-t border-[#1E3A5F]/50' : 'border-t border-gray-200'}`}>
                    <Link
                      to="/act-ict"
                      onClick={toggleMenu}
                      className={`flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all duration-200 ${
                        location.pathname === '/act-ict'
                          ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                          : isDark ? "text-[#7A9ABD] hover:text-[#00A8E8] hover:bg-[#1E3A5F]/40" : "text-gray-600 hover:text-[#00A8E8] hover:bg-gray-100"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E8] flex-shrink-0" />
                      ACT-ICT
                    </Link>
                    <Link
                      to="/act-global"
                      onClick={toggleMenu}
                      className={`flex items-center gap-3 pl-8 pr-4 py-3 text-sm font-medium transition-all duration-200 ${
                        location.pathname === '/act-global'
                          ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                          : isDark ? "text-[#7A9ABD] hover:text-[#00A8E8] hover:bg-[#1E3A5F]/40" : "text-gray-600 hover:text-[#00A8E8] hover:bg-gray-100"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] flex-shrink-0" />
                      ACTGlobal
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries */}
              <Link
                to="/mining"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/mining'
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                Mining & Industrial
              </Link>

              <Link
                to="/solutions"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/solutions'
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/projects'
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === '/contact'
                    ? 'text-[#00A8E8] bg-[#00A8E8]/10'
                    : isDark ? "text-white hover:bg-[#1E3A5F]/60 hover:text-[#00A8E8]" : "text-gray-800 hover:bg-gray-100 hover:text-[#00A8E8]"
                }`}
              >
                Contact
              </Link>

              {/* Divider */}
              <div className={`my-3 border-t ${isDark ? 'border-[#1E3A5F]' : 'border-gray-200'}`} />

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-center w-full px-4 py-3.5 rounded-lg text-base font-semibold bg-[#00A8E8] text-white hover:bg-[#0090CC] transition-all duration-200 shadow-lg shadow-[#00A8E8]/20"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
