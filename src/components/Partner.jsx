import { FaRegHandshake } from 'react-icons/fa';
import { Trans, useTranslation } from 'react-i18next';
import marsai from '../assets/marsai-logo.svg';
function Partner() {
  const { t } = useTranslation();
  return (
    <section className="typography py-12 px-4 lg:py-24 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center gap-2 mb-4">
          <FaRegHandshake className="text-2xl text-accent" />
          <p className="text-white uppercase text-lg">{t('partner.tag')}</p>
        </div>
        <h2 className="uppercase text-center text-4xl font-bold mb-18 lg:mb-24">
          <Trans
            i18nKey="partner.title"
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-12 md:gap-18 lg:gap-24">
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
