import { TbWorld } from 'react-icons/tb';
import { RiMovie2Line } from 'react-icons/ri';
import { useTranslation, Trans } from 'react-i18next';

function Chiffres() {
  const { t } = useTranslation();
  return (
    <section className="typography py-12 px-4 lg:py-24 text-white bg-back">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1/3">
            <h2 className="uppercase text-4xl font-bold mb-4 lg:mb-8 md:max-w-3xl md:text-5xl">
              <Trans
                i18nKey="chiffres.title"
                components={[
                  <strong key="highlight" className="text-accent" />,
                ]}
              />
            </h2>
            <p className="text-white max-w-sm">{t('chiffres.description')}</p>
          </div>
          <div className="flex-1 bg-bg p-4 text-white rounded-xl hover:opacity-75">
            <span className="block text-accent text-2xl pb-4">
              <TbWorld />
            </span>
            <h3 className="text-white uppercase text-xl mb-4">+120</h3>
            <p className="text-white">{t('chiffres.countriesRepresented')}</p>
          </div>
          <div className="flex-1 bg-bg p-4 text-white rounded-xl hover:opacity-75">
            <span className="block text-accent text-2xl pb-4">
              <RiMovie2Line />
            </span>
            <h3 className="text-white uppercase text-xl mb-4">+600</h3>
            <p className="text-white">{t('chiffres.filmsSubmitted')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Chiffres;
