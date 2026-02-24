import { useEffect, useState } from "react"
import Title from "../components/Title"

function App() {
const [count, setCount] = useState(0)
const handleCountClick = ()=> {
  setCount(count + 1)
}
useEffect(()=> {
  console.log('Count Change:', count);
}, [count])

  return (
    <>
     <Title/>
    <h1>Count: {count}</h1>
    <button onClick={handleCountClick}>Click</button>
    </>
   
  )
}
export default App