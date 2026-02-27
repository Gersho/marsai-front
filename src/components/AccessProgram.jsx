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
  const target = 'events.access.';

  return (
    <section className="section">
      <div className="max-w-4xl mx-auto">
        <TitleSection
          hasUnderline
          underlineColor="bg-accent"
          className="text-white"
        >
          {t(target + 'title')}
        </TitleSection>
        <div className=" flex flex-col gap-4">
          <AccessCard
            icon={<FaBusAlt />}
            title={t(target + 'publicTransport.title')}
            subtitle={t(target + 'publicTransport.subtitle')}
          />
          <AccessCard
            icon={<FaCarSide />}
            title={t(target + 'car.title')}
            subtitle={t(target + 'car.subtitle')}
          />
          <AccessCard
            icon={<MdNearMe />}
            title={t(target + 'address.title')}
            subtitle={t(target + 'address.subtitle')}
          />
        </div>
      </div>
    </section>
  );
}

export default AccessProgram;
