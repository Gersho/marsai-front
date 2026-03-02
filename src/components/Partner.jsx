import { FaRegHandshake } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import marsai from '../assets/marsai-logo.svg';
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

        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-12 md:gap-18 lg:gap-24 md:py-12">
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
          <img src={marsai} alt="marsai" className="w-32" />
        </div>
      </div>
    </section>
  );
}

export default Partner;
