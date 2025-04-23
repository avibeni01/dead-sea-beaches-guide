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

  // App switcher component
  const AppSwitcher = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex space-x-2">
        <button
          onClick={() => {
            setShowMediterranean(true);
            window.history.pushState({}, '', '#mediterranean-beaches');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium shadow-md ${
            showMediterranean 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Plages Méditerranée
        </button>
        <button
          onClick={() => {
            setShowMediterranean(false);
            window.history.pushState({}, '', '#dead-sea-beaches');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-2 rounded-md text-sm font-medium shadow-md ${
            !showMediterranean 
              ? 'bg-orange-600 text-white' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}
        >
          Plages Mer Morte
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {showMediterranean ? (
        // Mediterranean Beaches App
        <MediterraneanApp />
      ) : (
        // Dead Sea Beaches App
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
      
      <AppSwitcher />
    </div>
  );
}

export default App;