import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
//import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
//import api from './services/api';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    error: null,
    status: 'idle',
    isLoading: false,
  }
 
 /* componentDidMount() {
    this.setState({islLoading: true})
    fetch('https://pixabay.com/api/?q=cat&page=1&key=28539221-d5e0309a6fde535568a0abe02&image_type=photo&orientation=horizontal&per_page=12')
       .then(response => response.json())
       .then(images => this.setState(images))
       .finally(() => this.setState({isLoading: false}))
};*/

  componentDidUpdate() {
  /*мысли вслух: при апдейте(изменения в стейте searchQuery, необходимо сделать фетч и записать его результаты в state.images*/ 
}
  

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})
    
  }
  render () {
    
    return (
      <div className={css.container}>
        {this.state.isLoading && <p>Loading...</p>}
        {this.setState.images && <div>There will be images</div>}
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery searchQuery={this.state.searchQuery} />
        <Button text="Load more"/>
        <ToastContainer />
      </div>
    );
  }
};

