import { createSlice } from "@reduxjs/toolkit"
import { loadCart, saveCart, clearCart } from "./cartStorage"

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: loadCart(),
  },

  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      )

      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }

      saveCart(state.cartItems)
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      )
      saveCart(state.cartItems)
    },

    clearCartAction: (state) => {
      state.cartItems = []
      clearCart()
    },
  },
})

export const { addToCart, removeFromCart, clearCartAction } =
  cartSlice.actions

export default cartSlice.reducer