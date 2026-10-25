export default async function ProductsPage() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=5"
  );

  if (!res.ok) {
    throw new Error("Products API failed");
  }

  const data = await res.json();

  return (
    <main>
      <h1>Products</h1>

      {data.products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </main>
  );
}