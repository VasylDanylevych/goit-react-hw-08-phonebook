import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contacts/operations';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  (_, thunkAPI) => fetchContacts(_, thunkAPI)
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  (contact, thunkAPI) => addContact(contact, thunkAPI)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  (id, thunkAPI) => deleteContact(id, thunkAPI)
);
