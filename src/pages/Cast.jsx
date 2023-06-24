import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servis/API';
import css from './Cast.module.css';

const defaultImg =
  'https://upload.wikimedia.org/wikipedia/commons/d/d6/Nophoto.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  return (
    <>
      {cast.length > 0 ? (
        <ul className={css.cast__list}>
          {cast.map(item => (
            <li className={css.cast__li} key={item.id}>
              <img
                className={css.cast__img}
                width={'100px'}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
              />
              <p className={css.cast__item}>{item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.cast__item}>No cast</p>
      )}
    </>
  );
};
