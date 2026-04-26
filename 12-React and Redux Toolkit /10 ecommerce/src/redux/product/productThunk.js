import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
  }
)