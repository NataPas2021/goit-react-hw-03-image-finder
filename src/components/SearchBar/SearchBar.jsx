import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({onSubmit}) => {
    return (
<header className={css.searchbar}>
  <form className="form">
    <button type="submit" className="button" onSubmit={onSubmit}>
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
}

export default SearchBar;

SearchBar.propTypes = {
 onSubmit: PropTypes.func.isRequired,
}