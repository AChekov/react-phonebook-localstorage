import { Item, Contact, BtnClose } from './ContactList.styled';
import { PropTypes } from 'prop-types';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <Item key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <BtnClose type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </BtnClose>
        </Item>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};

export default ContactList;
