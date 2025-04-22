import { Beach, BeachFacility, BeachType } from '../types/beach';

export const beaches: Beach[] = [
  {
    id: 1,
    name: "Ein Bokek",
    hebrewName: "עין בוקק",
    description: "Ein Bokek est l'une des plages les plus populaires de la Mer Morte, connue pour ses infrastructures de qualité et son accessibilité. Cette plage publique gratuite est idéale pour les familles et offre une expérience de baignade sécurisée dans les eaux thérapeutiques de la Mer Morte.",
    images: [
      "https://images.pexels.com/photos/15577357/pexels-photo-15577357/free-photo-of-aerial-view-of-dead-sea-coastline.jpeg",
      "https://images.pexels.com/photos/15577358/pexels-photo-15577358/free-photo-of-people-enjoying-dead-sea-mud-treatments.jpeg",
      "https://images.pexels.com/photos/10249151/pexels-photo-10249151.jpeg",
      "https://images.pexels.com/photos/19254497/pexels-photo-19254497/free-photo-of-plage-sable-eau-sans-personne.jpeg",
      "https://images.pexels.com/photos/4388168/pexels-photo-4388168.jpeg"
    ],
    location: {
      latitude: 31.2039,
      longitude: 35.3639,
      address: "Ein Bokek, Route 90, Israël"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Ouvert tous les jours de l'année"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "34%",
      properties: "Riche en magnésium, calcium et potassium, excellente pour les problèmes de peau comme le psoriasis et l'eczéma"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit disponible",
      publicTransport: "Accessibilité par bus depuis Jérusalem et Tel Aviv"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre pour éviter les chaleurs extrêmes",
    type: BeachType.PUBLIC
  },
  {
    id: 2,
    name: "Mineral Beach",
    hebrewName: "חוף מינרל",
    description: "Mineral Beach offre une expérience unique avec ses bains de boue naturelle et ses sources d'eau chaude. Cette plage est particulièrement appréciée pour ses propriétés thérapeutiques et son atmosphère relaxante.",
    images: [
      "https://images.pexels.com/photos/16645500/pexels-photo-16645500/free-photo-of-mer-morte-israël.jpeg",
      "https://images.pexels.com/photos/9026824/pexels-photo-9026824.jpeg",
      "https://images.pexels.com/photos/9028658/pexels-photo-9028658.jpeg",
      "https://images.pexels.com/photos/15638710/pexels-photo-15638710/free-photo-of-israel-ein-gedi-waterfall.jpeg",
      "https://images.pexels.com/photos/15638702/pexels-photo-15638702/free-photo-of-ein-gedi-nature-reserve.jpeg"
    ],
    location: {
      latitude: 31.5677,
      longitude: 35.4054,
      address: "Mineral Beach, Mer Morte, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "18:00",
      notes: "Fermé le samedi (Shabbat)"
    },
    entranceFee: "60 NIS pour les adultes, 35 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33%",
      properties: "Bains de boue naturelle riches en minéraux, idéaux pour les affections articulaires et les douleurs rhumatismales"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking payant à proximité",
      publicTransport: "Navettes disponibles depuis Ein Bokek"
    },
    bestTimeToVisit: "Avril à juin et septembre à octobre pour des températures agréables",
    type: BeachType.PRIVATE
  },
  {
    id: 3,
    name: "Neve Midbar",
    hebrewName: "נווה מדבר",
    description: "Neve Midbar est une plage privée offrant une atmosphère paisible et des installations de qualité. Elle est réputée pour son spa et ses traitements à base de boue de la Mer Morte.",
    images: [
      "https://images.pexels.com/photos/19254497/pexels-photo-19254497/free-photo-of-plage-sable-eau-sans-personne.jpeg",
      "https://images.pexels.com/photos/16645501/pexels-photo-16645501/free-photo-of-mer-morte-israël.jpeg",
      "https://images.pexels.com/photos/9028660/pexels-photo-9028660.jpeg"
    ],
    location: {
      latitude: 31.7123,
      longitude: 35.4562,
      address: "Neve Midbar Beach, Route 90, Israël"
    },
    hours: {
      opening: "08:30",
      closing: "17:30",
      notes: "Fermé le vendredi soir et samedi (Shabbat)"
    },
    entranceFee: "70 NIS pour les adultes, 40 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "33.7%",
      properties: "Haute concentration en sel et minéraux, recommandé pour les problèmes respiratoires et dermatologiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking gratuit pour les visiteurs",
      publicTransport: "Bus disponibles depuis Jérusalem"
    },
    bestTimeToVisit: "Mars à mai et octobre à novembre",
    type: BeachType.PRIVATE
  },
  {
    id: 4,
    name: "Kalia Beach",
    hebrewName: "חוף קליה",
    description: "Située à l'extrémité nord de la Mer Morte, Kalia Beach est l'une des plages les plus proches de Jérusalem. Elle offre une expérience complète avec des installations modernes et un accès facile aux eaux thérapeutiques.",
    images: [
      "https://images.pexels.com/photos/4017278/pexels-photo-4017278.jpeg",
      "https://images.pexels.com/photos/4388168/pexels-photo-4388168.jpeg",
      "https://images.pexels.com/photos/4388280/pexels-photo-4388280.jpeg"
    ],
    location: {
      latitude: 31.7696,
      longitude: 35.4615,
      address: "Kalia Beach, Route 90, près du Kibboutz Kalia, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Ouvre plus tard et ferme plus tôt pendant l'hiver"
    },
    entranceFee: "60 NIS pour les adultes, 35 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "34.2%",
      properties: "Excellente pour les traitements dermatologiques, particulièrement efficace contre le psoriasis"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Vaste parking disponible (payant)",
      publicTransport: "Facilement accessible en bus depuis Jérusalem (45 minutes)"
    },
    bestTimeToVisit: "Printemps et automne pour des conditions optimales",
    type: BeachType.PRIVATE
  },
  {
    id: 5,
    name: "Ein Gedi",
    hebrewName: "עין גדי",
    description: "Située près de la réserve naturelle d'Ein Gedi, cette plage combine l'expérience de la Mer Morte avec la proximité de magnifiques sentiers de randonnée et de cascades. C'est un lieu idéal pour combiner détente et exploration.",
    images: [
      "https://images.pexels.com/photos/9432683/pexels-photo-9432683.jpeg",
      "https://images.pexels.com/photos/15638710/pexels-photo-15638710/free-photo-of-israel-ein-gedi-waterfall.jpeg",
      "https://images.pexels.com/photos/15638702/pexels-photo-15638702/free-photo-of-ein-gedi-nature-reserve.jpeg"
    ],
    location: {
      latitude: 31.4504,
      longitude: 35.3883,
      address: "Ein Gedi Beach, Route 90, près de la réserve d'Ein Gedi, Israël"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Dernière entrée à 16:00. Peut fermer plus tôt en hiver."
    },
    entranceFee: "50 NIS pour les adultes, 30 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33.5%",
      properties: "Combinaison unique d'eau de la Mer Morte et de sources d'eau douce à proximité, bénéfique pour diverses affections cutanées"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking disponible (payant)",
      publicTransport: "Accessible en bus depuis Jérusalem et Ein Bokek"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre, idéal tôt le matin pour combiner avec une visite de la réserve",
    type: BeachType.PUBLIC
  },
  {
    id: 6,
    name: "Biankini Beach",
    hebrewName: "חוף ביאנקיני",
    description: "Biankini est une plage moderne proposant une ambiance plus jeune et festive. Elle offre des installations de qualité et organise régulièrement des événements, ce qui en fait un lieu apprécié des jeunes voyageurs.",
    images: [
      "https://images.pexels.com/photos/5757639/pexels-photo-5757639.jpeg",
      "https://images.pexels.com/photos/4350296/pexels-photo-4350296.jpeg",
      "https://images.pexels.com/photos/6157055/pexels-photo-6157055.jpeg"
    ],
    location: {
      latitude: 31.3329,
      longitude: 35.4101,
      address: "Biankini Beach, Mer Morte, Route 90, Israël"
    },
    hours: {
      opening: "09:00",
      closing: "22:00",
      notes: "Horaires étendus pendant la haute saison, événements nocturnes occasionnels"
    },
    entranceFee: "65 NIS pour les adultes, 40 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR
    ],
    salinity: {
      level: "33.8%",
      properties: "Propriétés thérapeutiques standard de la Mer Morte, avec l'ajout de soins spa utilisant des produits locaux"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible",
      publicTransport: "Navettes disponibles depuis les principaux hôtels"
    },
    bestTimeToVisit: "Avril à juin et septembre à octobre, les soirées d'été pour les événements spéciaux",
    type: BeachType.PRIVATE
  },
  {
    id: 7,
    name: "Herods Beach",
    hebrewName: "חוף הרודס",
    description: "Associée à l'hôtel Herods, cette plage privée offre un service haut de gamme et des installations luxueuses. Elle est particulièrement appréciée pour son calme et son confort.",
    images: [
      "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
      "https://images.pexels.com/photos/4126709/pexels-photo-4126709.jpeg",
      "https://images.pexels.com/photos/6131179/pexels-photo-6131179.jpeg"
    ],
    location: {
      latitude: 31.1978,
      longitude: 35.3662,
      address: "Herods Dead Sea Hotel, Ein Bokek, Israël"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Ouvert tous les jours, accès prioritaire pour les clients de l'hôtel"
    },
    entranceFee: "120 NIS pour les visiteurs extérieurs, gratuit pour les clients de l'hôtel",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI,
      BeachFacility.BAR
    ],
    salinity: {
      level: "34%",
      properties: "Traitement spa complet disponible, utilisant les propriétés thérapeutiques de la Mer Morte pour divers soins"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking de l'hôtel (gratuit pour les clients, payant pour les visiteurs)",
      publicTransport: "Service de navette depuis l'aéroport et les principales villes"
    },
    bestTimeToVisit: "Toute l'année, avec une préférence pour le printemps et l'automne",
    type: BeachType.PRIVATE
  },
  {
    id: 8,
    name: "Hamei Zohar",
    hebrewName: "חמי זוהר",
    description: "Hamei Zohar est une plage publique offrant une expérience authentique de la Mer Morte. Elle est moins touristique que certaines autres plages et appréciée pour son ambiance locale.",
    images: [
      "https://images.pexels.com/photos/4217023/pexels-photo-4217023.jpeg",
      "https://images.pexels.com/photos/1506991/pexels-photo-1506991.jpeg",
      "https://images.pexels.com/photos/4217021/pexels-photo-4217021.jpeg"
    ],
    location: {
      latitude: 31.1601,
      longitude: 35.3657,
      address: "Hamei Zohar, Route 90, Israël"
    },
    hours: {
      opening: "07:30",
      closing: "18:00",
      notes: "Ouvert tous les jours"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    salinity: {
      level: "33.7%",
      properties: "Concentrations élevées en sel et minéraux, idéales pour le traitement des affections cutanées et rhumatismales"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking gratuit disponible",
      publicTransport: "Accessible en bus depuis Ein Bokek"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre",
    type: BeachType.PUBLIC
  },
  {
    id: 9,
    name: "Neve Zohar",
    hebrewName: "נווה זוהר",
    description: "Située près du village de Neve Zohar, cette plage peu fréquentée offre une expérience plus calme et authentique. Idéale pour ceux qui cherchent à éviter les foules.",
    images: [
      "https://images.pexels.com/photos/358283/pexels-photo-358283.jpeg",
      "https://images.pexels.com/photos/8936845/pexels-photo-8936845.jpeg",
      "https://images.pexels.com/photos/16645503/pexels-photo-16645503/free-photo-of-mer-morte-israël.jpeg"
    ],
    location: {
      latitude: 31.1692,
      longitude: 35.3639,
      address: "Neve Zohar, Route 90, Israël"
    },
    hours: {
      opening: "Accès 24h/24",
      closing: "Accès 24h/24",
      notes: "Plage non surveillée en dehors des heures principales (9h-17h)"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD
    ],
    salinity: {
      level: "33.5%",
      properties: "Propriétés thérapeutiques standard de la Mer Morte, dans un environnement plus naturel"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking libre à proximité",
      publicTransport: "Accès limité en transports publics, location de voiture recommandée"
    },
    bestTimeToVisit: "Mars à juin et septembre à novembre, tôt le matin pour plus de tranquillité",
    type: BeachType.PUBLIC
  },
  {
    id: 10,
    name: "Ein Gedi Spa Beach",
    hebrewName: "חוף ספא עין גדי",
    description: "Distincte de la plage publique d'Ein Gedi, cette plage privée est associée au spa Ein Gedi et offre des installations haut de gamme ainsi que des traitements spa complets utilisant les minéraux de la Mer Morte.",
    images: [
      "https://images.pexels.com/photos/7412057/pexels-photo-7412057.jpeg",
      "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg",
      "https://images.pexels.com/photos/15492368/pexels-photo-15492368/free-photo-of-vue-aerienne-de-la-mer-morte.jpeg"
    ],
    location: {
      latitude: 31.4493,
      longitude: 35.3877,
      address: "Ein Gedi Spa, Route 90, près du Kibboutz Ein Gedi, Israël"
    },
    hours: {
      opening: "09:00",
      closing: "17:00",
      notes: "Dernière entrée à 16:00"
    },
    entranceFee: "95 NIS pour les adultes, 65 NIS pour les enfants",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANTS,
      BeachFacility.LIFEGUARD,
      BeachFacility.SPA,
      BeachFacility.SHOPS,
      BeachFacility.FIRST_AID,
      BeachFacility.WIFI
    ],
    salinity: {
      level: "34.2%",
      properties: "Traitements spa complets utilisant la boue et l'eau de la Mer Morte, particulièrement bénéfiques pour les problèmes dermatologiques et rhumatismaux"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Accessible en bus depuis Jérusalem et Tel Aviv"
    },
    bestTimeToVisit: "Mars à mai et septembre à novembre pour un climat idéal",
    type: BeachType.PRIVATE
  }
];

