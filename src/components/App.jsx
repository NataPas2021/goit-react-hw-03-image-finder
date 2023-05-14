import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
//import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
//import api from './services/api';

export class App extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    isLoading: false,
  }

  componentDidMount() {
    this.setState({islLoading: true})
    fetch('https://pixabay.com/api/?q=cat&page=1&key=28539221-d5e0309a6fde535568a0abe02&image_type=photo&orientation=horizontal&per_page=12')
       .then(response => response.json())
       .then(images => this.setState(images))
       .finally(() => this.setState({isLoading: false}))
};

  componentDidUpdate() {

}
  

  handleFormSubmit = images => {
    this.setState({images})
  }
  render () {
    
    return (
      <div className={css.container}>
        {this.state.isLoading && <p>Loading...</p>}
        {this.setState.images && <div>There will be images</div>}
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.images} />
        <Button text="Load more"/>
      </div>
    );
  }
};

