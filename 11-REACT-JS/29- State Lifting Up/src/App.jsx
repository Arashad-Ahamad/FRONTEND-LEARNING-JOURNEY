import { useState } from "react"
import ChildA from "../components/ChildA"
import ChildB from "../components/ChildB"
 function App() {
  const [name, setName] = useState('')
  return ( 
    <>
<ChildA name = {name} setName={setName}/>
<ChildB name={name}/>
    </>
  )
 }
 export default App