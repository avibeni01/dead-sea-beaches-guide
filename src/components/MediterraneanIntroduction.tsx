import React from 'react';

const MediterraneanIntroduction: React.FC = () => {
  return (
    <section id="mediterranean-introduction" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            La Méditerranée Israélienne: Un Joyau de Beauté et de Diversité
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              Avec plus de 270 kilomètres de côtes bordant la mer Méditerranée, Israël offre une diversité remarquable de plages, allant des rivages urbains animés de Tel Aviv aux criques naturelles préservées. Le climat méditerranéen, caractérisé par des étés chauds et secs et des hivers doux, permet de profiter de ces plages presque toute l'année.
            </p>
            
            <p className="mb-4 text-gray-700">
              Les plages israéliennes se distinguent par leur sable doré fin, leurs eaux cristallines aux nuances de bleu et de turquoise, et leurs infrastructures modernes. Qu'il s'agisse de se détendre au soleil, de pratiquer des sports nautiques ou de profiter de la vie nocturne en bord de mer, la côte méditerranéenne d'Israël a quelque chose à offrir à chaque visiteur.
            </p>
            
            <p className="mb-6 text-gray-700">
              Ce guide vous présente les 20 plus belles plages de la côte méditerranéenne israélienne, chacune avec ses particularités et son charme unique. Des plages urbaines de Tel Aviv aux réserves naturelles plus isolées, en passant par les magnifiques étendues de sable de Netanya, Herzliya, Ashdod et Ashkelon, découvrez toute la richesse du littoral israélien.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-100 mb-6">
              <h3 className="text-xl font-semibold text-rose-800 mb-3">Le saviez-vous?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Les plages de Tel Aviv sont régulièrement classées parmi les meilleures plages urbaines au monde.</li>
                <li>• La côte méditerranéenne israélienne abrite plusieurs sites archéologiques sous-marins, notamment à Césarée.</li>
                <li>• La saison de baignade s'étend généralement d'avril à novembre, avec une eau atteignant 28°C en été.</li>
                <li>• Israël compte plus de 50 plages officiellement reconnues avec surveillance et infrastructures.</li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                <div className="md:w-1/2 mb-4 md:mb-0">
                <img 
                  src="https://images.pexels.com/photos/31712449/pexels-photo-31712449.jpeg" 
                  alt="Vue panoramique de Tel Aviv et sa plage" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
                </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Comment profiter au maximum des plages méditerranéennes</h3>
                <p className="text-gray-700">
                  Pour une expérience optimale, prévoyez votre visite au printemps (avril à juin) ou en automne (septembre à octobre), lorsque les températures sont agréables et les plages moins fréquentées. Les matinées offrent généralement une mer plus calme, idéale pour la baignade, tandis que les après-midis sont parfaits pour les sports nautiques profitant de la brise marine. N'oubliez pas qu'en plein été (juillet-août), les températures peuvent être très élevées et les plages particulièrement bondées, surtout le week-end.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg border border-pink-100">
              <h3 className="text-xl font-semibold text-rose-800 mb-3 text-center">Les différentes régions côtières</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-rose-700 mb-2">Tel Aviv et centre</h4>
                  <p className="text-sm text-gray-600">Plages urbaines animées avec excellentes infrastructures, activités et vie nocturne. Idéal pour les voyageurs recherchant une combinaison de plage et d'ambiance citadine.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-orange-700 mb-2">Herzliya et Netanya</h4>
                  <p className="text-sm text-gray-600">Plages plus spacieuses et moins bondées, avec un excellent équilibre entre nature et commodités. Parfait pour les familles et ceux qui préfèrent un rythme plus détendu.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-pink-700 mb-2">Haïfa et nord</h4>
                  <p className="text-sm text-gray-600">Mélange de plages urbaines et de réserves naturelles, offrant des paysages plus diversifiés et souvent moins touristiques. Idéal pour les amoureux de la nature et d'authenticité.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediterraneanIntroduction;