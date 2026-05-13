import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>
      <div className="nav-link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
export default Navbar
