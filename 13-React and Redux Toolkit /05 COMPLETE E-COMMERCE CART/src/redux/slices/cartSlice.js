import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],      // Cart items array
    isOpen: false   // Cart drawer open/close
  },

  reducers: {
    //  ADD TO CART (+ button)
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // Agar item already hai → quantity +1
        existingItem.quantity += 1;
      } else {
        // Naya item → quantity 1 ke saath add
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    //  REMOVE ONE FROM CART (- button)
    removeOneFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          // Quantity 1 se zyada hai → quantity -1
          existingItem.quantity -= 1;
        } else {
          // Quantity 1 hai → item remove
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },

    //  REMOVE COMPLETELY (Delete button)
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },

    //  OPEN/CLOSE CART DRAWER
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    // CLEAR ALL CART
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeOneFromCart,
  removeFromCart,
  toggleCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;