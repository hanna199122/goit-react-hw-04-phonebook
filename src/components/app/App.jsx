import { Component } from 'react';
import css from './App.module.css';
import ContactForm from '../contactForm';
import ContactList from '../contactList';
import { nanoid } from 'nanoid';
import Filter from '../filter';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  contactId = nanoid();

  formSubmitHandler = data => {
    // console.log(data);
  };

  addNewContact = contact => {
    const contactsUser = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    console.log(contact);

    const filtredNumber = this.state.contacts.find(
      contact => contact.name === contactsUser.name
    );

    if (!filtredNumber) {
      this.setState(prevState => ({
        contacts: [contactsUser, ...prevState.contacts],
      }));
    } else alert(`${contactsUser.name} is already in contacts`);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });

    console.log(this.state.filter);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    console.log(this.state);

    return (
      <div className={css['app-container']}>
        <h1>Phonebook</h1>
        <ContactForm
          onAddContact={this.addNewContact}
          onFormSubmitHandler={this.formSubmitHandler}
          onAddNewContact={this.addNewContact}
        />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} value={filter} />
        <ContactList
          contacts={[...contacts]}
          onDeleteContact={this.deleteContact}
          filter={filter}
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  contacts: PropTypes.string,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
  onFormSubmitHandler: PropTypes.func,
  onChangeFilter: PropTypes.func,
};
