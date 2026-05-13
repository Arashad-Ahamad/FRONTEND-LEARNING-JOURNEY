import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../thunk/productThunk'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,



  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false
        state.error = 'Something went wrong'
      })
  },
  
})

export default productSlice.reducer
