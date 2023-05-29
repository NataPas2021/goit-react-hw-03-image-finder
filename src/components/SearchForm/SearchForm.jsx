import css from './SearchForm.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {toast} from 'react-toastify';

class SearchForm extends Component {
 state = {
   searchQuery: '',
 }

 handleChange = event => {
  this.setState({searchQuery: event.currentTarget.value.toLowerCase()})
 }
 
 handleSubmit = event => {
  event.preventDefault();
  
  if(this.state.searchQuery.trim() === '') {
    return toast.error("Please, put in search query :)", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  
  this.props.onSubmit(this.state.searchQuery);

  this.setState({searchQuery: ''});
 }

 render () {
    return (
    <>
      <form onSubmit={this.handleSubmit} className={css.searchForm}>
         <button type="submit" className={css.searchFormButton}>
           <AiOutlineSearch style={{width:"25", height:"25"}}/> 
         </button>
         <input
           className={css.searchFormInput}
           name="imageSearchInput"
           type="text"
           autoComplete="off"
           autoFocus
           placeholder="Search images and photos"
           value={this.state.searchQuery}
           onChange={this.handleChange}
        />
      </form>
    </>
    )
 }
}



export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}