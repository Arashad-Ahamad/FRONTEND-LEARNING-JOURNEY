 import Link from "next/link";

export default async function ShopHomePage() {
  // Real API se categories laao
  const res = await fetch("https://dummyjson.com/products/categories");
  const categories = await res.json();

  return (
    <div>
      <h1>Shop Categories</h1>
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