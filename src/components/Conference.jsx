import { TbMovie } from 'react-icons/tb';
import { BsCpu } from 'react-icons/bs';
import { LiaCertificateSolid } from 'react-icons/lia';
import { CiCalendar } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import PrimaryTag from './base/PrimaryTag';
import SecondaryTag from './base/SecondaryTag';
import TitleSection from './base/TitleSection';
import Card from './base/Card';

function Conference() {
  const { t } = useTranslation();
  const conferenceData = {
    list: [
      {
        id: 1,
        title: t('conference.list.0'),
      },
      {
        id: 2,
        title: t('conference.list.1'),
      },
      {
        id: 3,
        title: t('conference.list.2'),
      },
    ],
    listTwo: [
      {
        id: 1,
        icon: <TbMovie />,
        title: t('conference.listTwo.0.title'),
        text: t('conference.listTwo.0.text'),
      },
      {
        id: 2,
        icon: <BsCpu />,
        title: t('conference.listTwo.1.title'),
        text: t('conference.listTwo.1.text'),
      },
      {
        id: 3,
        icon: <LiaCertificateSolid />,
        title: t('conference.listTwo.2.title'),
        text: t('conference.listTwo.2.text'),
      },
    ],
  };
  return (
    <section className="section text-white bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="flex mb-8">
          <PrimaryTag>{t('conference.tag')}</PrimaryTag>
        </div>
        <TitleSection>
          <Trans
            i18nKey="conference.title"
            components={[<strong key="highlight" className="text-accent" />]}
          />
        </TitleSection>
        <ol className="space-y-4 mb-6 lg:mb-12">
          {conferenceData.list.map(l => (
            <li key={l.id} className="flex items-center gap-2">
              <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent text-white font-bold text-sm">
                {l.id}
              </span>
              {l.title}
            </li>
          ))}
        </ol>
        <div className="grid grid-cols-2 gap-2 mb-6 lg:mb-12">
          {conferenceData.listTwo.map((obj, index) => (
            <Card
              key={obj.id || index}
              icon={obj.icon}
              title={obj.title}
              subtitle=""
              text={obj.text}
              hasUnderline={false}
              className={`bg-secondary hover:opacity-75 ${index === 2 && 'col-span-2 '}`}
            />
          ))}
        </div>
        <div className="relative flex flex-col items-start px-4 py-12 bg-[url(/src/assets/conference_img.png)] bg-no-repeat bg-cover bg-position-[center_top_-240px] rounded-2xl overflow-hidden shadow-xl md:flex-row md:items-center md:justify-between lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
          <div className="relative z-10 mb-12 lg:mb-0">
            <div className="flex mb-8">
              <SecondaryTag>{t('conference.closingCeremony.tag')}</SecondaryTag>
            </div>
            <p className="uppercase text-7xl font-extrabold max-w-lg mb-6 text-white">
              {t('conference.closingCeremony.title')}
            </p>
            <p className="text-white max-w-md">
              {t('conference.closingCeremony.text')}
            </p>
          </div>
          <div className="relative z-10 bg-white flex flex-col items-center gap-4 p-4 rounded-2xl">
            <CiCalendar className="text-primary text-4xl" />
            <p className="text-5xl text-black font-extrabold uppercase">
              {t('conference.closingCeremony.date')}
            </p>
            <p className="text-accent uppercase">
              {t('conference.closingCeremony.time')}
            </p>
            <div className="flex">
              <Link
                to={'/'}
                className="uppercase button flex items-center gap-2 bg-accent text-white"
              >
                {t('conference.closingCeremony.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Conference;
