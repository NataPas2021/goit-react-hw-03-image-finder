import {Component} from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({id, webformatURL, largeImageURL}) => {
    return (
        <div> key={id}
         <li className={css.imageGalleryItem}>
           <img className={css.image} src={webformatURL} alt="" />
           <Modal imageUrl={largeImageURL}/>
         </li>
        </div>
        
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
 id: PropTypes.array.isRequired,
 webformatURL: PropTypes.node.isRequired,
 largeImageURL: PropTypes.node.isRequired,
}