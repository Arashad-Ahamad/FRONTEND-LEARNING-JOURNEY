import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "../redux/product/productThunk"
import { addToCart } from "../redux/cart/cartSlice"

export function ProductList() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div className="products">
      <h2>Products</h2>

      {items?.map((p) => (
        <div className="products-grid "  key={p.id}>
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p>₹ {p.price}</p>

          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}