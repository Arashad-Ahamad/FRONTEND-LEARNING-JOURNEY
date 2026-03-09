import { Link } from "react-router-dom"
function Home() {
    return(
        <>
        <h1>Home Page</h1>
        <Link to='/dashboard'>Go to Dashboard</Link>
        </>
    )
}
export default Home