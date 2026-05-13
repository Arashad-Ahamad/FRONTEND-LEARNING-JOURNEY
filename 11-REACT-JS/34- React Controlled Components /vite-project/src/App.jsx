import { useState } from "react"

function App() {
  const [name, setName] = useState()

  return (
    <>
      <h1>React Controlled Components</h1>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Your Name: {name} </p>
    </>
  )
}
export default App