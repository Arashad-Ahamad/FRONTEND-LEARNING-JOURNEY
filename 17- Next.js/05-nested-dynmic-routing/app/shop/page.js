import Link from "next/link";

export default async function ShopPage() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json();

  return (
    <div>
      <h1>All Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat.slug}>
            <Link href={`/shop/${cat.slug}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}