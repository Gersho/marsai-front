import { IoMdPlay } from 'react-icons/io';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation, Trans } from 'react-i18next';

const films = [
  {
    id: 1,
    title: 'titre du film 1',
    director: 'Adnen SAID',
    duration: '60s',
    category: ['Sora', 'Chatgpt'],
    pays: 'France',
  },
  {
    id: 2,
    title: 'titre du film 2',
    director: 'Aly BALL',
    duration: '60s',
    category: ['Sora', 'Chatgpt'],
    pays: 'Italy',
  },
  {
    id: 3,
    title: 'titre du film 3',
    director: 'Jhon DUPONT',
    duration: '60s',
    category: ['Sora', 'Chatgpt'],
    pays: 'Tunisie',
  },
];

const FilmsCompetition = () => {
  const { t } = useTranslation();
  return (
    <section className="typography py-12 px-4 lg:py-24 text-white bg-back">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="flex text-xs font-bold tracking-[0.2em] uppercase gap-2 mb-3">
            <IoMdPlay className="text-accent" />{' '}
            {t('filmsCompet.previewSelection')}
          </span>
          <div className="mb-12 px-4 lg:px-0">
            <h2 className="uppercase text-4xl font-bold mb-4 md:max-w-lg md:text-5xl">
              <Trans
                i18nKey="filmsCompet.title"
                components={[
                  <strong key="highlight" className="text-accent" />,
                ]}
              />
            </h2>
            <span className="block w-24 h-1 bg-white"></span>
          </div>

          <p className="text-white">{t('filmsCompet.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {films.map(film => (
            <div key={film.id} className="group cursor-pointer">
              <div className="relative aspect-video bg-[#27272A] rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-300 mb-5">
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition">
                  <IoMdPlay
                    className="text-white/20 group-hover:text-white group-hover:scale-110 transition duration-300"
                    size={40}
                  />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-md text-white">
                  {film.duration}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-gray-300 transition">
                    {film.title}
                  </h3>
                  <div className="text-sm text-gray-400">
                    <span className="block text-xs uppercase text-gray-600 mb-0.5">
                      {t('filmsCompet.directorLabel')}
                    </span>
                    {film.director}
                  </div>
                </div>
                {film.category.map((f, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white transition group"
          >
            {t('filmsCompet.viewSelection')}
            <FaArrowRightLong className="text-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FilmsCompetition;