export const religiousBeaches = [
  {
    id: 101,
    name: "Separate Beach (Ein Bokek)",
    hebrewName: "חוף נפרד (עין בוקק)",
    description: "Cette section séparée de la plage d'Ein Bokek est spécialement conçue pour les visiteurs religieux, offrant des jours et horaires distincts pour les hommes et les femmes.",
    images: [
      "https://images.pexels.com/photos/15736428/pexels-photo-15736428/free-photo-of-dead-sea-landscape.jpeg",
      "https://images.pexels.com/photos/8936845/pexels-photo-8936845.jpeg",
      "https://images.pexels.com/photos/16645503/pexels-photo-16645503/free-photo-of-mer-morte-israël.jpeg",
      "https://images.pexels.com/photos/4388280/pexels-photo-4388280.jpeg",
      "https://images.pexels.com/photos/4217023/pexels-photo-4217023.jpeg"
    ],
    location: {
      latitude: 31.1978,
      longitude: 35.3662,
      address: "Section plage séparée, Ein Bokek, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi: 09:00-13:00",
      women: "Dimanche, Mardi, Jeudi: 14:00-18:00 / Lundi, Mercredi: 09:00-18:00",
      notes: "Vendredi: alternance selon la saison, consultez le calendrier local"
    },
    dressCode: "Maillot de bain modeste requis. Pour les femmes: maillots couvrant les épaules et jusqu'aux genoux. Pour les hommes: shorts de bain jusqu'aux genoux.",
    specialFacilities: [
      "Zones d'ombre séparées",
      "Vestiaires privés",
      "Personnel uniquement féminin pendant les heures réservées aux femmes",
      "Personnel uniquement masculin pendant les heures réservées aux hommes"
    ],
    specialRules: [
      "Pas de photographie pendant les heures séparées",
      "Pas d'appareils électroniques dans certaines zones",
      "Respect obligatoire des horaires de séparation"
    ]
  },
  {
    id: 102,
    name: "Separate Beach (Neve Midbar)",
    hebrewName: "חוף נפרד (נווה מדבר)",
    description: "La plage séparée de Neve Midbar propose des installations spécifiquement conçues pour les visiteurs religieux, avec une stricte séparation entre hommes et femmes à des jours désignés.",
    images: [
      "https://images.pexels.com/photos/10249151/pexels-photo-10249151.jpeg",
      "https://images.pexels.com/photos/8936845/pexels-photo-8936845.jpeg",
      "https://images.pexels.com/photos/358283/pexels-photo-358283.jpeg"
    ],
    location: {
      latitude: 31.7123,
      longitude: 35.4562,
      address: "Section plage séparée, Neve Midbar, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mercredi: 09:00-18:00 / Vendredi: 09:00-14:00",
      women: "Lundi, Jeudi: 09:00-18:00 / Mardi: 09:00-18:00",
      notes: "Fermé pendant Shabbat et certaines fêtes religieuses"
    },
    dressCode: "Tenue modeste obligatoire. Les femmes doivent porter des maillots couvrant les épaules, les bras jusqu'aux coudes et les jambes jusqu'aux genoux. Les hommes doivent porter des shorts de bain jusqu'aux genoux.",
    specialFacilities: [
      "Barrières visuelles élevées entre les sections",
      "Entrées séparées pour hommes et femmes",
      "Personnel exclusivement du même sexe que les visiteurs selon l'horaire",
      "Aires de prière désignées"
    ],
    specialRules: [
      "Interdiction stricte de traverser vers la section du sexe opposé",
      "Pas de musique forte",
      "Pas d'alcool",
      "Codes vestimentaires stricts même dans les zones de douche"
    ]
  },
  {
    id: 103,
    name: "Separate Beach (Kalia)",
    hebrewName: "חוף נפרד (קליה)",
    description: "La section séparée de la plage de Kalia offre une expérience respectueuse des traditions religieuses, avec des installations adaptées et un environnement préservant l'intimité.",
    images: [
      "https://images.pexels.com/photos/4388168/pexels-photo-4388168.jpeg",
      "https://images.pexels.com/photos/4388280/pexels-photo-4388280.jpeg",
      "https://images.pexels.com/photos/358283/pexels-photo-358283.jpeg"
    ],
    location: {
      latitude: 31.7696,
      longitude: 35.4615,
      address: "Section plage séparée, Kalia Beach, Route 90, Israël"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi: 09:00-13:00",
      women: "Dimanche, Mardi, Jeudi: 14:00-18:00 / Lundi, Mercredi: 09:00-18:00",
      notes: "Alternance spéciale pendant les fêtes religieuses, consultez le calendrier"
    },
    dressCode: "Tenue modeste obligatoire conformément aux exigences religieuses. Couverture complète recommandée en dehors des zones de baignade.",
    specialFacilities: [
      "Zones complètement séparées visuellement",
      "Casiers et vestiaires privés",
      "Espaces familiaux disponibles certains jours (consultez le calendrier)",
      "Personnel adapté selon les horaires hommes/femmes"
    ],
    specialRules: [
      "Respect strict des horaires de séparation",
      "Environnement calme et respectueux",
      "Restrictions alimentaires dans certaines zones (nourriture cachère uniquement)",
      "Observation du Shabbat dans toutes les installations"
    ]
  }
];

