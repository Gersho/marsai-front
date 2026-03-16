import { FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import Card from './base/Card';

function PlacePlateforme() {
  const { t } = useTranslation();
  const target = 'home.lieuxPlateforme.';

  const salles = [
    {
      id: 1,
      title: t(target + 'salles.0.title'),
      text: t(target + 'salles.0.text'),
    },
    {
      id: 2,
      title: t(target + 'salles.1.title'),
      text: t(target + 'salles.1.text'),
    },
  ];
  return (
    <section className="text-white section">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between flex-col mb-6 lg:mb-12 lg:gap-60 lg:flex-row">
          <div className="">
            <div className="flex items-center gap-2 mb-6 text-accent lg:mb-12">
              <FiMapPin className="text-2xl" />
              <p className="uppercase text-4xl font-bold text-white md:text-2xl">
                {t(target + 'tag')}
              </p>
            </div>
            <h2 className="uppercase text-4xl font-bold mb-6 lg:mb-12 md:max-w-md md:text-7xl">
              {t(target + 'titlePart1')}{' '}
              <strong className="text-accent">
                {t(target + 'titlePart2')}
              </strong>
            </h2>
          </div>
          <p className="text-white">{t(target + 'description')}</p>
        </div>
        <div className="flex flex-col gap-2 mb-4 lg:mb-12 md:flex-row">
          {salles.map(obj => (
            <Card
              key={obj.id}
              icon=""
              title={obj.title}
              subtitle=""
              text={obj.text}
              hasUnderline={true}
            />
          ))}
        </div>
        <div className="relative flex flex-col justify-end lg:min-h-80 px-4 py-12 bg-[url(/src/assets/lieux_img.png)] bg-no-repeat bg-cover rounded-2xl overflow-hidden shadow-xl lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <p className="relative z-10 text-white uppercase text-xs mb-4">
            {t(target + 'location1')}
          </p>
          <p className="relative z-10 text-white uppercase text-4xl">
            {t(target + 'location2')}
          </p>
        </div>
      </div>
    </section>
  );
}
export default PlacePlateforme;
