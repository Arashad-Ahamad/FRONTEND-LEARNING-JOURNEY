import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/slices/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Total quantity count (all items ka quantity sum)
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          👟 ShoeStore
        </div>
        <div className="cart-icon" onClick={() => dispatch(toggleCart())}>
          🛒
          <span className="cart-count">{totalQuantity}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;