import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';

function MoviesManager() {
  const [movies, setMovies] = useState([]);
  const api = useApi();

  useEffect(() => {
    const fetchMovies = async () => {
      console.log('allor');
      const res = await api('/movies');
      if (res && res.ok) {
        const data = await res.json();
        console.log(data);
        setMovies(data);
      }
    };
    fetchMovies();
  }, [api]);

  return <>Movies</>;
}

export default MoviesManager;
