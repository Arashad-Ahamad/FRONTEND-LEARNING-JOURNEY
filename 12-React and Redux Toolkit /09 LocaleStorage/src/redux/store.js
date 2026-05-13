import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice"
import productReducer from "./product/productSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
})