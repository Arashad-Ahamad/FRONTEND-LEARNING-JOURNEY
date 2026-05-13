import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCartAction,
} from "../redux/cart/cartSlice"

function CartPage() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const shipping = total > 500 ? 0 : 40
  const grandTotal = total + shipping

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your Cart is Empty!</h2>
        <p>Looks like you haven't added anything yet.</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-layout">
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <div className="cart-item-card" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="item-details">
                <h4>{item.title}</h4>
                <p className="item-price">₹{item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                </div>

                <p className="item-total">
                  Total: ₹{(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  🗑️ Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping:</span>
            <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
          </div>

          {total < 500 && (
            <div className="free-shipping-notice">
              🚚 Add ₹{(500 - total).toFixed(2)} more for FREE shipping!
            </div>
          )}

          <div className="summary-row total">
            <span>Grand Total:</span>
            <span>₹{grandTotal.toFixed(2)}</span>
          </div>

          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout →
          </button>

          <button
            className="clear-cart-btn"
            onClick={() => dispatch(clearCartAction())}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage