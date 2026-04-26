import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,           // + button ke liye
  removeOneFromCart,   // - button ke liye
  removeFromCart,      // Delete button ke liye
  toggleCart,
  clearCart
} from "../redux/slices/cartSlice";

function CartDrawer() {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state) => state.cart);

  // Total price calculate
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => dispatch(toggleCart())}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="close-cart" onClick={() => dispatch(toggleCart())}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛍️</div>
              <h3>Your cart is empty!</h3>
              <p>Add some awesome shoes to get started</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />

                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString()}</div>

                  {/* + and - Buttons */}
                  <div className="cart-item-quantity">
                    {/* - MINUS Button (Remove One) */}
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(removeOneFromCart(item))}
                    >
                      −
                    </button>

                    {/* Quantity Display */}
                    <span className="quantity-value">{item.quantity}</span>

                    {/* + PLUS Button (Add One) */}
                    <button
                      className="quantity-btn"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>

                    {/* 🗑️ DELETE Button (Remove Completely) */}
                    <button
                      className="quantity-btn remove-btn"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      🗑️
                    </button>
                  </div>
                </div>

                {/* Item Total Price */}
                <div className="cart-item-total">
                  ₹{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout →</button>
            <button className="clear-cart-btn" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;