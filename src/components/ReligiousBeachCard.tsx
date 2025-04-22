import React, { useState } from 'react';
import { MapPin, Calendar, Scroll, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { ReligiousBeach } from '../types/beach';

interface ReligiousBeachCardProps {
  beach: ReligiousBeach;
}

const ReligiousBeachCard: React.FC<ReligiousBeachCardProps> = ({ beach }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % beach.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? beach.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 border-blue-600">
      {/* Image Carousel */}
      <div className="relative h-64">
        <img
          src={beach.images[currentImageIndex]}
          alt={`${beach.name} - Photo ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={prevImage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70 transition-colors"
          onClick={nextImage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded-md text-xs">
          {currentImageIndex + 1}/{beach.images.length}
        </div>
        
        {/* Religious Beach Badge */}
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium">
          Plage séparée
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{beach.hebrewName}</p>
        </div>
        
        {/* Basic Info */}
        <div className="space-y-3 mt-3">
          <div className="flex items-start text-gray-600">
            <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-blue-600" />
            <span className="text-sm">{beach.location.address}</span>
          </div>
          
          <div className="flex items-start text-gray-600">
            <Calendar size={18} className="mr-2 mt-1 flex-shrink-0 text-blue-600" />
            <div className="text-sm">
              <p className="font-medium mb-1">Horaires de séparation:</p>
              <p className="mb-1"><span className="text-blue-700">Hommes:</span> {beach.separationSchedule.men}</p>
              <p><span className="text-pink-600">Femmes:</span> {beach.separationSchedule.women}</p>
            </div>
          </div>
        </div>
        
        {/* Show More Button */}
        <button
          className="mt-4 w-full flex items-center justify-center text-blue-600 hover:text-blue-700 transition-colors py-2 border-t border-gray-100"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="text-sm font-medium mr-1">
            {isExpanded ? "Voir moins" : "Voir plus"}
          </span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Description:</h4>
              <p className="text-sm text-gray-600">{beach.description}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Scroll size={16} className="mr-2 text-blue-600" />
                Code vestimentaire:
              </h4>
              <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
                {beach.dressCode}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Installations spéciales:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {beach.specialFacilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                <Info size={16} className="mr-2 text-blue-600" />
                Règles particulières:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {beach.specialRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h4>
              <p className="text-sm text-gray-600">{beach.separationSchedule.notes}</p>
            </div>
            
            {/* Map Button */}
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Voir sur Google Maps
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReligiousBeachCard;