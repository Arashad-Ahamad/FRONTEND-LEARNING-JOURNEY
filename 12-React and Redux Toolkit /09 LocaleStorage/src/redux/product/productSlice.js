import { createSlice } from "@reduxjs/toolkit"
import { fetchProducts } from "./productThunk"

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false
        state.error = "Failed to fetch"
      })
  },
})

export default productSlice.reducer