import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { api } from "@/lib/api";
import type { Product, FilterState } from "@/lib/types";

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  filters: FilterState;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
  filters: { search: "", sortBy: "name", page: 1, category: "all" },
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await api.get<Product[]>("/products");
  return res.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload, page: 1 };
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed";
      });
  },
});

export const { setFilters, setPage } = productsSlice.actions;
export default productsSlice.reducer;