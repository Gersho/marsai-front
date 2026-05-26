import { IoMdPlay } from 'react-icons/io';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useTranslation, Trans } from 'react-i18next';
import TitleSection from './base/TitleSection';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import MovieCard from './base/MovieCard';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';


const FilmsCompetition = () => {
  const { t } = useTranslation();
  const target = 'home.filmsCompet.';
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    async function getMovieData() {
      try {
        const res = await api(
          '/movies/random/?qt=3',
          {
            method: 'GET',
          }
        );
        const json = await res.json();
        if (res.ok) {
          setMovieData(json);
        }
      } catch (e) {
        console.error('error: ', e);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieData();
  }, []);


  return (
    <section className="section text-white bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="flex text-xs font-bold tracking-[0.2em] uppercase gap-2 mb-3">
            <IoMdPlay className="text-accent" />{' '}
            {t(target + 'previewSelection')}
          </span>
          <TitleSection hasUnderline={true} underlineColor="bg-white">
            <Trans
              i18nKey={target + 'title'}
              components={[<strong key="highlight" className="text-accent" />]}
            />
          </TitleSection>
          <p className="text-white">{t(target + 'description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {!isLoading ? movieData.map((e, index) => (
            <MovieCard key={index} data={e} />
          )) : <div><AiOutlineLoading3Quarters className="animate-spin size-16" /> </div>
          }
        </div>
        <div className="border-t border-white/10 pt-8">
          <Link
            to="/movies"
            className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white transition group"
          >
            {t(target + 'viewSelection')}
            <FaArrowRightLong className="text-accent group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FilmsCompetition;
