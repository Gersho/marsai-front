import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import TitleSection from './base/TitleSection';
import { useApi } from '../hooks/useApi';
import { useFormatDate } from '../hooks/useFormatDate';
import SmallCard from './base/SmallCard';

function ConferenceProgram({ data, error, loading }) {
  const { formatDate, formatTime } = useFormatDate();
  const { t, i18n } = useTranslation();
  const target = "events.conference.";
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

        {!loading && !error && data.length === 0 && (
          <div className="text-white text-center py-12">
            {t(target + 'program.noEvents')}
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          {data.map((event, index) => (
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
              className={`text-white bg-secondary ${index === data.length - 1 ? 'col-span-2' : ''
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConferenceProgram;
