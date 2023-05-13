import axios from 'axios';
import { toast } from 'react-hot-toast';

export const fetchContacts = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

export const addContact = async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    toast.success('Сontact successfully added');
    return response.data;
  } catch (error) {
    toast.error('Adding contact error');
    return thunkAPI.rejectWithValue(error);
  }
};

export const deleteContact = async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    toast.success('Сontact successfully deletion');
    return response.data;
  } catch (error) {
    toast.error('Contact deletion error');
    return thunkAPI.rejectWithValue(error);
  }
};
