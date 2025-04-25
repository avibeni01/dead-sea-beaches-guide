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
import SEOHead from './components/SEOHead';
import HotelPromotionsPage from './components/HotelPromotionsPage';

function App() {
  const [showMediterranean, setShowMediterranean] = useState(true);
  const [showCarRental, setShowCarRental] = useState(false);
  const [showHotelPromotions, setShowHotelPromotions] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Faire défiler vers le haut
       window.scrollTo({ top: 0, behavior: 'smooth' });

      if (hash.includes('car-rental')) {
        setShowCarRental(true);
        setShowMediterranean(false);
        setShowHotelPromotions(false);
      } else if (hash.includes('dead-sea')) {
        setShowMediterranean(false);
        setShowCarRental(false);
        setShowHotelPromotions(false);
      } else if (hash.includes('hotel-promotions')) {
        setShowMediterranean(false);
        setShowCarRental(false);
        setShowHotelPromotions(true);
      } else {
        setShowMediterranean(true);
        setShowCarRental(false);
        setShowHotelPromotions(false);
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

  return (
    <div className="min-h-screen bg-white">
      {showCarRental ? (
        <>
          <SEOHead
            title="Location de Voiture à l'Aéroport Ben Gourion - Guide Complet | Elynor Tours"
            description="Guide complet pour la location de voiture à l'aéroport Ben Gourion. Conseils, compagnies recommandées et informations pratiques."
            keywords="location voiture aéroport Ben Gourion, location auto Tel Aviv, location véhicule Israël, voiture aéroport Tel Aviv"
            canonicalUrl="https://elynortours.com/location-voiture-aeroport"
            ogImage="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
          />
          <Header />
          <AirportCarRental />
        </>
      ) : showHotelPromotions ? (
        <>
          <SEOHead
            title="Promotions Hôtelières Exceptionnelles en Israël | Elynor Tours"
            description="Découvrez nos promotions exclusives dans les plus beaux hôtels d'Israël. Meilleures offres à Tel Aviv, Jérusalem, Eilat et Mer Morte."
            keywords="promotions hôtels Israël, offres spéciales hôtels, réduction hôtel Tel Aviv, hôtel Jérusalem pas cher, séjour Mer Morte"
            canonicalUrl="https://elynortours.com/promotions-hotels"
            ogImage="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
          />
          <Header />
          <HotelPromotionsPage />
        </>
      ) : showMediterranean ? (
        <>
          <SEOHead
            title="Les 20 Plus Belles Plages de la Méditerranée Israélienne - Guide Complet | Elynor Tours"
            description="Découvrez notre guide des plus belles plages méditerranéennes d'Israël, de Tel Aviv à Haïfa. Informations pratiques, conseils et services de transport."
            keywords="plages Israël, plages Tel Aviv, plages Herzliya, plages Haïfa, plages méditerranée, meilleurs plages Israël"
            canonicalUrl="https://elynortours.com/plages-mediterranee"
            ogImage="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg"
            appType="mediterranean"
          />
          <MediterraneanApp
            onSwitchApp={() => {
              setShowMediterranean(false);
              window.history.pushState({}, '', '#dead-sea-beaches');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </>
      ) : (
        <>
          <SEOHead
            title="Les 10 Plus Belles Plages de la Mer Morte - Guide Complet | Elynor Tours"
            description="Guide complet des plus belles plages de la Mer Morte, avec informations détaillées sur chaque site, conseils pratiques et options de transport."
            keywords="plages Mer Morte, Ein Bokek, propriétés thérapeutiques, sel Mer Morte, flottaison Mer Morte, boue Mer Morte"
            canonicalUrl="https://elynortours.com/plages-mer-morte"
            ogImage="https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg"
            appType="dead-sea"
          />
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
