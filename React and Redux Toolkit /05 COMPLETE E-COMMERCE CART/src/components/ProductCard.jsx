import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <div className="product-title">{product.name}</div>
        <div className="product-price">
          ₹{product.price.toLocaleString()}<small>incl. tax</small>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;