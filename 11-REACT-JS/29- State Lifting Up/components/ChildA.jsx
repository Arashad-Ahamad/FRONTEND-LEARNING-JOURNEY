function ChildA({ name, setName }) {
    return (
        <>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
        </>
    )
}
export default ChildA