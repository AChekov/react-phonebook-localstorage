// import { Component } from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import AppContainer from './AppContainer';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`This ${name} is already in contact`)
      : setContacts([contact, ...contacts]);
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    if (contacts.length !== 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    }
    return;
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <AppContainer title="Phonebook">
      <Container title="You can add new contacts below:">
        <ContactForm onSubmit={addContact} />
      </Container>
      <Container title="Your Contacts:">
        <Filter filter={filter} onChange={changeFilter} />
        <ContactList
          contacts={visibleContacts()}
          onRemoveContact={removeContact}
        />
      </Container>
    </AppContainer>
  );
};

// ============== CLASS ==============
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) this.setState({ contacts: parsedContacts });
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;

//     if (contacts !== prevState.contacts)
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//   }

//   removeContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   addContact = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const findContact = this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(name.toLowerCase())
//     );

//     findContact
//       ? alert('This name is already in contact')
//       : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//   changeFilter = evt => {
//     const { value } = evt.currentTarget;

//     this.setState({ filter: value });
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const normalizeFilter = filter.toLowerCase();
//     const visibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//     return (
//       <AppContainer title="Phonebook">
//         <Container title="You can add new contacts below:">
//           <ContactForm onSubmit={this.addContact} />
//         </Container>
//         <Container title="Your Contacts:">
//           <Filter filter={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             onRemoveContact={this.removeContact}
//           />
//         </Container>
//       </AppContainer>
//     );
//   }
// }
