import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/lib/api";
import type { Order } from "@/lib/types";

interface OrdersState {
  items: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: OrdersState = { items: [], status: "idle" };

export const fetchOrders = createAsyncThunk("orders/fetch", async () => {
  const res = await api.get<any[]>("/carts");
  const orders: Order[] = res.data.map((cart, i) => ({
    id: cart.id,
    userId: cart.userId,
    total: Math.round(cart.products.reduce((s: number, p: any) => s + p.quantity * 29.99, 0) * 100) / 100,
    status: (["pending", "shipped", "delivered"] as const)[cart.id % 3],
    date: new Date(Date.now() - i * 86400000 * 2).toISOString().split("T")[0],
    items: cart.products.length,
  }));
  return orders;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default ordersSlice.reducer;