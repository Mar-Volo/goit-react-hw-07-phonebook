import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from '../redux/operations';
import { Layout } from './Layout/Layout';
import  GlobalStyle  from '../GlobalStyle';
import { Title } from './Layout/Layout.styled';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts/Contacts';

export const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
      <ToastContainer />
      <GlobalStyle />
    </Layout>
  );
};
