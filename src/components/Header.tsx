import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-semibold text-orange-600">
              Elynor Tours
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#introduction" className="text-gray-700 hover:text-orange-600 font-medium">
              Introduction
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-600 font-medium">
                Plages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                <a href="#best-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Les 10 meilleures plages
                </a>
                <a href="#religious-beaches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                  Plages religieuses
                </a>
              </div>
            </div>
            <a href="#safety" className="text-gray-700 hover:text-orange-600 font-medium">
              Sécurité
            </a>
            <a href="#transportation" className="text-gray-700 hover:text-orange-600 font-medium">
              Transport
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <a 
                href="#introduction" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Introduction
              </a>
              <a 
                href="#best-beaches" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Les 10 meilleures plages
              </a>
              <a 
                href="#religious-beaches" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Plages religieuses
              </a>
              <a 
                href="#safety" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sécurité
              </a>
              <a 
                href="#transportation" 
                className="text-gray-700 hover:text-orange-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Transport
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;