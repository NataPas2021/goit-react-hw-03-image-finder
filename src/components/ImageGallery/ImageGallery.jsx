import {Component} from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes, { shape } from 'prop-types';
import Loader from 'components/Loader/Loader';
import SearchError from 'components/SearchError/SearchError';
import {fetchImages} from 'components/services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state ={
    searchedImages: [],
    status: Status.IDLE,
    error: null,
  }

async componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.searchQuery;
    const nextSearch = this.props.searchQuery;
   if(prevSearch !== nextSearch) {
    this.setState({status: Status.PENDING});
     
    
    await fetchImages(nextSearch)
       .then(data => this.state({searchedImages: data.hits, status: Status.RESOLVED}))
       .then(console.log(this.state.searchedImages))
       .catch(error => this.setState({error, status: Status.REJECTED}))
 }
 console.log('component did update'); 
 

}

render() {
  const {searchedImages, status, error} = this.state;

    if(status === 'pending') {
    return <Loader />
  };

  if(status === 'rejected') {
    return <SearchError message={error.message}/>
  }

  if(status === 'resolved') {
    <ul className={css.ImageGallery} >
    {searchedImages.map(image=> {
    return  <ImageGalleryItem image={image}/>
  })}
    </ul>
  }
};
}


export default ImageGallery;

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(shape).isRequired,
 status: PropTypes.string,
 error: PropTypes.string,
}