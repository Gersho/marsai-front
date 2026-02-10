import { TbWorld } from 'react-icons/tb';
import { RiMovie2Line } from 'react-icons/ri';
import { useTranslation, Trans } from 'react-i18next';
import TitleSection from './base/TitleSection';

function StatisticalSection() {
  const { t } = useTranslation();
  return (
    <section className="section text-white bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <div className="">
            <TitleSection hasUnderline underlineColor="bg-white">
              <Trans
                i18nKey="chiffres.title"
                components={[
                  <strong key="highlight" className="text-accent" />,
                ]}
              />
            </TitleSection>
            <p className="text-white max-w-sm mb-6">
              {t('chiffres.description')}
            </p>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-secondary p-4 text-white rounded-xl hover:opacity-75">
              <span className="block text-accent text-2xl pb-4">
                <TbWorld />
              </span>
              <h3 className="text-white uppercase">+120</h3>
              <p className="text-white">{t('chiffres.countriesRepresented')}</p>
            </div>
            <div className="flex-1 bg-secondary p-4 text-white rounded-xl hover:opacity-75">
              <span className="block text-accent text-2xl pb-4">
                <RiMovie2Line />
              </span>
              <h3 className="text-white uppercase ">+600</h3>
              <p className="text-white">{t('chiffres.filmsSubmitted')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default StatisticalSection;
