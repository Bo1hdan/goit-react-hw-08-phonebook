import css from 'components/ContactForm/ContactForm.module.css';

export const Contacts = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};
