import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import AnimatedLink from "./AnimatedLink";
import AnimatedButton from "./AnimatedButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) =>
    location.pathname === path
      ? "text-[#00A8E8] font-bold"
      : "text-white hover:text-[#00A8E8]";

  return (
    <nav className="fixed w-full z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-[#1E3A5F] transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#060F1E] text-[#7A9ABD] text-xs py-2 hidden md:block border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+233577700555" className="flex items-center space-x-2 hover:text-[#00A8E8] transition-all duration-300">
              <Phone size={14} /> <span>+233 577 700 555</span>
            </a>
            <a href="mailto:office@act-ict.com.gh" className="flex items-center space-x-2 hover:text-[#00A8E8] transition-all duration-300">
              <Mail size={14} /> <span>office@act-ict.com.gh</span>
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
              className="h-12 w-auto object-contain"
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
          <div className="hidden md:flex space-x-8 items-center">
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
                    : "text-white hover:text-[#00A8E8]"
                }`}
              >
                <span>Divisions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-[#0F2137] shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border border-[#1E3A5F]">
                <AnimatedLink
                  to="/act-ict"
                  className="block px-4 py-2 text-sm text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F] transition-all duration-300"
                >
                  ACT-ICT
                </AnimatedLink>
                <AnimatedLink
                  to="/act-global"
                  className="block px-4 py-2 text-sm text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F] transition-all duration-300"
                >
                  ACTGlobal
                </AnimatedLink>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-[#00A8E8] transition-all duration-300">
                <span>Industries</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-[#0F2137] shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50 border border-[#1E3A5F]">
                <AnimatedLink
                  to="/mining"
                  className="block px-4 py-2 text-sm text-white hover:text-[#00A8E8] hover:bg-[#1E3A5F] transition-all duration-300"
                >
                  Mining & Industrial
                </AnimatedLink>
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

            <AnimatedButton
              onClick={() => window.location.href = '/contact'}
              className="bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-6 py-2 transition-all duration-300 shadow-lg btn-lift"
              hoverScale={1.05}
            >
              Get Quote
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#00A8E8] focus:outline-none transition-all duration-300"
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
          <div className="md:hidden bg-[#0A1628] border-t border-[#1E3A5F] absolute w-full shadow-lg z-50 max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <AnimatedLink
                to="/"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                Home
              </AnimatedLink>
              <AnimatedLink
                to="/about"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                About Us
              </AnimatedLink>

              <button
                onClick={() => setDivisionOpen(!divisionOpen)}
                className="w-full text-left flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                <span>Divisions</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-300 ${divisionOpen ? "rotate-180" : ""}`}
                />
              </button>
              {divisionOpen && (
                <div className="pl-6 space-y-1">
                  <AnimatedLink
                    to="/act-ict"
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-sm text-[#7A9ABD] hover:text-[#00A8E8] hover:bg-[#1E3A5F] transition-all duration-300"
                  >
                    ACT-ICT
                  </AnimatedLink>
                  <AnimatedLink
                    to="/act-global"
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-sm text-[#7A9ABD] hover:text-[#00A8E8] hover:bg-[#1E3A5F] transition-all duration-300"
                  >
                    ACTGlobal
                  </AnimatedLink>
                </div>
              )}

              <AnimatedLink
                to="/solutions"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                Solutions
              </AnimatedLink>
              <AnimatedLink
                to="/mining"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                Mining & Industrial
              </AnimatedLink>
              <AnimatedLink
                to="/projects"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                Projects
              </AnimatedLink>
              <AnimatedLink
                to="/contact"
                onClick={toggleMenu}
                className="block px-3 py-3 rounded-md text-base font-medium text-white hover:bg-[#1E3A5F] hover:text-[#00A8E8] transition-all duration-300"
              >
                Contact
              </AnimatedLink>
              <AnimatedButton
                onClick={() => {toggleMenu(); window.location.href = '/contact';}}
                className="block w-full px-3 py-3 rounded-md text-base font-medium bg-[#00A8E8] text-white hover:bg-[#0090CC] transition-all duration-300 mt-4 btn-lift"
                hoverScale={1.02}
              >
                Get Quote
              </AnimatedButton>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
