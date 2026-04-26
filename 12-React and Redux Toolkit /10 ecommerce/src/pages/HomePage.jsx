import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/product/productThunk"
import { addToCart } from "../redux/cart/cartSlice"

function HomePage() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId)
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading amazing products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>❌{error}</p>
        <button onClick={() => dispatch(fetchProducts())}>Try Again</button>
      </div>
    )
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to ShopKart</h1>
        <p>Your one-stop shop for everything!</p>
      </div>

      <div className="products-section">
        <h2>✨ Featured Products</h2>
        <div className="products-grid">
          {items?.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h4>{product.title.substring(0, 35)}...</h4>
                <p className="category">{product.category}</p>
                <div className="price-section">
                  <span className="price">₹{product.price}</span>
                  <span className="original-price">
                    ₹{(product.price * 1.4).toFixed(2)}
                  </span>
                  <span className="discount">40% OFF</span>
                </div>
                <button
                  className={`add-btn${isInCart(product.id) ? "in-cart" : ""}`}
                  onClick={() => dispatch(addToCart(product))}
                >
                  {isInCart(product.id) ? "✓ Added to Cart" : "🛒 Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage