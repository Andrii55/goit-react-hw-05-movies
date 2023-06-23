import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servis/API';

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
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {cast.map(item => (
            <li key={item.id}>
              <img
                width={'100px'}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
              />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast</p>
      )}
    </>
  );
};
