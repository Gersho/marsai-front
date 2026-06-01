import { FaRegHandshake } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import partners from '../assets/partners/index.js';
import TitleSection from './base/TitleSection';
function Partner() {
  const { t } = useTranslation();
  const target = 'home.partner.';
  return (
    <section className="section text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <FaRegHandshake className="text-2xl text-accent" />
          <p className="text-white uppercase text-lg">{t(target + 'tag')}</p>
        </div>
        <TitleSection className="mx-auto text-center">
          <Trans
            i18nKey={target + 'title'}
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </TitleSection>

        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-12 md:gap-18 lg:gap-24 md:py-12">
          <img src={partners.brooklynStoryLab} alt="marsai" className="w-48" />
          <img src={partners.cnc} alt="marsai" className="w-48" />
          <img src={partners.creativeAi} alt="marsai" className="w-48" />
          <img src={partners.humec} alt="marsai" className="w-48" />
          <img src={partners.extraCourt} alt="marsai" className="w-48" />
          <img src={partners.laPlateforme} alt="marsai" className="w-48" />
          <img src={partners.leProjetImagine} alt="marsai" className="w-48" />
          <img src={partners.lhc} alt="marsai" className="w-48" />
          <img src={partners.shortForChange} alt="marsai" className="w-48" />
        </div>
      </div>
    </section>
  );
}

export default Partner;
