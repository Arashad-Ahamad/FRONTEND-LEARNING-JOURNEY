function Inline() {
    let isActive = false
    return (
        <>
            <h1 style={{ backgroundColor: isActive ? 'green' : 'red', color: isActive ? 'blue' : 'yellow' }}>Hello World</h1>
        </>
    )
}

export default Inline