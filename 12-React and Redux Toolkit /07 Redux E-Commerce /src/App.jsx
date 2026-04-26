import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <h1>Redux E-Commerce</h1>
      <ProductList />
      <Cart />
    </>
  );
}

export default App;