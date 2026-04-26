import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCartAction } from "../redux/cart/cartSlice"
import { placeOrder } from "../redux/order/orderSlice"

function CheckoutPage() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipping = total > 500 ? 0 : 40
  const grandTotal = total + shipping

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "COD",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const orderData = {
      cartItems,
      totalAmount: grandTotal,
      shippingAddress: `${formData.address},${formData.city} -${formData.pincode}`,
      paymentMethod: formData.paymentMethod,
    }

    dispatch(placeOrder(orderData))
    dispatch(clearCartAction())

    alert("🎉 Order placed successfully!")
    navigate("/orders")
  }

  if (cartItems.length === 0) {
    navigate("/cart")
    return null
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Personal Information</h3>

            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Shipping Address</h3>

            <div className="form-group">
              <label>Address *</label>
              <textarea
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="House number, Street, Area"
                rows="2"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City name"
                />
              </div>

              <div className="form-group">
                <label>Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>

            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                />
                <span>💵 Cash on Delivery (COD)</span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={formData.paymentMethod === "Card"}
                  onChange={handleChange}
                />
                <span>💳 Credit/Debit Card</span>
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  checked={formData.paymentMethod === "UPI"}
                  onChange={handleChange}
                />
                <span>📱 UPI (Google Pay, PhonePe)</span>
              </label>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order • ₹{grandTotal.toFixed(2)}
          </button>
        </form>

        <div className="order-summary">
          <h3>Your Order</h3>

          {cartItems.map((item) => (
            <div className="order-item" key={item.id}>
              <div className="order-item-info">
                <span className="order-item-name">{item.title.substring(0, 25)}</span>
                <span className="order-item-qty">x{item.quantity}</span>
              </div>
              <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}

          <div className="order-total">
            <div className="order-total-row">
              <span>Subtotal:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="order-total-row">
              <span>Shipping:</span>
              <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
            </div>
            <div className="order-total-row grand">
              <span>Total:</span>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage