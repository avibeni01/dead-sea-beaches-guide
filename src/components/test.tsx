import React from 'react';
import { MapPin, Calendar, Clock, Check } from 'lucide-react';
import { mediterraneanReligiousBeaches } from '../data/mediterraneanBeaches';

const MediterraneanReligiousBeachesSection: React.FC = () => {
  return (
    <section id="mediterranean-religious-beaches" className="py-16 bg-rose-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          Plages Séparées pour Visiteurs Religieux
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Le littoral méditerranéen propose également des plages avec séparation hommes-femmes, permettant aux visiteurs observant des pratiques religieuses de profiter de la mer tout en respectant leurs traditions.
        </p>
        
        <div className="bg-white border-l-4 border-rose-500 p-4 rounded-md mb-6 max-w-2xl mx-auto">
          <p className="text-sm text-gray-700">
            <span className="font-medium text-rose-700">Info importante :</span> Les plages séparées respectent rigoureusement les horaires de séparation. Vérifiez les jours et heures spécifiques avant votre visite.
          </p>
        </div>
        
        {/* Grille de plages religieuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mediterraneanReligiousBeaches.map((beach) => (
            <div key={beach.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image de la plage */}
              <div className="relative h-48">
                <img
                  src={beach.images[0]}
                  alt={beach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-rose-600 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
                  {beach.location.city}
                </div>
              </div>
              
              {/* Contenu de la carte */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{beach.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{beach.hebrewName}</p>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {beach.description.substring(0, 100)}...
                </p>
                
                {/* Horaires */}
                <div className="flex items-start text-xs mb-2">
                  <Calendar className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <p className="text-blue-700 font-medium mb-0.5">Hommes:</p>
                    <p className="text-gray-600 mb-1 line-clamp-1">{beach.separationSchedule.men}</p>
                    <p className="text-pink-600 font-medium mb-0.5">Femmes:</p>
                    <p className="text-gray-600 line-clamp-1">{beach.separationSchedule.women}</p>
                  </div>
                </div>
                
                {/* Adresse */}
                <div className="flex items-start text-xs mb-3">
                  <MapPin className="w-4 h-4 text-rose-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 line-clamp-1">{beach.location.address}</p>
                </div>
                
                {/* Lien vers Google Maps */}
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-100">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-rose-600 hover:text-rose-700 font-medium flex items-center"
                  >
                    Voir sur Google Maps
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  <button
                    onClick={() => window.open('https://elynortours.com/location-de-voiture/', '_blank')}
                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Louer un véhicule
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bannière Elynor Tours plus compacte */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-5 max-w-4xl mx-auto border-t border-rose-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/4 mb-4 md:mb-0 md:pr-6">
              <h3 className="text-lg font-semibold text-rose-700 mb-2">Services pour Visiteurs Religieux</h3>
              <p className="text-sm text-gray-700 mb-3">
                Elynor Tours propose des services spécialement adaptés aux besoins des voyageurs religieux, avec location de véhicules pour accéder facilement aux plages séparées et hébergements à proximité.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://elynortours.com/location-de-voiture/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-rose-500 text-white rounded-md hover:bg-rose-600 transition-colors text-sm"
                >
                  Location de voiture
                </a>
                <a 
                  href="https://elynortours.com/hotels/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm"
                >
                  Hôtels recommandés
                </a>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-rose-50 p-3 rounded-full">
                <svg className="w-12 h-12 text-rose-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanReligiousBeachesSection;