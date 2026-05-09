import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Load cart from localStorage
const loadCart = () => {
  try {
    const saved = localStorage.getItem('cart');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        items: parsed.items || [],
        totalQuantity: parsed.totalQuantity || 0,
        totalPrice: parsed.totalPrice || 0,
      };
    }
  } catch (error) {
    console.error('Error loading cart:', error);
  }
  return { items: [], totalQuantity: 0, totalPrice: 0 };
};

const initialState = loadCart();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Update existing item quantity
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        toast.success(`Increased ${action.payload.title.substring(0, 20)} quantity`);
      } else {
        // Add new item
        state.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          quantity: 1,
        });
        toast.success(`${action.payload.title.substring(0, 20)} added to cart`);
      }
      
      // Calculate totals
      state.totalQuantity = state.items.reduce((sum, item) => sum + (item.quantity || 0), 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
      
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify({
        items: state.items,
        totalQuantity: state.totalQuantity,
        totalPrice: state.totalPrice,
      }));
    },
    
    removeFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.items = state.items.filter(item => item.id !== action.payload);
        toast.error(`${item.title.substring(0, 20)} removed from cart`);
        
        state.totalQuantity = state.items.reduce((sum, item) => sum + (item.quantity || 0), 0);
        state.totalPrice = state.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
        
        localStorage.setItem('cart', JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        }));
      }
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item && quantity > 0) {
        item.quantity = quantity;
        
        state.totalQuantity = state.items.reduce((sum, item) => sum + (item.quantity || 0), 0);
        state.totalPrice = state.items.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0);
        
        localStorage.setItem('cart', JSON.stringify({
          items: state.items,
          totalQuantity: state.totalQuantity,
          totalPrice: state.totalPrice,
        }));
        
        toast.success('Cart updated');
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      
      localStorage.setItem('cart', JSON.stringify({
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      }));
      
      toast.success('Cart cleared');
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;