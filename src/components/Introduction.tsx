import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            La Mer Morte: Un Trésor Naturel Unique
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              Située à 430 mètres sous le niveau de la mer, la Mer Morte est le point le plus bas de la Terre. Ses eaux, dix fois plus salées que les océans, créent un environnement unique où il est impossible de couler, offrant l'expérience de flottaison la plus naturelle au monde.
            </p>
            
            <p className="mb-4 text-gray-700">
              Riche en minéraux comme le magnésium, le calcium et le potassium, ses eaux et sa boue sont reconnues depuis l'Antiquité pour leurs propriétés thérapeutiques. Elles sont particulièrement bénéfiques pour les personnes souffrant de problèmes dermatologiques, d'affections articulaires et respiratoires.
            </p>
            
            <p className="mb-6 text-gray-700">
              Ce guide vous présente les 10 plus belles plages de la Mer Morte, chacune avec ses spécificités et ses avantages. Que vous recherchiez un cadre luxueux, une expérience authentique ou des installations adaptées à vos besoins religieux, vous trouverez ici toutes les informations nécessaires pour planifier votre visite.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100 mb-6">
              <h3 className="text-xl font-semibold text-rose-800 mb-3">Le saviez-vous?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• La Mer Morte n'est pas une mer mais un lac hypersalin.</li>
                <li>• Sa salinité est d'environ 34%, soit près de 10 fois celle des océans.</li>
                <li>• La Mer Morte rétrécit d'environ 1 mètre par an en raison de l'évaporation.</li>
                <li>• Les rayons UV sont filtrés par la couche d'évaporation et la brume qui se forme au-dessus de l'eau, réduisant les risques de coup de soleil.</li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/1194408/pexels-photo-1194408.jpeg" 
                  alt="Man wearing sunglasses reading book on body of water" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comment profiter au maximum de votre visite</h3>
                <p className="text-gray-700">
                  Pour une expérience optimale, prévoyez votre visite au printemps (mars à mai) ou en automne (septembre à novembre), lorsque les températures sont plus clémentes. Évitez l'été, où la chaleur peut atteindre des niveaux extrêmes. Apportez des chaussures d'eau, une protection solaire à indice élevé, et de l'eau en quantité suffisante. Limitez votre temps de baignade à 20 minutes par session, et prévoyez une douche à l'eau douce après chaque baignade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;