import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeOneFromCart } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const product = { id: 1, name: "Shoes" };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Shopping Cart</h1>

      {/* ADD NEW PRODUCT BUTTON */}
      <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px"
        }}
      >
        + Add Shoes
      </button>

      {/* CART ITEMS DISPLAY */}
      {items.length === 0 ? (
        <p>Cart is empty. Add some items! 🛍️</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                backgroundColor: "#f9f9f9"
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {item.name}
              </span>

              <span style={{ fontSize: "16px", color: "#666" }}>
                (x{item.quantity})
              </span>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => dispatch(removeOneFromCart(item))}
                style={{
                  padding: "5px 15px",
                  fontSize: "18px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                -
              </button>

              {/* ADD BUTTON */}
              <button
                onClick={() => dispatch(addToCart(item))}
                style={{
                  padding: "5px 15px",
                  fontSize: "18px",
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                +
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;