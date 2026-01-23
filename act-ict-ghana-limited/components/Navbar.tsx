import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => location.pathname === path ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-2"><Phone size={14} /> <span>+233 30 200 0000</span></span>
            <span className="flex items-center space-x-2"><Mail size={14} /> <span>info@act-ict.com.gh</span></span>
          </div>
          <div className="flex space-x-4">
             <Link to="/admin" className="hover:text-gray-300">Admin Login</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
             <div className="flex flex-col">
                <h1 className="text-2xl font-extrabold text-blue-900 tracking-tighter">ACT-ICT</h1>
                <span className="text-[10px] text-gray-500 font-semibold tracking-widest -mt-1">GHANA LIMITED</span>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 ${isActive('/act-ict') || isActive('/act-global') ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600'}`}
              >
                <span>Divisions</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                <Link to="/act-ict" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">ACT-ICT</Link>
                <Link to="/act-global" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">ACTGlobal</Link>
              </div>
            </div>

            <Link to="/solutions" className={isActive('/solutions')}>Solutions</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            
            <Link to="/contact" className="bg-blue-900 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-800 transition shadow-lg text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">About Us</Link>
            
            <button 
              onClick={() => setDivisionOpen(!divisionOpen)}
              className="w-full text-left flex justify-between items-center px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
            >
              <span>Divisions</span>
              <ChevronDown size={16} className={`transform transition ${divisionOpen ? 'rotate-180' : ''}`} />
            </button>
            {divisionOpen && (
              <div className="pl-6 space-y-1">
                <Link to="/act-ict" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600">ACT-ICT</Link>
                <Link to="/act-global" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-blue-600">ACTGlobal</Link>
              </div>
            )}

            <Link to="/solutions" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Solutions</Link>
            <Link to="/projects" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Projects</Link>
            <Link to="/contact" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Contact</Link>
             <Link to="/admin" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">Admin</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
