import { BsStars } from 'react-icons/bs';
import { LuMapPin } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import TitleSection from './base/TitleSection';
import Card from './base/Card';

function PracticalInfos() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-2 items-center uppercase mb-6">
          <BsStars className="text-amber-400 text-5xl" />
          <h4 className="text-white font-thin text-lg">
            {t('navbar.programmeInfo')}
          </h4>
        </div>
        <TitleSection
          hasUnderline
          underlineColor="bg-white"
          className="text-white mb-8"
        >
          {t('conference.closingCeremony.date')} 2026{' '}
          <strong className="text-accent">Marseille</strong>
        </TitleSection>
        <Card
          icon={<LuMapPin />}
          title={`${t('lieuxPlateforme.titlePart1')} ${t('lieuxPlateforme.titlePart2')}`}
          text={t('lieuxPlateforme.description')}
          hasUnderline
          underlineColor="bg-accent"
          className="text-white mb-12"
        />
      </div>
    </section>
  );
}

export default PracticalInfos;
