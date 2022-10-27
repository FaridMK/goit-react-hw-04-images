import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ onClick }) {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      Show more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
