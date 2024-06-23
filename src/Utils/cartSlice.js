import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload.card.info.id);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload);
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearItems: (state) => {
      state.items = [];
    },
    incrementItemQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload);
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }
    }
  }
});

export const { addItem, removeItem, clearItems, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
