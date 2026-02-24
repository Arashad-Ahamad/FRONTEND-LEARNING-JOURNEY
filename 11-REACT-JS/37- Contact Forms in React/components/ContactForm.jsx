import { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!username.trim()) {
      newErrors.username = 'Username is required'
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!message.trim()) {
      newErrors.message = 'Message cannot be empty'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const submitForm = {
        username,
        password,
        message,
      }

      console.log(submitForm)

      setUserName('')
      setPassword('')
      setMessage('')
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Form</h1>

        <form className="contact-form" onSubmit={handleSubmitForm}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className={errors.username ? "error-input" : ""}
          />
          {errors.username && <span>{errors.username}</span>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <span>{errors.password}</span>}

          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.password ? "error-input" : ""}
          ></textarea>
          {errors.message && <span>{errors.message}</span>}

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm