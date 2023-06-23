import { MoviesList } from 'components/MoviesList';
import { SearcheForm } from 'components/SearcheForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'servis/API';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getSearchMovies(query).then(({ results }) => setMovies(results));
  }, [searchParams]);
  const onSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearcheForm onSubmit={onSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
