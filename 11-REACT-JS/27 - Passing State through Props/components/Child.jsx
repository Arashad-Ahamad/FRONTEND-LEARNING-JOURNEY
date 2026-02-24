function Child({ count, setCount }) {
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

        </>
    )
}

export default Child