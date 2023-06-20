import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});