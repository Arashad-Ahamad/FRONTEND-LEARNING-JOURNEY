import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart/cartSlice"
import productReducer from "./product/productSlice"
import orderReducer from "./order/orderSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    orders: orderReducer,
  },
})