import { useState } from 'react'
import './LoginForm.css'
function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const handleFormSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!userName.trim()) {
      newErrors.userName = 'Username is required'
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const userData = {
        userName,
        password,
      }
      console.log(userData)
      setUserName('')
      setPassword('')
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login Form</h1>
        <form action="" onSubmit={handleFormSubmit}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={errors.userName ? "error-input" : ""}
          />
          {errors.userName && <span>{errors.userName}</span>}

          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error-input' : ''}
          />
          {errors.password && <span>{errors.password}</span>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
