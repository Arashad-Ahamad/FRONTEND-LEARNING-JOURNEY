import { useSelector, useDispatch } from "react-redux"
import { removeFromCart, clearCartAction } from "../redux/cart/cartSlice"

export function Cart() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>Qty: {item.quantity}</p>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))
      )}

      <button onClick={() => dispatch(clearCartAction())}>
        Clear Cart
      </button>
    </div>
  )
}