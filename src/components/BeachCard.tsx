import React, { useState } from 'react';
import { MapPin, Clock, DollarSign, Check, ChevronDown, ChevronUp, Armchair as Wheelchair, Car, Bus } from 'lucide-react';
import { Beach, BeachFacility } from '../types/beach';

interface BeachCardProps {
  beach: Beach;
}

const BeachCard: React.FC<BeachCardProps> = ({ beach }) => {
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
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
        
        {/* Beach Type Badge */}
        <div className="absolute top-2 left-2 bg-rose-600 text-white px-3 py-1 rounded-md text-xs font-medium">
          {beach.type}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{beach.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{beach.hebrewName}</p>
          </div>
          
          {/* Wheelchair Access */}
          {beach.accessibility.wheelchairAccess && (
            <div className="bg-pink-100 p-1 rounded-md" title="Accessible aux fauteuils roulants">
              <Wheelchair size={18} className="text-pink-700" />
            </div>
          )}
        </div>
        
        {/* Basic Info */}
        <div className="space-y-2 mt-3">
          <div className="flex items-center text-gray-600">
            <MapPin size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.location.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.hours.opening} - {beach.hours.closing}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign size={18} className="mr-2 flex-shrink-0 text-orange-500" />
            <span className="text-sm">{beach.entranceFee}</span>
          </div>
        </div>
        
        {/* Facilities */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Installations:</h4>
          <div className="flex flex-wrap gap-2">
            {beach.facilities.map((facility, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-md"
              >
                <Check size={14} className="mr-1 text-rose-500" />
                {facility}
              </span>
            ))}
          </div>
        </div>
        
        {/* Show More Button */}
        <button
          className="mt-4 w-full flex items-center justify-center text-orange-500 hover:text-orange-600 transition-colors py-2 border-t border-gray-100"
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
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Salinité et propriétés:</h4>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Niveau: </span>{beach.salinity.level}<br />
                <span className="font-medium">Propriétés: </span>{beach.salinity.properties}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Accessibilité:</h4>
              <div className="space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Car size={16} className="mr-2 flex-shrink-0 text-orange-500" />
                  <span>{beach.accessibility.parking}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Bus size={16} className="mr-2 flex-shrink-0 text-orange-500" />
                  <span>{beach.accessibility.publicTransport}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Meilleure période pour visiter:</h4>
              <p className="text-sm text-gray-600">{beach.bestTimeToVisit}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Notes complémentaires:</h4>
              <p className="text-sm text-gray-600">{beach.hours.notes}</p>
            </div>
            
            {/* Map Button */}
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${beach.location.latitude},${beach.location.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-orange-500 text-white text-center py-2 rounded-md hover:bg-orange-600 transition-colors mt-4"
            >
              Voir sur Google Maps
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeachCard;