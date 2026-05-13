import { useMemo, useState } from "react";

const bigArray = [
  {id:1, price:500 },
  {id:2, price:2000},
  {id:3, price:1500},
  {id:4, price:300}
];

function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Filtering running...");
    return bigArray.filter(item => item.price > 1000);
  }, []);

  return (
    <>
      <h3>Expensive Items</h3>

      {result.map(item => (
        <p key={item.id}>{item.price}</p>
      ))}

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}

export default App;