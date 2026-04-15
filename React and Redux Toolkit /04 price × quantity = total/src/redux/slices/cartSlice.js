import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    totalAmount: 0      // 🆕 Total price track karne ke liye
  },

  reducers: {
    // ➕ ADD to Cart
    addToCart: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        //  Item already exist → quantity++
        item.quantity += 1;
      } else {
        //  New item → push with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }

      // 🆕 Total recalculate karo
      state.totalAmount = calculateTotal(state.items);
    },

    // ➖ REMOVE from Cart
    removeOneFromCart: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload.id
      );

      if (item.quantity > 1) {
        //  quantity > 1 → quantity--
        item.quantity -= 1;
      } else {
        //  quantity = 1 → remove item
        state.items = state.items.filter(
          (i) => i.id !== action.payload.id
        );
      }

      // 🆕 Total recalculate karo
      state.totalAmount = calculateTotal(state.items);
    },

    // 🆕 Remove complete item (Agar direct delete karna ho)
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (i) => i.id !== action.payload.id
      );
      state.totalAmount = calculateTotal(state.items);
    }
  }
});

//  Helper function to calculate total
function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

export const { addToCart, removeOneFromCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;