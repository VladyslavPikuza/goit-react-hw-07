import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        const { name, number } = action.payload;
        if (
          !state.items.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
          )
        ) {
          state.items.push({ id: nanoid(), name, number });
        }
      },
      prepare: (payload) => ({ payload }),
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
