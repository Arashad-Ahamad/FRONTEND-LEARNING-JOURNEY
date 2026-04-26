import axios from 'axios';

const API_BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Products API
export const fetchAllProducts = async () => {
  try {
    const response = await api.get('/products');
    // Add stock property to each product
    return response.data.map(product => ({
      ...product,
      stock: Math.floor(Math.random() * 50) + 10 // Random stock between 10-60
    }));
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return {
      ...response.data,
      stock: Math.floor(Math.random() * 50) + 10
    };
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
};

export const fetchCategories = async () => {
  try {
    const response = await api.get('/products/categories');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch categories');
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data.map(product => ({
      ...product,
      stock: Math.floor(Math.random() * 50) + 10
    }));
  } catch (error) {
    throw new Error('Failed to fetch products by category');
  }
};