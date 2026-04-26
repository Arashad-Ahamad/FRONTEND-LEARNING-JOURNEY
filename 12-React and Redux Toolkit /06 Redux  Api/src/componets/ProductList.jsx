import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/thunk/productThunk'

function ProductsList() {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>
  // console.log(items);
  return (
    <div>
      {items.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
          </div>
        )
      })}
    </div>
  )
}
export default ProductsList
