import useCounter from "./useCounter";
function Counter2() {
    const {count, increment} = useCounter()
    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
        </>
    )
}
export default Counter2