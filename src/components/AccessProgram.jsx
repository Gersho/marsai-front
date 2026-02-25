import TitleSection from '../components/base/TitleSection';
import { FaBusAlt } from 'react-icons/fa';
import { FaCarSide } from 'react-icons/fa';
import { MdNearMe } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

function AccessCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-6 p-4 rounded-xl bg-primary">
      {icon && <div className="text-5xl text-white">{icon}</div>}
      <div>
        <h3 className="text-white">{title}</h3>
        <p className="text-dark">{subtitle}</p>
      </div>
    </div>
  );
}
function AccessProgram() {
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <TitleSection
          hasUnderline
          underlineColor="bg-accent"
          className="text-white"
        >
          {t('access.title')}
        </TitleSection>
        <div className=" flex flex-col gap-4">
          <AccessCard
            icon={<FaBusAlt />}
            title={t('access.publicTransport.title')}
            subtitle={t('access.publicTransport.subtitle')}
          />
          <AccessCard
            icon={<FaCarSide />}
            title={t('access.car.title')}
            subtitle={t('access.car.subtitle')}
          />
          <AccessCard
            icon={<MdNearMe />}
            title={t('access.address.title')}
            subtitle={t('access.address.subtitle')}
          />
        </div>
      </div>
    </section>
  );
}

export default AccessProgram;
