import { createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async() => {
        const res = await fetch("https://fakestoreapi.com/products")
        return res.json()
    }
)