import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import ImageGallery from './ImageGallery/ImageGallery';
import api from './services/api';

export class App extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  }

  async componentDidMount() {
    this.setState({status: 'pending'});
    try {const images = api.fetchImagesWithQuery('react');
    this.setState = ({images});
  } catch (error) {
    this.setState({error});
  } finally {
      this.setState({isLoading: false});
  };
};
  

  onSubmit = (e) => {

  }
  render () {
    const {images, status, error} = this.state;
    if(status === 'idle') {
      return <p>Please, input your request</p>
    }
    if(status === 'pending') {
      return <p>Loading...</p>
    }
    if(status === 'rejected') {
      return <p>Oops, something went wrong: {error.message}</p>
      }
    if(status === 'resolved') {
    return (
      <div className={css.container}>
        <SearchBar onSubmit={this.onSubmit}/>
        <ImageGallery images={images} />
      </div>
    );
  }
};
}
