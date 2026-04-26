import { createSlice } from "@reduxjs/toolkit"
import { loadOrders, saveOrder, clearOrders } from "./orderStorage"

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: loadOrders(),
  },

  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: Date.now(),
        orderDate: new Date().toISOString(),
        items: action.payload.cartItems,
        totalAmount: action.payload.totalAmount,
        shippingAddress: action.payload.shippingAddress,
        paymentMethod: action.payload.paymentMethod,
        status: "Pending",
      }

      const updatedOrders = saveOrder(newOrder)
      state.orders = updatedOrders
    },

    clearOrdersAction: (state) => {
      state.orders = []
      clearOrders()
    },
  },
})

export const { placeOrder, clearOrdersAction } = orderSlice.actions
export default orderSlice.reducer