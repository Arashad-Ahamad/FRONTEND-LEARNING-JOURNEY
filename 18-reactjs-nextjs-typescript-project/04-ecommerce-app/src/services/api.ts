import type { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";

// Fetch all products (Home page)
export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);

  console.log("Products API Status:", res.status);
  console.log("Products API Status Text:", res.statusText);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`
    );
  }

  return (await res.json()) as Product[];
}

// Fetch single product by ID (Product Detail page)
export async function fetchProductById(
  id: string
): Promise<Product | null> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`);

  console.log("Product API Status:", res.status);
  console.log("Product API Status Text:", res.statusText);

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(
      `Failed to fetch product details: ${res.status} ${res.statusText}`
    );
  }

  const text = await res.text();

  if (!text) {
    return null;
  }

  return JSON.parse(text) as Product;
}