export const safetyTips = [
  {
    id: 1,
    title: "Évitez d'éclabousser",
    description: "L'eau de la Mer Morte est extrêmement salée et peut causer des douleurs intenses si elle entre en contact avec les yeux, le nez ou la bouche. Évitez absolument d'éclabousser et de plonger."
  },
  {
    id: 2,
    title: "Surveillez votre flottaison",
    description: "La forte concentration en sel rend le corps extrêmement flottant, ce qui peut être désorientant. Restez calme et maintenez une position stable, de préférence sur le dos."
  },
  {
    id: 3,
    title: "Attention aux coupures",
    description: "Même les petites coupures ou égratignures peuvent être douloureuses au contact de l'eau salée. Si vous avez des plaies ouvertes, il est préférable d'éviter la baignade ou de les protéger avec un pansement imperméable."
  },
  {
    id: 4,
    title: "Limitez votre temps de baignade",
    description: "Il est recommandé de ne pas rester dans l'eau plus de 20 minutes à la fois. L'immersion prolongée peut déshydrater la peau et provoquer des irritations."
  },
  {
    id: 5,
    title: "Buvez beaucoup d'eau",
    description: "La chaleur et le sel peuvent rapidement vous déshydrater. Buvez abondamment avant, pendant et après votre visite à la plage."
  },
  {
    
    id: 6,
    title: "Protégez-vous du soleil",
    description: "L'intensité du soleil est amplifiée par la réflexion sur l'eau et le sel. Utilisez une protection solaire à indice élevé (50+), portez un chapeau et des lunettes de soleil."
  }
];

