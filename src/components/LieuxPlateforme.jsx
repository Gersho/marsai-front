import { FiMapPin } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

function LieuxPlateforme() {
  const { t } = useTranslation();

  const salles = [
    {
      id: 1,
      title: t('lieuxPlateforme.salles.0.title'),
      text: t('lieuxPlateforme.salles.0.text'),
    },
    {
      id: 2,
      title: t('lieuxPlateforme.salles.1.title'),
      text: t('lieuxPlateforme.salles.1.text'),
    },
  ];
  return (
    <section className="text-white typography py-12 px-4 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between flex-col mb-6 lg:mb-12 lg:gap-60 lg:flex-row">
          <div className="">
            <div className="flex items-center gap-2 mb-6 text-accent lg:mb-12">
              <FiMapPin className="text-2xl" />
              <p className="uppercase text-4xl font-bold text-white md:text-2xl">
                {t('lieuxPlateforme.tag')}
              </p>
            </div>
            <h2 className="uppercase text-4xl font-bold mb-6 lg:mb-12 md:max-w-md md:text-7xl">
              {t('lieuxPlateforme.titlePart1')}{' '}
              <strong className="text-accent">
                {t('lieuxPlateforme.titlePart2')}
              </strong>
            </h2>
          </div>
          <p className="text-white">{t('lieuxPlateforme.description')}</p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-12 mb-4 lg:mb-12 md:flex-row">
          {salles.map((salle, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-back p-6 rounded-2xl"
            >
              <h3 className="text-3xl uppercase">{salle.title}</h3>
              <p className="text-dark">{salle.text}</p>
              <span className="block w-12 h-1 bg-accent"></span>
            </div>
          ))}
        </div>
        <div className="relative flex flex-col justify-end lg:min-h-80 px-4 py-12 bg-[url(/src/assets/lieux_img.png)] bg-no-repeat bg-cover rounded-2xl overflow-hidden shadow-xl lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
          <p className="relative z-10 text-white uppercase text-xs mb-4">
            {t('lieuxPlateforme.location1')}
          </p>
          <p className="relative z-10 text-white uppercase text-4xl">
            {t('lieuxPlateforme.location2')}
          </p>
        </div>
      </div>
    </section>
  );
}
export default LieuxPlateforme;
