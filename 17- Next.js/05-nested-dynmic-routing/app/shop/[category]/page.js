import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const res = await fetch(`https://dummyjson.com/products/category/${category}`);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const products = data.products;

  return (
    <div>
      <Link href="/shop">← Back to Categories</Link>
      <h1>{category} Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/shop/${category}/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}