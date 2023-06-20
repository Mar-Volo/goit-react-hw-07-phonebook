import React from 'react';
import { Form, Label, Field, FormSubmit } from './Form.styled';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  const contactId = () => {
    return shortid.generate();
  };

  const handleSubmit = (e, actions) => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const number = e.target.elements.number.value;

  const findContactName = items.find(
    ({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase()
  );

  if (findContactName) {
    e.target.reset();
    return toast.error(`${findContactName.name} already in your contacts!`, {
      position: 'top-center',
      autoClose: 2000,
      theme: 'colored',
    });
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