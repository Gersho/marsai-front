import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { useDebouncedCallback } from 'use-debounce';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import PaginationMenu from '../components/base/PaginationMenu';
import TitlePage from '../components/base/TitlePage';
import MovieRow from '../components/admin/base/MovieRow';
import SortableTableHead from '../components/admin/base/SortableTableHead';

function MoviesManager() {
  const { t } = useTranslation();
  const target = 'admin.moviesManager.';
  const [page, setPage] = useState(1);
  const [isPageChange, setIsPageChange] = useState(true);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [onlyDrafts, setOnlyDrafts] = useState(false);
  const [sort, setSort] = useState('id');
  const [order, setOrder] = useState('ASC');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const api = useApi();
  const debounced = useDebouncedCallback(e => {
    setSearch(e);
    setIsPageChange(false);
  }, 500);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        if (!isPageChange) {
          setPage(1);
          setIsPageChange(true);
        }
        let draft = onlyDrafts ? 'true' : 'false';
        const res = await api(
          '/movies/sort/?page=' +
          page +
          '&sort=' +
          sort +
          '&order=' +
          order +
          '&onlyDrafts=' +
          draft +
          '&search=' +
          search
        );
        if (res && res.ok) {
          const data = await res.json();
          setMovies(data.data);
          setTotal(data.total);
        }
      } catch (e) {
        console.error('error: ', e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page, sort, order, onlyDrafts, search, isPageChange, api]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-12 text-neutral-300 ">
        <p>{t(target + 'loading')}</p>
        <AiOutlineLoading3Quarters className="animate-spin size-24" />
      </div>
    );
  }

  return (
    <div className='text-white pt-20'>
      <TitlePage className="pt-5">{t(target + 'title')}</TitlePage>
      <div className="flex flex-col items-center ">
        <div>
          <div className="pt-4 pb-1 flex-1 text-white">
            <label htmlFor="searchbar" hidden>
              {t(target + 'search')}
            </label>
            <input
              className="w-full outline-2 outline-neutral-400 rounded-sm pl-2 py-1.5 focus:outline-neutral-100"
              id="searchbar"
              type="text"
              placeholder={t(target + 'placeholder')}
              onChange={e => {
                debounced(e.target.value);
              }}
              title="search"
              defaultValue={search}
              autoFocus
            ></input>
          </div>
        </div>
        <div className=" pb-3">
          <input
            onChange={e => {
              setOnlyDrafts(e.target.checked);
              setIsPageChange(false);
            }}
            type="checkbox"
            id="only-draft"
            name="only-draft"
            value="only-draft"
            checked={onlyDrafts}
          ></input>
          <label htmlFor="only-draft"> {t(target + 'draftsOnly')}</label>
          <br></br>
        </div>
        <table className="min-w-5/6">
          <thead>
            <tr className="">
              <th className="lg:block"></th>
              <th className="hidden lg:block">{t(target + 'table.cover')}</th>
              <SortableTableHead
                value="english_title"
                text={t(target + 'table.title')}
                sort={sort}
                order={order}
                setSort={setSort}
                setOrder={setOrder}
                setIsPageChange={setIsPageChange}
              />
              <SortableTableHead
                value="c.lastname"
                text={t(target + 'table.director')}
                className="hidden lg:block"
                sort={sort}
                order={order}
                setSort={setSort}
                setOrder={setOrder}
                setIsPageChange={setIsPageChange}
              />
              <SortableTableHead
                value="status"
                text={t(target + 'table.status')}
                sort={sort}
                order={order}
                setSort={setSort}
                setOrder={setOrder}
                setIsPageChange={setIsPageChange}
              />
              <SortableTableHead
                value="submitted_at"
                text={t(target + 'table.submitted')}
                sort={sort}
                order={order}
                setSort={setSort}
                setOrder={setOrder}
                setIsPageChange={setIsPageChange}
              />
            </tr>
          </thead>
          <tbody>
            {movies.map((e, index) => (
              <MovieRow key={index} data={e} />
            ))}
          </tbody>
        </table>
        <div className="text-bla flex items-center justify-center">
          <PaginationMenu
            total={total}
            page={page}
            setPage={setPage}
            setIsPageChange={setIsPageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default MoviesManager;
