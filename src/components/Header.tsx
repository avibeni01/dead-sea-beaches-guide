// Pour le Header.tsx (Mer Morte)

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSwitchApp: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSwitchApp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effet pour gérer le changement de fond au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour ouvrir/fermer le menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

            {/* App Switcher Buttons */}
            <div className="flex items-center space-x-3 ml-6 border-l pl-4 border-gray-200">
              <button
                onClick={onSwitchApp}
                className="px-3 py-1.5 rounded-md text-sm font-medium bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Plages Méditerranée
              </button>
              <span className="px-3 py-1.5 rounded-md text-sm font-medium bg-orange-600 text-white">
                Plages Mer Morte
              </span>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* App Switcher Button for Mobile */}
            <button
              onClick={onSwitchApp}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Méditerranée
            </button>
            
            <button
              className="text-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <nav className="flex flex-col px-4 py-2 space-y-2">
          <a href="#introduction" className="text-gray-700 hover:text-orange-600 py-1" onClick={toggleMenu}>
            Introduction
          </a>
          <div className="relative group">
            <button className="flex items-center justify-between w-full text-gray-700 hover:text-orange-600 py-1">
              <span>Plages</span>
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-focus-within:rotate-180" />
            </button>
            <div className="pl-4 mt-1 space-y-1 hidden group-focus-within:block">
              <a href="#best-beaches" className="block text-sm text-gray-600 hover:text-orange-600 py-1" onClick={toggleMenu}>
                Les 10 meilleures plages
              </a>
              <a href="#religious-beaches" className="block text-sm text-gray-600 hover:text-orange-600 py-1" onClick={toggleMenu}>
                Plages religieuses
              </a>
            </div>
          </div>
          <a href="#safety" className="text-gray-700 hover:text-orange-600 py-1" onClick={toggleMenu}>
            Sécurité
          </a>
          <a href="#transportation" className="text-gray-700 hover:text-orange-600 py-1" onClick={toggleMenu}>
            Transport
          </a>
          {/* Mobile App Switcher - Already handled outside the menu */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
