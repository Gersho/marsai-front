import { MdLocalMovies } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { FaUsersCog } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const SectionProjet = () => {
  const { t } = useTranslation();
  const projectsData = [
    {
      id: 1,
      icon: <MdLocalMovies />,
      title: t('projet.items.oneMinute.title'),
      text: t('projet.items.oneMinute.text'),
    },
    {
      id: 2,

      icon: <FaBookOpen />,
      title: t('projet.items.free.title'),
      text: t('projet.items.free.text'),
    },
    {
      id: 3,
      icon: <CiUser />,
      title: t('projet.items.forEveryone.title'),
      text: t('projet.items.forEveryone.text'),
    },
    {
      id: 4,
      icon: <FaUsersCog />,
      title: t('projet.items.expertise.title'),
      text: t('projet.items.expertise.text'),
    },
  ];
  return (
    <section className="typography py-12 px-4 lg:py-24 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 px-4 lg:px-0">
          <h2 className="uppercase text-4xl font-bold mb-4 md:max-w-lg md:text-5xl">
            <span>{t('projet.title')}</span>
          </h2>
          <span className="block w-24 h-1 bg-accent"></span>
        </div>
        <div className="flex gap-2 flex-col lg:flex-row">
          {projectsData.map((obj, index) => (
            <div
              key={obj.id}
              className="flex-1 bg-back rounded-md px-8 py-8 lg:py-12 mx-4 lg:mx-0"
            >
              <div className="text-accent text-5xl pb-4">{obj.icon}</div>
              <h3 className="text-2xl lg:text-2xl pr-6 pb-4 uppercase">
                {obj.title}
              </h3>
              <p className="text-dark text-md">{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjet;
