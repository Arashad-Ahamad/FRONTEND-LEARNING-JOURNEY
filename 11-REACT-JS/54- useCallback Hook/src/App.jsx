import { useState, useCallback } from "react"
function App() {
  const [count, setCount] = useState(0)
  const handleClick = useCallback(()=> {
    console.log('Button Click');

  }, [count])
  return (
    <>
    <button onClick={()=> setCount(count +1)}>Count: {count}</button>
    </>
  )
}
export default App