import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/15638699/pexels-photo-15638699/free-photo-of-the-dead-sea-coastline.jpeg)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-fuchsia-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-down">
            Les 10 Plus Belles Plages de la Mer Morte
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in-up">
            Guide complet des plus belles plages de la Mer Morte, avec informations détaillées sur chaque site, conseils pratiques et options de transport.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
            <a 
              href="#best-beaches" 
              className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg"
            >
              Découvrir les plages
            </a>
            <a 
              href="#safety" 
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-lg"
            >
              Conseils de sécurité
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#introduction" className="text-white opacity-80 hover:opacity-100">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;