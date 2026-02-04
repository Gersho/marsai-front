import { TbTargetArrow } from 'react-icons/tb';
import { MdOutlineRocketLaunch } from 'react-icons/md';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useTranslation, Trans } from 'react-i18next';

function Objectif() {
    const { t } = useTranslation();
  
  const objectifsData = [
    {
      icon: <TbTargetArrow />,
      title: t("objectif.items.0.title"),
      text: t("objectif.items.0.text"),
    },
    {
      icon: <AiOutlineThunderbolt />,
      title: t("objectif.items.1.title"),
      text: t("objectif.items.1.text"),
    },
    {
      icon: <MdOutlineRocketLaunch />,
      title: t("objectif.items.2.title"),
      text: t("objectif.items.2.text"),
    },
  ];

  return (
    <section className="typography text-white py-12 lg:py-24" >
      <div className="max-w-5xl mx-auto">
        <div className='mb-12 px-4 lg:px-0'>
          <h2 className="uppercase text-4xl font-bold mb-4 md:max-w-lg md:text-5xl">
            <Trans
              i18nKey="objectif.title"
              components={[<strong className="text-accent" />]}
            />
          </h2>
          <span className='block w-24 h-1 bg-white'></span>
        </div>
        <div className="flex items-center gap-4 flex-col lg:flex-row">
          { objectifsData.map((obj, index) => (
            <div key={index} className=' bg-back rounded-md px-12 py-8 lg:py-12 mx-4 lg:mx-0'>
              <div className='text-accent text-5xl pb-4'>{obj.icon}</div>
              <h3 className='text-2xl lg:text-3xl pr-6 pb-4 uppercase'>{obj.title}</h3>
              <p className='text-dark text-md'>{obj.text}</p>
            </div>
          )) }
        </div>
      </div>
    </section>
  );
}

export default Objectif;
