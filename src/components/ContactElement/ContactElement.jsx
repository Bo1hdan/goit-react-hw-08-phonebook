import { useDispatch, useSelector } from 'react-redux';
import { deleteContact as deleteContactInfo } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactElement = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(deleteContactInfo(id));
  return contacts.map(contact => (
    <li key={contact.id}>
      {contact.name} : {contact.number}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  ));
};
