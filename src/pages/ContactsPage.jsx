import { Input } from 'components/Input';
import { Title } from 'components/Title';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
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

export default ContactsPage;
