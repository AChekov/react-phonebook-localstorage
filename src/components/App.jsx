import { Component } from 'react';
import { nanoid } from 'nanoid';
import AppContainer from './AppContainer';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert('This name is already in contact')
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = evt => {
    const { value } = evt.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <AppContainer title="Phonebook">
        <Container title="You can add new contacts below:">
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container title="Your Contacts:">
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </Container>
      </AppContainer>
    );
  }
}
