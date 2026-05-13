import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

function Navbar() {
  const { cartItems } = useSelector((state) => state.cart)
  const location = useLocation()

  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          🛍️ ShopKart
        </Link>

        <div className="nav-links">
          <Link to="/" className={isActive("/") ? "active" : ""}>
            🏠 Home
          </Link>

          <Link to="/cart" className={isActive("/cart") ? "active" : ""}>
            🛒 Cart
            {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
          </Link>

          <Link to="/orders" className={isActive("/orders") ? "active" : ""}>
            📦 Orders
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar