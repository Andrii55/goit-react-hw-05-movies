import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servis/API';
import css from './MoviesDitels.module.css';
const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg';

export const MoviesDitels = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state?.from || '/');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  if (!movie) {
    return;
  }
  return (
    <div className={css.container}>
      <Link className={css.btn__link} to={goBack.current}>
        Go Back
      </Link>
      <img
        className={css.movie__img}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
      />
      <h2 className={css.movie__title}>{movie.title}</h2>
      <p className={css.movie__item}>
        Rating: {`${(movie.vote_average * 10).toFixed(1)}`}%
      </p>
      <ul className={css.movie__items}>
        <li className={css.movie__list}>
          <Link className={css.movie__link} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.movie__link} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
