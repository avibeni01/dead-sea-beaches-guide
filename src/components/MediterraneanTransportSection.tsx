import React, { useState } from 'react';
import { transportation } from '../data/mediterraneanBeaches';
import { Bus, Car, Train, Bike, MapPin, Clock, DollarSign } from 'lucide-react';

const MediterraneanTransportSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="mediterranean-transport" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Comment Accéder aux Plages
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Israël dispose d'un excellent réseau de transport permettant d'accéder facilement aux plages de la côte méditerranéenne. Voici les différentes options selon votre destination.
        </p>
        
        {/* City Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {transportation.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === index 
                  ? 'bg-rose-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {item.toCity}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-pink-50 p-4 border-b border-pink-100">
            <h3 className="text-xl font-semibold text-gray-800">
              Comment se rendre à {transportation[activeTab].toCity}
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportation[activeTab].options.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden transition-transform hover:transform hover:-translate-y-1"
                >
                  <div className="bg-orange-500 text-white p-3 flex items-center">
                    {option.type.includes('Train') && <Train size={20} className="mr-2" />}
                    {option.type.includes('Bus') && <Bus size={20} className="mr-2" />}
                    {option.type.includes('Taxi') && <Car size={20} className="mr-2" />}
                    {option.type.includes('Vélo') && <Bike size={20} className="mr-2" />}
                    {option.type.includes('Location') && <Car size={20} className="mr-2" />}
                    {option.type.includes('Excursion') && <MapPin size={20} className="mr-2" />}
                    {option.type.includes('Navette') && <Bus size={20} className="mr-2" />}
                    {option.type.includes('Transport') && <Bus size={20} className="mr-2" />}
                    <h4 className="font-semibold">{option.type}</h4>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{option.details}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <DollarSign size={16} className="mr-2 text-rose-500" />
                        <span><strong>Prix:</strong> {option.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock size={16} className="mr-2 text-rose-500" />
                        <span><strong>Fréquence:</strong> {option.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 p-5 rounded-lg border border-pink-100">
              <h4 className="font-semibold text-pink-800 mb-3 flex items-center">
                <div className="bg-pink-200 p-2 rounded-full mr-3">
                  <Train size={18} className="text-pink-700" />
                </div>
                Transports en commun
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Israël dispose d'un réseau ferroviaire efficace reliant la plupart des grandes villes côtières</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>La carte Rav-Kav (carte rechargeable) est utilisable dans tous les transports en commun du pays</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <p>Les transports publics ne fonctionnent pas pendant Shabbat (vendredi soir au samedi soir)</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-5 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                <div className="bg-orange-200 p-2 rounded-full mr-3">
                  <Car size={18} className="text-orange-700" />
                </div>
                Location de voiture
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Option idéale pour explorer plusieurs plages en toute liberté</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Le stationnement peut être difficile et coûteux dans les zones très touristiques comme Tel Aviv</p>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <p>Un permis de conduire international est recommandé, bien que la plupart des permis étrangers soient acceptés</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-5 bg-red-50 rounded-lg border border-red-100">
            <h4 className="font-semibold text-red-800 mb-3">Applications de transport utiles</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p><strong>Moovit</strong> - Pour planifier vos trajets en transports en commun</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p><strong>Gett</strong> - Service de taxi à la demande</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p><strong>Tel-O-Fun</strong> - Service de vélos en libre-service à Tel Aviv</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p><strong>Bird/Lime/Wind</strong> - Applications de trottinettes électriques</p>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <p><strong>Waze</strong> - Navigation GPS populaire en Israël</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanTransportSection;