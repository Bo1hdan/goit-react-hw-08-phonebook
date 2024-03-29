import { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Input = () => {
  const contacts = useSelector(selectContacts);
  const [form, setForm] = useState({ name: '', number: '' });
  const dispatch = useDispatch();

  const addContactHandler = data => {
    const nameRepeated = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (nameRepeated) {
      return alert(`${nameRepeated.name} is already in your contacts`);
    }
    dispatch(addContact(data));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContactHandler(form);
    setForm({ name: '', number: '' });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={form.name}
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChange}
          value={form.number}
        />
      </label>
      <button type="submit">Add to contacts</button>
    </form>
  );
};
