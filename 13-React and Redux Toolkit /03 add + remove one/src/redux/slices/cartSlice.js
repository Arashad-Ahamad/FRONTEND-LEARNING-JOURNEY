import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // ADD to Cart
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        })
      }
    },

    // REMOVE from Cart
    removeOneFromCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload.id)
      }
    },
  },
})

export const {addToCart, removeOneFromCart} = cartSlice.actions
export default cartSlice.reducer