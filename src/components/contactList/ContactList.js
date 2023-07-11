import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = props => {
  const { contacts, onDeleteContact, filter } = props;
  // console.log(filter);
  const normalizeFilter = filter.toLowerCase();
  return (
    <ul className={css.contactList}>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
        .map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}
              <p>{contact.number}</p>
              <button
                onClick={() => {
                  onDeleteContact(contact.id);
                }}
                className={css.contactListItemBtn}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
  filter: PropTypes.string,
};
