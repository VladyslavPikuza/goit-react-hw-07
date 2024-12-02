// src/components/App.js
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={(name, number) => dispatch(addContact({ name, number }))} />
      <SearchBox value={filter} onChange={(e) => dispatch(changeFilter(e.target.value))} />
      <ContactList contacts={getFilteredContacts()} onDeleteContact={(id) => dispatch(deleteContact(id))} />
    </div>
  );
};

export default App;
