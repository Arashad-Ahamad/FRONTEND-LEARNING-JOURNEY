import { useState } from "react"
import Chlid from "../components/Child"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Parent Count: {count}</p>
      <Chlid count={count} setCount={setCount} />

    </>
  )
}
export default App