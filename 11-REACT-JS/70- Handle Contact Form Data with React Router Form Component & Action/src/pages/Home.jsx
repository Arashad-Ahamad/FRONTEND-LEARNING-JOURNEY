import { Link } from "react-router-dom"
function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <Link to='/add-employee'>Add Employee</Link>
        </>
    )
}
export default Home