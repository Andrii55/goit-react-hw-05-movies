import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.film__list}>
      {movies.map(movie => (
        <li className={css.film__item} key={movie.id}>
          <Link
            className={css.film__title}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
