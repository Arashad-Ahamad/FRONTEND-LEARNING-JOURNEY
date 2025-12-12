function Conditional() {
    const isActive = true
    return (<>
        <h1 style={{color: isActive ? 'green': 'red'}}>Status Active / Inactive</h1>
    </>
    )
}

export default Conditional