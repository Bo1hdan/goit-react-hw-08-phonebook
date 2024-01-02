import { Input } from '../Input';
import { Title } from '../Title';
import { Contacts } from '../Contacts';
import { Filter } from '../Filter';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(fetchContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <Title>Phonebook</Title>
      <Input />
      <Title>Contacts</Title>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Filter />
      <Contacts>
        <ContactElement />
      </Contacts>
    </div>
  );
};
