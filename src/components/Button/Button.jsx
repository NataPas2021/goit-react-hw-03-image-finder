import css from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({text}) => {
return (
    <button className={css.button} type='button'>{text}</button>
)
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
}