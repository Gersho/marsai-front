import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import TitleSection from './base/TitleSection';
import { useApi } from '../hooks/useApi';
import SmallCard from './base/SmallCard';

function ConferenceProgram() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchApi = useApi();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetchApi('/events');
        if (response && response.ok) {
          const data = await response.json();
          // Filter events where is_bookable is false
          const filteredEvents = data.filter(
            event => event.is_bookable === false || event.is_bookable === 0
          );
          setEvents(filteredEvents);
        } else {
          setError('Failed to fetch events');
        }
      } catch (err) {
        setError('An error occurred while fetching events');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [fetchApi]);

  return (
    <section className="section bg-primary">
      <div className="max-w-5xl mx-auto">
        <TitleSection
          hasUnderline
          underlineColor="bg-white"
          className="text-white mb-12"
        >
          <Trans
            i18nKey="conference.title"
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </TitleSection>

        {loading && (
          <div className="text-white text-center py-12">
            Chargement des conférences...
          </div>
        )}

        {error && <div className="text-red-500 text-center py-12">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div className="text-white text-center py-12">
            Aucune conférence programmée pour le moment.
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {events.map((event, index) => (
            <SmallCard
              key={event.id}
              title={event.title}
              subtitle={`${new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
              label={event.description}
              hasUnderline={false}
              className={`text-white bg-secondary ${
                index === events.length - 1 ? 'col-span-2' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConferenceProgram;
