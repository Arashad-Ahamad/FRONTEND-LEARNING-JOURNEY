import { useNavigate } from "react-router-dom";
function Login() {
    const navigate= useNavigate()
    const handleLogin = ()=> {
        localStorage.setItem('token', '12345')
        navigate('/dashboard')
    }
    return (
        <div>
        <h2>Login</h2>
        <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login