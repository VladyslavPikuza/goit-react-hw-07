import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = "https://6756c854c0a427baf94a5d9f.mockapi.io/Contacts";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/');  
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/', contact);  
      console.log('Added contact:', response.data); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://6756c854c0a427baf94a5d9f.mockapi.io/Contacts/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
      return id; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
