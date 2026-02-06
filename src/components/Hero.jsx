import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="typography py-24  md:py-36 lg:py-0 lg:min-h-screen bg-black bg-[url(/src/assets/banner-mobile.png)] md:bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover flex text-white">
      <div className="flex-1 flex flex-col justify-center items-center max-w-lg mx-auto">
        <h1 className="uppercase text-center text-4xl md:text-6xl pb-4 text-white">
          <Trans
            i18nKey="hero.title"
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </h1>
        <p className="pb-6 text-center text-white">{t('hero.subtitle')}</p>
        <div className="flex gap-4 mx-2 lg:mx-0">
          <Link
            to="/movies"
            className="button flex items-center gap-2  text-white bg-accent"
          >
            {t('hero.ctaParticipate')}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
          <Link to="/programme-infos" className="button text-black bg-white">
            <Trans
              i18nKey="hero.ctaLearn_more"
              components={[<strong key="highlight" className="text-accent" />]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hero;
