import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice'; 
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.ContactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} onDeleteContact={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;



