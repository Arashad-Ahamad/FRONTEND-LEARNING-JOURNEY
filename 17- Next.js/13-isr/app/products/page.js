import Link from 'next/link'
import { products } from '../data'

export const revalidate = 60

export default function ProductsPage() {
  const currentTime = new Date().toLocaleTimeString()
  return (
    <div>
      <h1>All Products</h1>
      <p>Page generated at:{currentTime}</p>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>Price: ₹{p.price}</p>
        </div>
      ))}

      <Link href="/">Back to Home</Link>
    </div>
  )
}
