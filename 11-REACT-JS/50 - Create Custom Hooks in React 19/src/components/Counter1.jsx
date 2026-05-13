import useCounter from "./useCounter";
function Counter1() {
    const {count, increment} = useCounter()
    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={increment}>+</button>
        </>
    )
}
export default Counter1