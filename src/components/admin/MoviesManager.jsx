import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import MovieRow from './base/MovieRow';
import PaginationMenu from '../base/PaginationMenu';
import { useDebouncedCallback } from 'use-debounce';
import SortableTableHead from './base/SortableTableHead';

// TODO translation

function MoviesManager() {
  const [page, setPage] = useState(1);
  const [isPageChange, setIsPageChange] = useState(false);
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
        if (!isPageChange) {
          setPage(1);
          setIsPageChange(true);
        }
        let draft = onlyDrafts ? "true" : "false";
        console.log("sort: " + sort + " order: " + order + " drafts: " + draft + " page: " + page);
        console.log("search: " + search);
        const res = await api(
          '/movies/sort/?page=' + page
          + '&sort=' + sort
          + '&order=' + order
          + '&onlyDrafts=' + draft
          + '&search=' + search);
        if (res && res.ok) {
          const data = await res.json();
          console.log(data);
          setMovies(data.data);
          setTotal(data.total);
        }
      }
      catch (e) {
        console.error('error: ', e);
      }
    };
    fetchMovies();
  }, [page, sort, order, onlyDrafts, search, isPageChange, api]);

  return (

    <div>
      <h1>Films Soumis</h1>
      <p>Gérez l&apos;intégralité des soumissions et gérez les mises en avant.</p>

      {/* <table className='**:border-2'> */}
      <div className='flex flex-col items-center'>
        <div>
          <div className="pt-4 pb-1 flex-1 text-dark">
            <label htmlFor="searchbar" hidden>
              search
            </label>
            <input
              className="w-full outline-2 outline-neutral-400 rounded-sm pl-2 py-1.5 focus:outline-neutral-100"
              id="searchbar"
              type="text"
              placeholder="Search..."
              onChange={e => {
                debounced(e.target.value);
              }}
              title="search"
            ></input>
          </div>
        </div>
        <div className=' pb-3'>
          <input
            onChange={e => {
              setOnlyDrafts(e.target.checked);
              setIsPageChange(false);
            }}
            type="checkbox" id="only-draft" name="only-draft" value="only-draft"></input>
          <label htmlFor="only-draft"> Drafts Only</label><br></br>
        </div>
        <table className='min-w-5/6'>
          <thead>
            <tr className=''>
              <th className='hidden md:block'>Affiche</th>
              <SortableTableHead value="english_title" text="Titre" sort={sort} order={order} setSort={setSort} setOrder={setOrder} setIsPageChange={setIsPageChange} />
              <SortableTableHead value="c.lastname" text="Realisateur" className="hidden md:block" sort={sort} order={order} setSort={setSort} setOrder={setOrder} setIsPageChange={setIsPageChange} />
              <SortableTableHead value="status" text="Status" sort={sort} order={order} setSort={setSort} setOrder={setOrder} setIsPageChange={setIsPageChange} />
              <SortableTableHead value="submitted_at" text="Date" sort={sort} order={order} setSort={setSort} setOrder={setOrder} setIsPageChange={setIsPageChange} />
            </tr>
          </thead>
          <tbody>
            {movies.map((e, index) => (
              <MovieRow key={index} data={e} />
            ))}
          </tbody>
        </table>
        <div className="text-white flex items-center justify-center">
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
