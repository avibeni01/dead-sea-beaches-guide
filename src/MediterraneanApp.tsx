import React, { useEffect } from 'react';
import MediterraneanHeader from './components/MediterraneanHeader';
import MediterraneanHero from './components/MediterraneanHero';
import MediterraneanIntroduction from './components/MediterraneanIntroduction';
import MediterraneanBeachesSection from './components/MediterraneanBeachesSection';
import MediterraneanSafetySection from './components/MediterraneanSafetySection';
import MediterraneanTransportSection from './components/MediterraneanTransportSection';

interface MediterraneanAppProps {
  onSwitchApp: () => void;
}

function MediterraneanApp({ onSwitchApp }: MediterraneanAppProps) {
  useEffect(() => {
    // Update page title
    document.title = "Les 20 Plus Belles Plages de la Méditerranée Israélienne - Guide Complet";
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
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
      <MediterraneanHeader onSwitchApp={onSwitchApp} />
      <MediterraneanHero />
      <MediterraneanIntroduction />
      <MediterraneanBeachesSection />
      <MediterraneanSafetySection />
      <MediterraneanTransportSection />
    </div>
  );
}

export default MediterraneanApp;
