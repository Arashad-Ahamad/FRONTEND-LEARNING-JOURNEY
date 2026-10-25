import Image from 'next/image'

export default async function Home() {
  const [productsRes, usersRes] = await Promise.all([
    fetch('https://dummyjson.com/products?limit=5'),
    fetch('https://dummyjson.com/users?limit=5'),
  ])

  if (!productsRes.ok || !usersRes.ok) {
    throw new Error('Data fetch nahi hua')
  }

  const [productsData, usersData] = await Promise.all([
    productsRes.json(),
    usersRes.json(),
  ])
  return (
    <div>
      <h1>My Shop</h1>
      <h2>Products</h2>
      {productsData.products.map((p)=> (
        <p key={p.id}>{p.title}</p>

      ))}

       <h2>Users</h2>
       {usersData.users.map((user)=> (
        <p key={user.id}>{user.firstName}</p>

       ))}
    </div>
  )
}
