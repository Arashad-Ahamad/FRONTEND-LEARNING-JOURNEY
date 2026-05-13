import { replace, useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState()

  const handleLogin = () => {
    const isAuthenticated = true
    if (isAuthenticated) {
      navigate('/Dashboard', { replace: true })
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  )
}
export default Login
