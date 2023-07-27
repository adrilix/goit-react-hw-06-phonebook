import { useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { DivStyled } from './AppStyled';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, delContact, findContacts } from 'redux/phonebookReducer';

// const contactDefault = [
//   { id: '1', name: 'Andrii', number: '987 654 321' },
//   { id: '2', name: 'Ilona', number: '987 654 322' },
// ];

function App() {
  const contacts = useSelector ((state) => state.phonebook.contacts);
  const filter = useSelector ((state) => state.phonebook.filter);
  const dispatch = useDispatch()

  useEffect(() => {
     

  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    console.log('contact', contact);

    const findName = contacts.find(
      el => el.name.toLowerCase() === contact.name.toLowerCase()
    );
    findName
      ? alert(`Contact ${contact.name} is already in the contacts list`)
      : dispatch(addNewContact(contact));
  };

  const changeFilter = event => dispatch(findContacts(event.target.value));

  const getFindedContacts = () => {
    const normalizedFilter = filter.toLowerCase();

     return ( contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    );
  };

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <DivStyled>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      <Filter
        value={filter}
        contacts={getFindedContacts()}
        onChange={changeFilter}
        onDeleteContact={deleteContact}
      ></Filter>
    </DivStyled>
  );
}

export default App;
