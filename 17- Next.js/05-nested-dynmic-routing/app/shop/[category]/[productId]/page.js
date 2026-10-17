import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { category, productId } = await params;

  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <div>
      <Link href={`/shop/${category}`}>← Back to{category}</Link>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description:{product.description}</p>
      <p>Category:{product.category}</p>
      <p>Product ID:{product.id}</p>
    </div>
  );
}