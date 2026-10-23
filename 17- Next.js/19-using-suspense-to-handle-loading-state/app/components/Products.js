export default async function Products() {
  const res = await fetch('https://api.example.com/products')
  const data = await res.json()
  return (
    <ul>
      {data.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  )
}
