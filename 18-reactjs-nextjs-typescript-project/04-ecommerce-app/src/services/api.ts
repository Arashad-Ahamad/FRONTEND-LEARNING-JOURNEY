import type { Product } from "@/types/product";

const API_BASE_URL = "https://fakestoreapi.com";
const REVALIDATE_SECONDS = 3600;

// ---------- internal helpers ----------

const TIMEOUT_MS = 8_000;
const MAX_RETRIES = 3;

async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeoutMs = TIMEOUT_MS
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        ...(options.headers ?? {}),
      },
      next: { revalidate: REVALIDATE_SECONDS },
    });
  } finally {
    clearTimeout(timer);
  }
}

async function fetchWithRetry(
  url: string,
  retries = MAX_RETRIES
): Promise<Response> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(url);

      // Success, or a non-retryable 4xx (except 429)
      if (
        res.ok ||
        (res.status >= 400 && res.status < 500 && res.status !== 429)
      ) {
        return res;
      }

      lastError = new Error(`HTTP ${res.status} ${res.statusText}`);
    } catch (err) {
      lastError = err;
    }

    if (attempt < retries) {
      await new Promise((r) => setTimeout(r, 500 * 2 ** (attempt - 1)));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Network request failed after retries");
}

// ---------- public API ----------

// Fetch all products (Home page)
export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetchWithRetry(`${API_BASE_URL}/products`);

  console.log("Products API Status:", res.status);
  console.log("Products API Status Text:", res.statusText);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`
    );
  }

  return (await res.json()) as Product[];
}

// Fetch single product by ID (Product Detail page).
// Returns null when the product does not exist (FakeStore sends an empty body).
export async function fetchProductById(id: string): Promise<Product | null> {
  const res = await fetchWithRetry(`${API_BASE_URL}/products/${id}`);

  console.log("Product API Status:", res.status);
  console.log("Product API Status Text:", res.statusText);

  if (res.status === 404) return null;

  if (!res.ok) {
    throw new Error(
      `Failed to fetch product details: ${res.status} ${res.statusText}`
    );
  }

  const text = await res.text();
  if (!text) return null;

  return JSON.parse(text) as Product;
}