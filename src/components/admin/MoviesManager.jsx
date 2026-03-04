import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import MovieRow from './base/MovieRow';
import PaginationMenu from '../base/PaginationMenu';
import { useDebouncedCallback } from 'use-debounce';

// TODO translation

function MoviesManager() {
  const [page, setPage] = useState(1);
  const [isPageChange, setIsPageChange] = useState(false);
  const [total, setTotal] = useState(0);
  const [onlyDrafts, setOnlyDrafts] = useState("false");
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const api = useApi();
  const debounced = useDebouncedCallback(e => {
    setSearch(e);
    setIsPageChange(false);
  }, 500);


  useEffect(() => {
    const fetchMovies = async () => {

      let sort = "id";
      let order = "ASC";
      let draft = "false";
      let search = "";
      // /movies/sort?page=1&sort=submitted_at&order=ASC&onlyDrafts=false&search=
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
    };
    fetchMovies();
  }, [api]);

  return (

    <div>
      <h1>Films Soumis</h1>
      <p>Gérez l&apos;intégralité des soumissions et gérez les mises en avant.</p>

      {/* <table className='**:border-2'>

        <thead>
          <tr className='*:p-2'>
            <th className=''>Affiche</th>
            <th className=''>Titre</th>
            <th className=''>Realisateur</th>
            <th className=''>Status</th>
            <th className=''>Date</th>
            <th className=''></th>
          </tr>
        </thead> */}

      {/* <tbody> */}
      {movies.map((e, index) => (
        <MovieRow key={index} data={e} />
      ))}

      {/* </tbody>
      </table> */}


      <div className="text-white flex items-center justify-center">
        <PaginationMenu
          total={total}
          page={page}
          setPage={setPage}
          setIsPageChange={setIsPageChange}
        />
      </div>
    </div>
  );
}

export default MoviesManager;
