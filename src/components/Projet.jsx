import { MdLocalMovies } from 'react-icons/md';
import { FaBookOpen } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
import { FaUsersCog } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import TitleSection from './base/TitleSection';
import Card from './base/Card';

const SectionProjet = () => {
  const { t } = useTranslation();
  const target = 'home.projet.';
  const projectsData = [
    {
      id: 1,
      icon: <MdLocalMovies />,
      title: t(target + 'items.oneMinute.title'),
      text: t(target + 'items.oneMinute.text'),
    },
    {
      id: 2,
      icon: <FaBookOpen />,
      title: t(target + 'items.free.title'),
      text: t(target + 'items.free.text'),
    },
    {
      id: 3,
      icon: <CiUser />,
      title: t(target + 'items.forEveryone.title'),
      text: t(target + 'items.forEveryone.text'),
    },
    {
      id: 4,
      icon: <FaUsersCog />,
      title: t(target + 'items.expertise.title'),
      text: t(target + 'items.expertise.text'),
    },
  ];
  return (
    <section className="section text-white">
      <div className="max-w-5xl mx-auto">
        <TitleSection hasUnderline={true} underlineColor="bg-accent">
          {t(target + 'title')}
        </TitleSection>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {projectsData.map(obj => (
            <Card
              key={obj.id}
              icon={obj.icon}
              title={obj.title}
              subtitle=""
              text={obj.text}
              hasUnderline={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjet;
