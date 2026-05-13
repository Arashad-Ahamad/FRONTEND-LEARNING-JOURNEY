import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },

  reducers: {
    // Add to Cart
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      )

      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }
    },

    //  Increase Quantity
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      )
      if (item) item.quantity += 1
    },

    //  Decrease Quantity (Flipkart Logic 🔥)
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      )

      if (!item) return

      if (item.quantity === 1) {
        //  remove item when quantity = 1
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        )
      } else {
        item.quantity -= 1
      }
    },

    //  Remove Item
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      )
    },

    //  Clear Cart
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer