import { Form, Label, Field, FormSubmit } from './Form.styled';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const contactId = () => {
    return shortid.generate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    const isContact = contacts.some(
      ({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      toast.error(`${name} is already in your contacts`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const newContact = {
      id: contactId(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    e.target.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        Name
        <Field
          placeholder="Enter a name"
          type="text"
          name="name"
          required
        />
      </Label>
      <Label>
        Number
        <Field
          placeholder="Enter a phone-number"
          type="tel"
          name="number"
          required
        />
      </Label>
      <FormSubmit type="submit">Add contact</FormSubmit>
    </Form>
  );
};

