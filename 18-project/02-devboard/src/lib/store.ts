import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/features/uiSlice";
import productsReducer from "@/features/productsSlice";
import ordersReducer from "@/features/ordersSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;