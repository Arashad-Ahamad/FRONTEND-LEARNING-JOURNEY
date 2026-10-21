import { products } from '../data'
import Link from 'next/link'

export default function Products() {
  return (
    <div>
      <h1>All Products</h1>
      {products.map((p) => (
        <p key={p.slug}>
          <Link href={`/products/${p.slug}`}>{p.name}</Link>
        </p>
      ))}
      <Link href='/'>Back to Home</Link>
    </div>
  )
}
