import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servis/API';
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
    <div>
      <Link to={goBack.current}>Go Back</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>Rating: {`${(movie.vote_average * 10).toFixed(1)}`}%</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
