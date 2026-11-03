import type { CartItem } from "@/features/cart/cartSlice";

const STORAGE_KEY = "cart";

export function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed?.items) ? (parsed.items as CartItem[]) : [];
  } catch (error) {
    console.error("Error loading cart:", error);
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items }));
  } catch (error) {
    console.error("Error saving cart:", error);
  }
}
