import { createSlice } from "@reduxjs/toolkit"
import { loadCart, saveCart, clearCart } from "./cartStorage"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCart(),
  },

  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }

      saveCart(state.cartItems)
    },

    increaseQty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
        saveCart(state.cartItems)
      }
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)

      if (item?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        )
      } else if (item) {
        item.quantity -= 1
      }

      saveCart(state.cartItems)
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
      saveCart(state.cartItems)
    },

    clearCartAction: (state) => {
      state.cartItems = []
      clearCart()
    },
  },
})

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCartAction,
} = cartSlice.actions

export default cartSlice.reducer