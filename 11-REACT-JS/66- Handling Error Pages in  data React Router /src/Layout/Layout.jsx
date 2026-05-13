import { Outlet, Link } from "react-router-dom"
const Layout = ()=> {
    return (
        <div>
        <h1>My Website</h1>
        <nav>
            <Link to= '/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav>
        <Outlet/>
        </div>

    )
}
export default Layout