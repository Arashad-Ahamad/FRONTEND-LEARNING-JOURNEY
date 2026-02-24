import { useState } from "react"
import MidChild from "../components/MidChild"
function App() {
  const[user, setUser] = useState('Arashad')
  return (
    <>
    <MidChild user={user} />
    </>
  )
}

export default App