import { Link } from "react-router-dom"
function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        </>
    )
}
export default Home