export const practicalTips = [
  {
    id: 1,
    title: "Apportez des chaussures d'eau",
    description: "Les cristaux de sel peuvent être tranchants. Des chaussures d'eau protégeront vos pieds tout en facilitant la marche dans l'eau."
  },
  {
    id: 2,
    title: "Utilisez une serviette dédiée",
    description: "Le sel peut endommager les tissus. Apportez une serviette spécifique pour la Mer Morte que vous n'utiliserez pas ailleurs."
  },
  {
    id: 3,
    title: "Apportez une bouteille d'eau douce",
    description: "En cas d'éclaboussure dans les yeux, rincez immédiatement à l'eau douce. Gardez toujours une bouteille à portée de main."
  },
  {
    id: 4,
    title: "Protection solaire résistante à l'eau",
    description: "Choisissez une crème solaire très résistante à l'eau avec un indice SPF 50+ et réappliquez-la fréquemment."
  },
  {
    id: 5,
    title: "Évitez les bijoux métalliques",
    description: "Le sel peut ternir et endommager les métaux. Retirez tous vos bijoux avant de vous baigner."
  },
  {
    id: 6,
    title: "Prévoyez un après-shampoing",
    description: "Le sel peut assécher et abîmer les cheveux. Utilisez un après-shampoing hydratant après votre baignade."
  }
];

