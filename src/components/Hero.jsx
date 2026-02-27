import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PrimaryButton from './base/PrimaryButton';

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="py-24 md:py-36 lg:py-0 lg:min-h-screen bg-black bg-[url(/src/assets/banner-mobile.png)] md:bg-[url(/src/assets/banner.png)] bg-no-repeat bg-cover flex text-white">
      <div className="flex-1 flex flex-col justify-center items-center max-w-lg mx-auto">
        <h1 className="text-center text-white">
          <Trans
            i18nKey="hero.title"
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </h1>
        <p className="pb-6 text-center text-white">{t('hero.subtitle')}</p>
        <div className="flex gap-4 mx-2 lg:mx-0">
          <PrimaryButton to="/submit" hasIcon={true}>
            {t('hero.ctaParticipate')}
          </PrimaryButton>
          <Link to="/events" className="button text-black bg-white">
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
