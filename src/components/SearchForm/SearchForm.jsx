import css from './SearchForm.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class SearchForm extends Component {
 state = {

 }

 onSubmit () {
  
 }

 render () {
    return (
    <>
      <form className={css.searchForm}>
         <button type="submit" className={css.searchFormButton} onSubmit={this.onSubmit}>
           <span className={css.searchFormButtonLabel}>Search</span>
         </button>
         <input
           className={css.searchFormInput}
           type="text"
           autoComplete="off"
           autoFocus
           placeholder="Search images and photos"
        />
      </form>
    </>
    )
 }
}

export default SearchForm;

SearchForm.propTypes = {

}