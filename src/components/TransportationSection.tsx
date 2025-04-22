import React, { useState } from 'react';
import { transportation, shuttleServices } from '../data/beaches';
import { Bus, Car, MapPin, Clock, DollarSign } from 'lucide-react';

const TransportationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('transport');

  return (
    <section id="transportation" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Transport et Accès
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Plusieurs options s'offrent à vous pour rejoindre les plages de la Mer Morte depuis les principales villes d'Israël. Consultez les informations ci-dessous pour planifier votre trajet.
        </p>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'transport'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
              onClick={() => setActiveTab('transport')}
            >
              <Bus size={18} className="inline mr-2" />
              Depuis les villes principales
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'shuttle'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
              onClick={() => setActiveTab('shuttle')}
            >
              <Car size={18} className="inline mr-2" />
              Services de navette
            </button>
          </div>
        </div>
        
        {/* Transport Content */}
        {activeTab === 'transport' && (
          <div className="space-y-8">
            {transportation.map((city) => (
              <div key={city.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-teal-600 text-white p-4">
                  <h3 className="text-xl font-semibold">Depuis {city.fromCity}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {city.options.map((option, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          {option.type === 'Bus public' && <Bus size={18} className="mr-2 text-teal-600" />}
                          {option.type === 'Tour organisé' && <MapPin size={18} className="mr-2 text-teal-600" />}
                          {option.type === 'Taxi' && <Car size={18} className="mr-2 text-teal-600" />}
                          {option.type === 'Location de voiture' && <Car size={18} className="mr-2 text-teal-600" />}
                          {option.type}
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>{option.details}</p>
                          <p className="flex items-center">
                            <DollarSign size={16} className="mr-1 text-teal-600" />
                            <span className="font-medium">Prix:</span> {option.price}
                          </p>
                          <p className="flex items-center">
                            <Clock size={16} className="mr-1 text-teal-600" />
                            <span className="font-medium">Fréquence:</span> {option.frequency}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 max-w-3xl mx-auto mt-8">
              <h4 className="font-semibold text-blue-800 mb-2">Conseils pour le transport</h4>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>Les transports publics en Israël ne fonctionnent pas pendant Shabbat (du vendredi soir au samedi soir).</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>Réservez vos tours organisés à l'avance, surtout pendant la haute saison touristique.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>La location de voiture offre la plus grande flexibilité pour explorer plusieurs plages en une journée.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <p>Pour les groupes de 3 personnes ou plus, le taxi peut être économique par rapport aux billets de bus individuels.</p>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Shuttle Content */}
        {activeTab === 'shuttle' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Itinéraires
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Horaires
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prix
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shuttleServices.map((service) => (
                    <tr key={service.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{service.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{service.routes}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{service.schedule}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{service.price}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-100 mt-8">
              <h4 className="font-semibold text-yellow-800 mb-2">À noter</h4>
              <p className="text-gray-700">
                Les services de navette peuvent être sujets à des modifications saisonnières. Il est recommandé de confirmer les horaires et prix avant votre voyage, soit auprès de votre hébergement, soit en contactant directement les opérateurs.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TransportationSection;