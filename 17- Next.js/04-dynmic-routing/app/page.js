import Link from 'next/link'
import { products } from './data/products'

export default function HomePage() {
  return (
    <div>
      <h1>My Shop</h1>
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div>
            <h3>
              {product.image} {product.name}
            </h3>
            <p>Price: {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

