import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = () => {
    return (
        <div className={css.overlay}>
           <div className={css.modal}>
             <img src="" alt="" />
           </div>
       </div>
    )
}

export default Modal;

Modal.propTypes = {
    
}