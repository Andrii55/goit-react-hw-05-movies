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
    <form onSubmit={handelSabmit}>
      <input name="query" type="text" autoFocus placeholder="Search movie" />
      <button type="submit">&#128269;</button>
    </form>
  );
};
