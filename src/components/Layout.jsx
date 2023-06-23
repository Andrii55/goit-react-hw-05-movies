import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <ul className={css.item}>
        <li className={css.items}>
          <Link className={css.items__link} to="/">
            Home
          </Link>
        </li>
        <li className={css.items}>
          <Link className={css.items__link} to="/movies">
            Movies
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
