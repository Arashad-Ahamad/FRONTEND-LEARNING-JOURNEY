import axios from 'axios';

// API Base URL
const API_BASE_URL = 'https://fakestoreapi.com';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Fetch all products (for Home Page)
export const fetchAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

// Fetch single product by ID (for Product Detail page)
export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product details');
  }
};