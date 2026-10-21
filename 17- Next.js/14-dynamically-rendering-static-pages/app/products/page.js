import Link from "next/link";

export const dynamic = "force-dynamic"
export default async function ProductsPage() {
    const response = await fetch(
    "https://dummyjson.com/products?limit=5"
  );

  if(!response.ok) {
    throw new Error("Failed to fetch products")
  }
  const data = await response.json()
    return (
        <div>
            <h1>My Shop</h1>
            <h2>Products Dashboard</h2>
            <p>Total Products: {data.total}</p>
            <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            {product.title} — ${product.price}
          </li>
        ))}
      </ul>

      <Link href="/"><button>Home</button></Link>
        
        </div>
    )
    
}