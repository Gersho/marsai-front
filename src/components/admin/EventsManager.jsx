  import React, { useState } from 'react';

// --- Données d'Événements Statiques ---
const FESTIVAL_EVENTS = [
  {
    id: 1,
    title: "Cérémonie d'Ouverture & Projection IA",
    date: "2026-07-15",
    time: "19:00",
    location: "Grand Cinéma Lumière",
    type: "Gala & Projection",
    status: "A Venir",
    category: "100% IA"
  },
  {
    id: 2,
    title: "Masterclass: Réalisation Hybride",
    date: "2026-07-16",
    time: "10:00",
    location: "Salle de Conférence Alpha",
    type: "Conférence",
    status: "A Venir",
    category: "Hybride"
  },
  {
    id: 3,
    title: "Conférence : Éthique de l'IA dans le Cinéma",
    date: "2026-07-16",
    time: "14:30",
    location: "Salle de Conférence Alpha",
    type: "Conférence",
    status: "A Venir",
    category: "Général"
  },
  {
    id: 4,
    title: "Projection Compétition Hybride",
    date: "2026-07-17",
    time: "20:30",
    location: "Petit Studio 2",
    type: "Projection",
    status: "A Venir",
    category: "Hybride"
  },
  {
    id: 5,
    title: "Soirée de Clôture & Palmarès",
    date: "2026-07-18",
    time: "19:30",
    location: "Grand Cinéma Lumière",
    type: "Gala & Palmarès",
    status: "A Venir",
    category: "Général"
  },
  {
    id: 6,
    title: "Hackathon du Scénario IA",
    date: "2026-06-01",
    time: "09:00",
    location: "La Plateforme",
    type: "Atelier",
    status: "Passé",
    category: "100% IA"
  }
];

// Composant utilitaire pour le badge de catégorie/statut
const StatusBadge = ({ status, category }) => {
  let classes = "";
  if (status === "A Venir") {
    classes = "bg-indigo-100 text-indigo-700 font-semibold";
  } else if (status === "Passé") {
    classes = "bg-gray-100 text-gray-500 font-medium";
  }

  let categoryClasses = "";
  if (category === "100% IA") {
    categoryClasses = "bg-blue-500 text-white";
  } else if (category === "Hybride") {
    categoryClasses = "bg-green-500 text-white";
  } else {
    categoryClasses = "bg-gray-500 text-white";
  }

  return (
    <div className="flex space-x-2">
      <span className={`px-2 py-0.5 text-xs rounded ${classes}`}>
        {status}
      </span>
      <span className={`px-2 py-0.5 text-xs rounded ${categoryClasses}`}>
        {category}
      </span>
    </div>
  );
};


function EventsManager() {
  const [activeFilter, setActiveFilter] = useState("A Venir");

  // Filtre les événements basés sur l'onglet actif
  const filteredEvents = FESTIVAL_EVENTS.filter(event => {
    if (activeFilter === "Tous") {
      return true;
    }
    return event.status === activeFilter;
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Trie par date

  const tabs = ["A Venir", "Passé", "Tous"];

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white border-b border-indigo-200 pb-3">
        Gestion des Événements du Festival
      </h1>

      {/* Barre de navigation des filtres (Tabs) */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`py-2 px-4 text-base font-medium transition duration-150 ease-in-out 
                ${activeFilter === tab
                  ? 'border-b-4 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Liste des Événements */}
      <div className="space-y-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-white dark:bg-gray-700">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <StatusBadge status={event.status} category={event.category} />
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-semibold text-indigo-500">Date:</span> {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <div className="flex flex-wrap gap-x-6 text-sm text-gray-500 dark:text-gray-400">
                <p>
                  <span className="font-medium">Heure:</span> {event.time}
                </p>
                <p>
                  <span className="font-medium">Lieu:</span> {event.location}
                </p>
                <p>
                  <span className="font-medium">Type:</span> {event.type}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-10 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-lg text-gray-500 dark:text-gray-400 italic">
              Aucun événement trouvé pour la catégorie "{activeFilter}".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventsManager;
