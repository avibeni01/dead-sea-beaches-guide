export enum BeachFacility {
    SHOWERS = "Douches",
    CHANGING_ROOMS = "Vestiaires",
    RESTAURANTS = "Restaurants",
    LIFEGUARD = "Maître-nageur",
    SPA = "Spa",
    SHOPS = "Boutiques",
    FIRST_AID = "Premiers secours",
    WIFI = "WiFi",
    BAR = "Bar",
    WATER_SPORTS = "Sports nautiques",
    PLAYGROUND = "Aire de jeux",
    FITNESS_AREA = "Espace fitness",
    BEACH_VOLLEYBALL = "Volleyball de plage",
    DOG_FRIENDLY = "Accepte les chiens",
    PARASOLS = "Location de parasols",
    BEACH_CHAIRS = "Location de chaises",
    MARINA = "Marina"
  }
  
  export enum BeachType {
    PUBLIC = "Publique",
    PRIVATE = "Privée",
    CITY = "Urbaine",
    NATURE = "Naturelle",
    FAMILY = "Familiale",
    SPORTS = "Sportive",
    DOG_FRIENDLY = "Accepte les chiens"
  }
  
  export enum WaveSize {
    CALM = "Calme",
    SMALL = "Petites vagues",
    MEDIUM = "Vagues moyennes",
    LARGE = "Grandes vagues"
  }
  
  export interface MediterraneanBeach {
    id: number;
    name: string;
    hebrewName: string;
    description: string;
    images: string[];
    location: {
      city: string;
      latitude: number;
      longitude: number;
      address: string;
    };
    hours: {
      opening: string;
      closing: string;
      notes: string;
    };
    entranceFee: string;
    facilities: BeachFacility[];
    waterQuality: {
      rating: number; // 1-5
      description: string;
    };
    sand: {
      type: string;
      color: string;
      quality: string;
    };
    waves: {
      size: WaveSize;
      surfingConditions: string;
    };
    accessibility: {
      wheelchairAccess: boolean;
      parking: string;
      publicTransport: string;
    };
    bestTimeToVisit: string;
    type: BeachType[];
    crowdLevel: {
      lowSeason: string;
      highSeason: string;
    };
    nearbyAttractions: string[];
  }
  
  export interface SafetyTip {
    id: number;
    title: string;
    description: string;
  }
  
  export interface PracticalTip {
    id: number;
    title: string;
    description: string;
  }
  
  export interface TransportOption {
    type: string;
    details: string;
    price: string;
    frequency: string;
  }
  
  export interface Transportation {
    id: number;
    toCity: string;
    options: TransportOption[];
  }