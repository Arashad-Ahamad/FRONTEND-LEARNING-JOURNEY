import { Link, Outlet } from "react-router-dom"
function Dashboard() {
    return (
        <>
        <h3>Dashboard</h3>
       <Link to='profile'>Profile</Link> <br />
       <Link to='setting'>Setting</Link> <br />
       <Link to='orders'>Orders</Link>
       <Outlet/>
        </>
    )
}
export default Dashboard