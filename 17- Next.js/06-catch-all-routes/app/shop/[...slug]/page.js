export default async function ShopPage({ params }) {
  const { slug } = await params;

  // API se products laao
  const res = await fetch("https://dummyjson.com/products?limit=100");
  const data = await res.json();
  let products = data.products;

  // Level 1: category (real world mein pehla level category hota hai)
  const category = slug[0];
  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Level 2: brand (real world mein doosra level brand hota hai)
  const brand = slug[1];
  if (brand) {
    products = products.filter(
      (p) => p.brand && p.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  // Level 3: max price (real world mein teesra level price filter hota hai)
  const maxPrice = slug[2];
  if (maxPrice) {
    products = products.filter((p) => p.price <= Number(maxPrice));
  }

  return (
    <div>
      <h1>Shop: /{slug.join("/")}</h1>
      <p>Levels:{slug.length}</p>
      <p>Category:{category || "—"}</p>
      <p>Brand:{brand || "—"}</p>
      <p>Max Price:{maxPrice || "—"}</p>

      <hr />

      {products.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        <div>
          <h2>{products.length} products found</h2>
          <ul>
            {products.map((p) => (
              <li key={p.id}>
                <strong>{p.title}</strong> —{p.category} —{p.brand || "N/A"} — ${p.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}