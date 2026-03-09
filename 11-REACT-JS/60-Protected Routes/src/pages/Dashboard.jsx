import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate()
    const handleLogout= ()=> {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <>
        <h1>DAshboard</h1>
        <button onClick={handleLogout}>LogOut</button>
        </>
    )
}
export default Dashboard