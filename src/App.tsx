import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import BeachesSection from './components/BeachesSection';
import ReligiousBeachesSection from './components/ReligiousBeachesSection';
import SafetySection from './components/SafetySection';
import TransportationSection from './components/TransportationSection';
import MediterraneanApp from './MediterraneanApp';

function App() {
  const [showMediterranean, setShowMediterranean] = useState(true);

  useEffect(() => {
    // Check if URL has a hash to determine which app to show
    const hash = window.location.hash;
    if (hash && hash.includes('dead-sea')) {
      setShowMediterranean(false);
      document.title = "Les 10 Plus Belles Plages de la Mer Morte - Guide Complet | Elynor Tours";
    } else {
      setShowMediterranean(true);
      document.title = "Les 20 Plus Belles Plages de la Méditerranée Israélienne - Guide Complet";
    }
    
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        
        const href = this.getAttribute('href') || '';
        
        // Switch between apps if necessary
        if (href.includes('mediterranean') && !showMediterranean) {
          setShowMediterranean(true);
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
  }, [showMediterranean]);

  // Plus besoin du composant AppSwitcher séparé, puisque nous allons
  // passer les états et fonctions directement aux composants Header

  return (
    <div className="min-h-screen bg-white">
      {showMediterranean ? (
        // Mediterranean Beaches App avec props pour le switcher
        <MediterraneanApp 
          onSwitchApp={() => {
            setShowMediterranean(false);
            window.history.pushState({}, '', '#dead-sea-beaches');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        // Dead Sea Beaches App avec props pour le switcher
        <>
          <Header 
            onSwitchApp={() => {
              setShowMediterranean(true);
              window.history.pushState({}, '', '#mediterranean-beaches');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
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
