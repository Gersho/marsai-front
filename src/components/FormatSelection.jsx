import { useTranslation } from 'react-i18next';
import SecondaryButton from './base/SecondaryButton';
import TitleSection from './base/TitleSection';
import Card from './base/Card';

function FormatSelection() {
  const { t } = useTranslation();
  const target = 'home.formatSelection.';
  const formatSelectionData = [
    {
      id: 1,
      title: t(target + 'items.0.title'),
      subtitle: t(target + 'items.0.subtitle'),
      text: t(target + 'items.0.text'),
    },
    {
      id: 2,
      title: t(target + 'items.1.title'),
      subtitle: t(target + 'items.1.subtitle'),
      text: t(target + 'items.1.text'),
    },
    {
      id: 3,
      title: t(target + 'items.2.title'),
      subtitle: t(target + 'items.2.subtitle'),
      text: t(target + 'items.2.text'),
    },
    {
      id: 4,
      title: t(target + 'items.3.title'),
      subtitle: t(target + 'items.3.subtitle'),
      text: t(target + 'items.3.text'),
    },
  ];
  return (
    <section className="section text-white ">
      <div className="max-w-5xl mx-auto">
        <TitleSection className="mx-auto text-center">
          {t(target + 'title')}
        </TitleSection>
        <p className="uppercase text-dark text-center mb-6 lg:mb-12">
          {t(target + 'subtitle')}
        </p>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 mb-6 lg:mb-12">
          {formatSelectionData.map(obj => (
            <Card
              key={obj.id}
              icon={obj.icon}
              title={obj.title}
              subtitle={obj.subtitle}
              text={obj.text}
              hasUnderline={false}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <SecondaryButton to="/submit">
            {t(target + 'ctaParticipate')}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
export default FormatSelection;
