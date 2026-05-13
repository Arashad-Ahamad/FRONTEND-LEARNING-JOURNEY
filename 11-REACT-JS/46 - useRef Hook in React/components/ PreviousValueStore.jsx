import { useEffect, useState, useRef } from "react"

function  PreviousValueStore() {
    const[count, setCount] = useState(0)
    const prev = useRef(0)
    useEffect(()=> {
        prev.current = count

    } , [count])
    return (
        <>

        <h1>Current: {count}</h1>
        <h1>Previous: {prev.current}</h1>
        <button onClick={() => setCount(count+1)}>Increase</button>
        </>
    )
}
export default PreviousValueStore