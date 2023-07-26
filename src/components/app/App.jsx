import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { DivStyled } from './AppStyled';

const contactDefault = [
  { id: '1', name: 'Andrii', number: '987 654 321' },
  { id: '2', name: 'Ilona', number: '987 654 322' },
];

function App() {
  const parsedContacts = JSON.parse(window.localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(() =>
    parsedContacts && parsedContacts.length > 0
      ? parsedContacts
      : contactDefault
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
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
      : setContacts(prevContacts=>[contact, ...prevContacts]);
  };

  const changeFilter = event => setFilter(event.target.value);

  const getFindedContacts = () => {
    const normalizedFilter = filter.toLowerCase();

     return ( contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
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
