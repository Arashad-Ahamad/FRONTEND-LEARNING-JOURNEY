
export default async function Cart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const data = await res.json();

  return (
    <div>
      <h2>Your Cart</h2>
      {data.products.map((p) => (
        <p key={p.id}>{p.title} — ${p.price}</p>
      ))}
    </div>
  );
}