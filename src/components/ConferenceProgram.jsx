import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import TitleSection from './base/TitleSection';
import { useApi } from '../hooks/useApi';
import { useFormatDate } from '../hooks/useFormatDate';
import SmallCard from './base/SmallCard';

function ConferenceProgram() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchApi = useApi();
  const { formatDate, formatTime } = useFormatDate();
  const { t, i18n } = useTranslation();
  const target = 'events.conference.';

  const currentLang = i18n.language.split('-')[0].toUpperCase();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetchApi(`/events?lang=${currentLang}`);
        if (response && response.ok) {
          const data = await response.json();
          // Filter events where is_bookable is false
          const filteredEvents = data.filter(
            event => event.is_bookable === false || event.is_bookable === 0
          );
          setEvents(filteredEvents);
        } else {
          setError(t(target + 'program.errorFetch'));
        }
      } catch (err) {
        setError(t(target + 'program.errorOccurred'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [fetchApi, t, currentLang]);

  return (
    <section className="section bg-primary">
      <div className="max-w-4xl mx-auto">
        <TitleSection
          hasUnderline
          underlineColor="bg-white"
          className="text-white mb-12"
        >
          <Trans
            i18nKey={target + "title"}
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </TitleSection>

        {loading && (
          <div className="text-white text-center py-12">
            {t(target + 'program.loading')}
          </div>
        )}

        {error && <div className="text-red-500 text-center py-12">{error}</div>}

        {!loading && !error && events.length === 0 && (
          <div className="text-white text-center py-12">
            {t(target + 'program.noEvents')}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {events.map((event, index) => (
            <SmallCard
              key={event.id}
              title={event.title}
              subtitle={formatTime(event.date)}
              date={`${formatDate(event.date)}`}
              duration={
                event.duration
                  ? t(target + 'program.duration') + event.duration + ' min'
                  : ''
              }
              label={event.description}
              hasUnderline={false}
              className={`text-white bg-secondary ${index === events.length - 1 ? 'col-span-2' : ''
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConferenceProgram;
