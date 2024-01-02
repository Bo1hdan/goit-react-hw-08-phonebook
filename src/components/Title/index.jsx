import css from 'components/ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
