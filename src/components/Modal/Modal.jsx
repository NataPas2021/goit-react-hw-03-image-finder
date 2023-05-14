import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({imageUrl}) => {
    return (
        <div className={css.overlay}>
           <div className={css.modal}>
             <img src={imageUrl} alt="" />
           </div>
       </div>
    )
}

export default Modal;

Modal.propTypes = {
    imageUrl: PropTypes.node.isRequired,
}