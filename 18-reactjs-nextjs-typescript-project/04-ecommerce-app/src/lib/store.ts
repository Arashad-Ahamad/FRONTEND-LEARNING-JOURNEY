import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";

// A factory (not a singleton) so each request/render gets its own store in Next.js
export const makeStore = () =>
  configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
