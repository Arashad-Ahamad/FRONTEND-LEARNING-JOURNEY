import Link from "next/link"

export default async function ProductsPage() {
  const res = await fetch('https://dummyjson.com/products?limit=5', {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Product Not Found')
  }

  const data = await res.json()
  return (
    <main>
      <h1>My Products</h1>
      {data.products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>Price: ${p.price}</p>
        </div>
      ))}

      <Link href="/">Back to Home</Link>
    </main>
  )
}
