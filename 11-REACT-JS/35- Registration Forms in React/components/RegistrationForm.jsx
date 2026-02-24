import { useState } from 'react'
import './RegistrationForm.css'

function RegistrationForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // First Name
    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    // Last Name
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    // Email
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email address'
    }

    // Password
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Phone Number
    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Enter valid 10-digit phone number'
    }

    setErrors(newErrors)

    // Submit if no errors
    if (Object.keys(newErrors).length === 0) {
      const formData = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      }

      console.log(formData)

      // reset form
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setPhoneNumber('')
    }
  }

  return (
    <div className="container">
      <p className="intro">
        Hello my name is {firstName}. My email address is {email}. And my phone
        number is {phoneNumber}.
      </p>

      <div className="form-box">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account</p>

        <form onSubmit={handleSubmit}>
          
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={errors.firstName ? "error-input" : ""}
          />
          {errors.firstName && <span>{errors.firstName}</span>}

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={errors.lastName ? "error-input" : ""}
          />
          {errors.lastName && <span>{errors.lastName}</span>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span>{errors.email}</span>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && <span>{errors.password}</span>}

          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) =>
              setPhoneNumber(e.target.value.replace(/\D/g, ""))
            }
            className={errors.phoneNumber ? "error-input" : ""}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}

          <p className="terms">
            By creating an account you agree to our Terms & Privacy
          </p>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default RegistrationForm