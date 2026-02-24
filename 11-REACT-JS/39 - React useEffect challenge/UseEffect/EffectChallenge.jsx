import { useEffect, useState } from "react"
import './EffectChallenge.css'

function EffectChallenge() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleClick = () => {
    setCount(count + 1)
  }

  
  useEffect(() => {
    console.log(name)
  }, [name])


  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <>
      <h1>UseEffect Challenge</h1>

      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>

      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  )
}

export default EffectChallenge