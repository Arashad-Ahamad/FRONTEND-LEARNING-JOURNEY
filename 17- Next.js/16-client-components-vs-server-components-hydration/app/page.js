import Counter from "./Counter";

export default async function Home() {
  const data = await fetch('https://dummyjson.com/products?limit=1')
  const res = await data.json()
  console.log('Hello');
  return (
   <div>
    <h1>{res.products[0].title}</h1>
    <Counter/>
    
   </div>
  );
}
