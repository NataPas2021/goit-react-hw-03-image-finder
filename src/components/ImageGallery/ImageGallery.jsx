import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes, { shape } from 'prop-types';

class ImageGallery extends Component {
componentDidUpdate() {
 console.log('component did update')
}

render(){
  return (
    <ul className={css.ImageGallery} >
      {this.props.images}
      {/*{this.props.images.map(image=> {
        return <ImageGalleryItem image={image}/>
      })}*/}
    </ul>
 );
    }
 
}

export default ImageGallery;

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(shape)
}