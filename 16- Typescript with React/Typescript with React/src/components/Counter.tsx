import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState<number>(0)
    return (
        <>
        <h1>Counter: {count}</h1>

        <button onClick={()=> setCount(count + 1)}>+</button>
        <button onClick={()=> setCount(count - 1)}>-</button>
        </>
    )
}