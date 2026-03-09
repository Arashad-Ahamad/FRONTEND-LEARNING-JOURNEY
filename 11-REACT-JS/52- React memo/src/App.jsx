import { useState } from "react"
import Child from "./components/Child"
function App() {
    const [count, setCount] = useState(0)
  console.log('Parent Render');

  return (
    <>
    <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
    <Child name='Arashad'/>
    </>
  )
}
export default App