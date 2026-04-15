import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const product = { id: 1, name: "Shirt" };

  return (
    <div>
      <h1>Cart Items: {items.length}</h1>

      <button onClick={() => dispatch(addToCart(product))}>
        Add Shirt
      </button>

      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove Shirt
      </button>

      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;