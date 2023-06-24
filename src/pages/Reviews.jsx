import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieReviews } from 'servis/API';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <ul className={css.reviews__list}>
          {reviews.map(item => (
            <li className={css.reviews__lists} key={item.id}>
              <p className={css.reviews__item}>{item.author}</p>
              <p className={css.reviews__item}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.reviews__item}>No reviews</p>
      )}
    </>
  );
};
