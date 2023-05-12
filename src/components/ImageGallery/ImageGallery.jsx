import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = () => {
 return (
    <ul class="gallery">
      <ImageGalleryItem />
    </ul>
 );
}

export default ImageGallery;

ImageGallery.propTypes = {

}