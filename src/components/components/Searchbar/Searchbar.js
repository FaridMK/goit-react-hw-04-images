import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ handleSubmit }) {
  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}></button>

        <input
          name="query"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func };
