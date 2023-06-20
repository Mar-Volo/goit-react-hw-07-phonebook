import { Contacts, Contact, DelButton } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const contactList = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <Contacts>
      {contactList.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            as="li"
            variant="primary"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{name}</div>
              {number}
            </div>
            <DelButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              variant="outline-danger"
            >
              Delete
            </DelButton>
          </Contact>
        );
      })}
    </Contacts>
  );
};
