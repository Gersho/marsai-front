// import LanguagePicker from '../components/base/LanguagePicker';
import { useEffect, useState } from 'react';
import MovieCard from '../components/base/MovieCard';
import TopPage from '../components/base/TopPage';
import { useTranslation } from 'react-i18next';
import PaginationMenu from '../components/base/PaginationMenu';

function GalleryPage() {
  const { t } = useTranslation();
  const target = 'gallery.page.';
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      try {
        console.log("Loading page" + page);
        const res = await fetch(import.meta.env.VITE_SERVER_ADDRESS + 'movies/?page=' + page, {
          method: 'GET'
        });
        const json = await res.json();
        if (res.ok) {
          console.log(json);
          setMovieData(json.data);
          setTotal(json.total);
        } else {
          console.log(json);
        }
      } catch (e) {
        console.error('error: ', e);
      }
    }
    getMovieData();
  }, [page]);

  return (
    <div>
      <TopPage className="pt-20 text-white">
        <h1 className="">{t(target + 'titlePart1')}</h1>
        <h1 className="text-accent">{t(target + 'titlePart2')}</h1>
      </TopPage>
      <div className="text-white flex flex-col items-center">

        <div className="pb-5 pt-5 flex flex-col items-center">
          <div className="flex flex-col items-center w-5/6 gap-4 pb-4">
            <p>{t(target + 'paragraph')}</p>
          </div>
        </div>

        {/* <LanguagePicker /> */}
        <p>MOVIE COUNT: {total}</p>
        <div className='flex flex-col gap-y-6 gap-x-4 items-center pb-6 sm:flex-row sm:w-11/12 sm:flex-wrap sm:justify-evenly sm:flex-start'>

          {
            movieData.map((e, index) => (
              <MovieCard
                key={index}
                data={e}
              />
            ))
          }
        </div>
        <PaginationMenu total={total} page={page} setPage={setPage} />
      </div>


    </div>
  );
}

export default GalleryPage;
