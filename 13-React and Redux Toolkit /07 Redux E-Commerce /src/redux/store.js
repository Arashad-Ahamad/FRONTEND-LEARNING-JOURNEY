import {configureStore }from"@reduxjs/toolkit";
import productReducer from"./product/productSlice";
import cartReducer from"./cart/cartSlice";

export const store=configureStore({
  reducer: {
    products:productReducer,
    cart:cartReducer,
  },
});