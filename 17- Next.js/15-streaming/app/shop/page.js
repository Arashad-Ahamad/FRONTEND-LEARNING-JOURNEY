import { Suspense } from "react";

//  SLOW COMPONENT — fetches data from API
async function ProductsList() {
  // 3-second delay for testing (real APIs can be slow too)
  await new Promise((r) => setTimeout(r, 3000));

  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return (
    <ul>
      {data.products.map((p) => (
        <li key={p.id}>
          {p.title} — ${p.price}
        </li>
      ))}
    </ul>
  );
}

//  MAIN PAGE
export default function ShopPage() {
  return (
    <div>
      {/* FAST — appears instantly */}
      <h1>My Shop</h1>
      <p>Welcome! These are our products:</p>

      {/* SLOW — only this part waits */}
      <Suspense fallback={<p> Products loading...</p>}>
        <ProductsList />
      </Suspense>

      {/* FAST — appears instantly */}
      <footer>© 2026 My Shop</footer>
    </div>
  );
}