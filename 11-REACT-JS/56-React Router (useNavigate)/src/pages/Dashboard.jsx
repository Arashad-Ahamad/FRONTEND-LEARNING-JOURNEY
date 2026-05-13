import { useNavigate } from "react-router-dom"
function Dashboard() {
    const navigate = useNavigate()

    const handleLogout = ()=> {
        navigate('/', {replace: true})

    }
    return (
        <>
    <h2>Dashboard Page</h2>
    <p>Welcome, You are logged in</p>
    <button onClick={handleLogout}>Logout</button>
        </>
    )
}
export default Dashboard