import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import BeachesSection from './components/BeachesSection';
import ReligiousBeachesSection from './components/ReligiousBeachesSection';
import SafetySection from './components/SafetySection';
import TransportationSection from './components/TransportationSection';
import MediterraneanApp from './MediterraneanApp';
import AirportCarRental from './components/AirportCarRental';

function App() {
  const [showMediterranean, setShowMediterranean] = useState(true);
  const [showCarRental, setShowCarRental] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('car-rental')) {
        setShowCarRental(true);
        setShowMediterranean(false);
        document.title = "Location de Voiture à l'Aéroport Ben Gourion - Guide Complet | Elynor Tours";
      } else if (hash.includes('dead-sea')) {
        setShowMediterranean(false);
        setShowCarRental(false);
        document.title = "Les 10 Plus Belles Plages de la Mer Morte - Guide Complet | Elynor Tours";
      } else {
        setShowMediterranean(true);
        setShowCarRental(false);
        document.title = "Les 20 Plus Belles Plages de la Méditerranée Israélienne - Guide Complet";
      }
    };

    // Initial check
    handleHashChange();

    // Add hash change listener
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        
        const href = this.getAttribute('href') || '';
        
        // Switch between apps if necessary
        if (href.includes('car-rental')) {
          setShowCarRental(true);
          setShowMediterranean(false);
          window.history.pushState({}, '', '#car-rental');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        if (href.includes('mediterranean') && !showMediterranean) {
          setShowMediterranean(true);
          setShowCarRental(false);
          window.history.pushState({}, '', '#mediterranean-beaches');
          setTimeout(() => {
            const target = document.querySelector('#mediterranean-beaches');
            if (target) {
              window.scrollTo({
                top: (target as HTMLElement).offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }, 100);
          return;
        }
        
        if (href.includes('dead-sea') && showMediterranean) {
          setShowMediterranean(false);
          setShowCarRental(false);
          window.history.pushState({}, '', '#dead-sea-beaches');
          setTimeout(() => {
            const target = document.querySelector('#best-beaches');
            if (target) {
              window.scrollTo({
                top: (target as HTMLElement).offsetTop - 80,
                behavior: 'smooth'
              });
            }
          }, 100);
          return;
        }
        
        // Normal scrolling within the current app
        const target = document.querySelector(href);
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
  }, [showMediterranean, showCarRental]);

  // Plus besoin du composant AppSwitcher séparé, puisque nous allons
  // passer les états et fonctions directement aux composants Header

  return (
    <div className="min-h-screen bg-white">
      {showCarRental ? (
        <>
          <Header />
          <AirportCarRental />
        </>
      ) : showMediterranean ? (
        <MediterraneanApp
          onSwitchApp={() => {
            setShowMediterranean(false);
            window.history.pushState({}, '', '#dead-sea-beaches');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <>
          <Header />
          <Hero />
          <Introduction />
          <div id="dead-sea-beaches">
            <BeachesSection />
          </div>
          <ReligiousBeachesSection />
          <SafetySection />
          <TransportationSection />
        </>
      )}
    </div>
  );
}

export default App;
