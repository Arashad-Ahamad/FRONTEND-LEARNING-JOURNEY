'use client'
import { useState, useEffect } from 'react'
export default function ProductsPage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getProducts() {
      const res = await fetch('https://dummyjson.com/products?limit=5')
      const data = await res.json()
      setProducts(data.products)
    }

    getProducts()
  }, [])
  return (
    <div>
      <h1>My Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  )
}
