import React, { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import EventRow from './base/EventRow';
import { Link } from 'react-router-dom';

function EventsManager() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = useApi();


  const [activeFilter, setActiveFilter] = useState("A Venir");
  const tabs = ["A Venir", "Passé", "Tous"];

  useEffect(() => {
    const fetchEvents = async (lang) => {
      try {
        const response = await api(`/events?lang=${lang}`);
        if (response && response.ok) {
          const data = await response.json();
          setEvents((prev) => {
            return prev.concat(data);
          });
        } else {
          setError("Une erreur est survenue");
        }
      } catch (err) {
        setError("Une erreur est survenue");
        console.error(err);
      }
    };
    const getEvents = async () => {
      await fetchEvents("FR");
      await fetchEvents("EN");
      setEvents((prev) => {
        return prev.sort((a, b) => new Date(a.date) - new Date(b.date));
      })
    }
    getEvents();
  }, [api]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-secondary text-white rounded-xl shadow-2xl">
      <div className='flex flex-row justify-between'>


        <h1 className="text-3xl font-bold mb-6 text-white border-b border-indigo-200 pb-3">
          Gestion des Événements du Festival
        </h1>
        <Link
          to={'add'}
          className="uppercase button flex  items-center gap-2 bg-accent text-white"
        >
          Ajouter
        </Link>
      </div>

      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`py-2 px-4 text-base font-medium transition duration-150 ease-in-out 
                ${activeFilter === tab
                  ? 'border-b-4 border-indigo-600 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700 '
                }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-4">
        {/* <p className='text-black'> {events.length}</p> */}
        {events.length > 0 ?

          (

            events.map((event, index) => (
              <EventRow key={index} event={event} />
            ))) : (
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
