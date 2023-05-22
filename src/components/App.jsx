import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Component} from 'react';
import css from './App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    isLoading: false,
  }
  
  async componentDidMount() {
    this.setState({isLoading: true});

     await fetch(`https://pixabay.com/api/?page=1&key=28539221-d5e0309a6fde535568a0abe02&image_type=photo&orientation=horizontal&per_page=12`)
     .then(res => { 
      if(res.ok) {
      return res.json()}
      
      return Promise.reject(new Error('Ooops, something went wrong. Please, add search request'))
    })
    .then(data => this.setState({images: data.hits}))
    .catch(error => this.setState({error}))
    //.finally(this.setState({loading: false}));
    console.log('component did mount')
  }

  

  handleFormSubmit = searchQuery => {
    this.setState({searchQuery})  
  }

  render () {
    const {images, searchQuery} = this.state;
    
    return (
      <div className={css.container}>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={images} searchQuery={searchQuery}/>
        <Button text="Load more"/>
        <ToastContainer />
      </div>
    );
    }
}
