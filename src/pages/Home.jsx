import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'servis/API';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);
  return <MoviesList movies={movies} />;
};
