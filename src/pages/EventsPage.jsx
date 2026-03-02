import TopPageTwo from '../components/base/TopPageTwo';
import PracticalInfos from '../components/PracticalInfos';
import ConferenceProgram from '../components/ConferenceProgram';
import AccessProgram from '../components/AccessProgram';
import Workshops from '../components/Workshops';
import { useApi } from '../hooks/useApi';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [bookableEvents, setBookableEvents] = useState([]);
  const [notBookableEvents, setNotBookableEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchApi = useApi();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0].toUpperCase();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetchApi(`/events?lang=${currentLang}`);
        if (response && response.ok) {
          const data = await response.json();
          const filteredNotBookableEvents = data.filter(
            event => event.is_bookable === false || event.is_bookable === 0
          );

          setNotBookableEvents(filteredNotBookableEvents);
          const filteredBookableEvents = data.filter(
            event => event.is_bookable === true || event.is_bookable === 1
          );
          setBookableEvents(filteredBookableEvents);
        } else {
          setError(t('program.errorFetch'));
        }
      } catch (err) {
        setError(t('program.errorOccurred'));
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [fetchApi, t, currentLang]);
  return (
    <>
      <TopPageTwo />
      <PracticalInfos />
      <ConferenceProgram
        data={notBookableEvents}
        loading={loading}
        error={error}
      />
      <Workshops data={bookableEvents} loading={loading} error={error} />
      <AccessProgram />
    </>
  );
}

export default EventsPage;
