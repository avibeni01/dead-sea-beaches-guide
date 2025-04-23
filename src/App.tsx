import React, { useEffect } from 'react';
// import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import BeachesSection from './components/BeachesSection';
import ReligiousBeachesSection from './components/ReligiousBeachesSection';
import SafetySection from './components/SafetySection';
import TransportationSection from './components/TransportationSection';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Les 10 Plus Belles Plages de la Mer Morte - Guide Complet | Elynor Tours";
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const target = document.querySelector(anchor.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80, // Adjust for header
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      <Hero />
      <Introduction />
      <BeachesSection />
      <ReligiousBeachesSection />
      <SafetySection />
      <TransportationSection />
    </div>
  );
}

export default App;