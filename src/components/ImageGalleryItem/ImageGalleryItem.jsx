import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = () => {
    return (
        <li className={css.imageGalleryItem}>
           <img className={css.image}src="" alt="" />
       </li>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {

}