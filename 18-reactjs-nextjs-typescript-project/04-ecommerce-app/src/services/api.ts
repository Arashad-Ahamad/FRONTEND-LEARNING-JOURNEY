import type { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";
const REVALIDATE_SECONDS = 3600;

// Fetch all products (Home page)
export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json() as Promise<Product[]>;
}

// Fetch single product by ID (Product Detail page).
// Returns null when the product does not exist (FakeStore sends an empty body).
export async function fetchProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const text = await res.text();
  if (!text) return null;

  return JSON.parse(text) as Product;
}
