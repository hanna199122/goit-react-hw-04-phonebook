import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handlerChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }; // оптимізований код

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onFormSubmitHandler({ ...this.state });
    // console.log(this.state);
    this.reset();

    this.props.onAddNewContact(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          className={css.contactNameForm}
          type="text"
          name="name"
          value={name}
          onChange={this.handlerChangeInput}
          pattern="^[a-zA-Z0-9_.\-]+[\\\|\s]?[a-zA-Z0-9_.\-]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameInputId}
        />

        <h3>Number</h3>

        <input
          value={number}
          onChange={this.handlerChangeInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.numberInputId}
        />

        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  mame: PropTypes.string,
  number: PropTypes.string,
  onFormSubmitHandler: PropTypes.func,
  onAddNewContact: PropTypes.func,
};
