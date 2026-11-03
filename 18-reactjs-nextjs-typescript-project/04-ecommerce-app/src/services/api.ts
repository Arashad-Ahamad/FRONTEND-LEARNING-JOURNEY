import type { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";

// Fetch all products (Home page)
export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    cache: "no-store", // ✅ Fresh data on every request, no caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json() as Promise<Product[]>;
}

// Fetch single product by ID (Product Detail page).
export async function fetchProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: "no-store", // ✅ Fresh data on every request
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const text = await res.text();
  if (!text) return null;

  return JSON.parse(text) as Product;
}