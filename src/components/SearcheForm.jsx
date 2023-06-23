import css from './SearcheForm.module.css';

export const SearcheForm = ({ onSubmit }) => {
  const handelSabmit = e => {
    e.preventDefault();
    const { query } = e.target.elements;
    if (!query.value) {
      return;
    }

    onSubmit(query.value.trim());
  };
  return (
    <form className={css.searche} onSubmit={handelSabmit}>
      <input
        className={css.search__input}
        name="query"
        type="text"
        autoFocus
        placeholder="Search movie"
      />
      <button className={css.search__button} type="submit">
        &#128269;
      </button>
    </form>
  );
};