export const transportation = [
  {
    id: 1,
    fromCity: "Jérusalem",
    options: [
      {
        type: "Bus public",
        details: "Ligne 486 (environ 1h30), départ de la station centrale d'autobus",
        price: "~40 NIS par trajet",
        frequency: "Toutes les heures de 6h à 20h"
      },
      {
        type: "Tour organisé",
        details: "Plusieurs agences proposent des excursions d'une journée incluant d'autres sites",
        price: "200-400 NIS selon les inclusions",
        frequency: "Départs quotidiens, réservation recommandée"
      },
      {
        type: "Taxi",
        details: "Option plus coûteuse mais pratique pour les groupes",
        price: "~400-500 NIS par trajet",
        frequency: "Sur demande"
      }
    ]
  },
  {
    id: 2,
    fromCity: "Tel Aviv",
    options: [
      {
        type: "Bus public",
        details: "Ligne 421 jusqu'à Jérusalem puis ligne 486 (environ 2h30 au total)",
        price: "~60 NIS par trajet complet",
        frequency: "Plusieurs départs par jour"
      },
      {
        type: "Tour organisé",
        details: "Excursions d'une journée avec arrêts à Massada et Ein Gedi",
        price: "300-500 NIS selon les inclusions",
        frequency: "Départs quotidiens, réservation nécessaire"
      },
      {
        type: "Location de voiture",
        details: "Option flexible, environ 1h30 de route",
        price: "À partir de 150 NIS par jour + carburant",
        frequency: "À votre convenance"
      }
    ]
  },
  {
    id: 3,
    fromCity: "Eilat",
    options: [
      {
        type: "Bus public",
        details: "Ligne 444 (environ 2h30)",
        price: "~60 NIS par trajet",
        frequency: "3-4 départs par jour"
      },
      {
        type: "Tour organisé",
        details: "Excursions comprenant généralement un arrêt à Massada",
        price: "300-450 NIS",
        frequency: "Plusieurs fois par semaine"
      }
    ]
  }
];

export const shuttleServices = [
  {
    id: 1,
    name: "Ein Bokek Shuttle",
    routes: "Service entre les principaux hôtels d'Ein Bokek et les plages environnantes",
    schedule: "Toutes les 30 minutes de 8h à 18h",
    price: "Gratuit pour les clients des hôtels, 10 NIS pour les autres visiteurs"
  },
  {
    id: 2,
    name: "Dead Sea Spa Shuttle",
    routes: "Navette entre Jérusalem (Porte de Jaffa) et les principales plages de la Mer Morte",
    schedule: "Départs à 8h30 et 11h30, retours à 15h30 et 18h30",
    price: "80 NIS aller-retour, réservation requise"
  },
  {
    id: 3,
    name: "Kalia Beach Express",
    routes: "Service direct depuis la station centrale de Jérusalem vers la plage de Kalia",
    schedule: "Départs à 9h et 12h, retours à 16h et 19h",
    price: "65 NIS aller-retour"
  }
];