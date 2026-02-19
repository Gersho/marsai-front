import { AiFillThunderbolt } from 'react-icons/ai';
import TitleSection from './base/TitleSection';
import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import SecondaryButton from './base/SecondaryButton';
function CardWorkshop({
  time,
  title,
  text,
  disponibility,
  path,
  className = '',
}) {
  return (
    <div
      className={`flex-1 bg-primary rounded-md px-2 py-8 lg:px-8 lg:py-12 lg:mx-0 ${className}`}
    >
      <div className="text-accent text-lg pb-4">{time}</div>
      <h3 className="pr-6 uppercase">{title}</h3>
      <p className="text-dark pb-12">{text}</p>
      <div className="flex items-center justify-between mb-6">
        <p className="text-dark">Disponibilié:</p>
        <h4 className="uppercase text-accent text-xs">{disponibility}</h4>
      </div>
      <SecondaryButton
        to={'/events/' + path}
        hasIcon={false}
        className="justify-center"
      >
        Réserver ma place
      </SecondaryButton>
    </div>
  );
}
function Workshops() {
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
          const filteredEvents = data.filter(
            event => event.is_bookable === true || event.is_bookable === 1
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
    <section className="section bg-primary text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-2 items-center uppercase mb-6">
          <AiFillThunderbolt className="text-amber-400 text-4xl" />
          <h4 className="font-thin text-lg">Ateliers Pratiques</h4>
        </div>
        <TitleSection
          hasUnderline
          underlineColor="bg-white"
          className="mb-8 uppercase"
        >
          Workshops
          <strong className="text-accent"> IA Créative</strong>
        </TitleSection>
        <p className="max-w-2xl mb-6">
          Passez de la théorie à la pratique avec les meilleurs experts
          internationaux. Attention, places très limitées (max 15 par session).
        </p>
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
          {events.map(event => (
            <CardWorkshop
              key={event.id}
              path={event.id}
              time={`${new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
              title={event.title}
              text={event.description}
              disponibility={'10 places restantes'}
              className={`text-white bg-secondary`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Workshops;
