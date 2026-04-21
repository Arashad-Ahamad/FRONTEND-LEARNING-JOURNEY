import { ProductList } from "./components/ProductList"
import { Cart } from "./components/Cart"
import "./App.css"

function App() {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
  )
}

export default App