import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],  
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      const existingContact = state.items.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (!existingContact) {
        state.items.push({
          id: nanoid(),
          name,
          number,
          
        }
        );
      }
    },
    deleteContact: (state, action) => {
      const idToDelete = action.payload;
      state.items = state.items.filter((contact) => contact.id !== idToDelete);
      
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

