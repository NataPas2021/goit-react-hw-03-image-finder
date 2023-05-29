import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes, { shape } from 'prop-types';




const ImageGallery = ({images, openModal}) => {
return (
  <>
  <ul className={css.ImageGallery} >
    {images.map(({id, webformatURL, largeImageURL, tags}) => {
    return  <ImageGalleryItem key={id} webURL={webformatURL} openModal={openModal} largeImg={largeImageURL} tags={tags} />
  })}
    </ul>
  </>
)
}

export default ImageGallery;

ImageGallery.propTypes = {
 images: PropTypes.arrayOf(shape).isRequired,
 openModal: PropTypes.func.isRequired,
}