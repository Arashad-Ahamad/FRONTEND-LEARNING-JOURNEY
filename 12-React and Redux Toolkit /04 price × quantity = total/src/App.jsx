import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeOneFromCart, removeItem } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  //  Products with PRICE
  const products = [
    { id: 1, name: "Nike Shoes", price: 2999 },
    { id: 2, name: "Adidas Shirt", price: 1299 },
    { id: 3, name: "Casual Cap", price: 499 }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "800px", margin: "0 auto" }}>
      <h1> Shopping Cart</h1>

      {/*  PRODUCT LIST (Add karne ke liye) */}
      <div style={{ marginBottom: "30px", borderBottom: "2px solid #ddd", paddingBottom: "20px" }}>
        <h2>📦 Products</h2>
        {products.map((product) => (
          <div key={product.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            margin: "5px 0",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px"
          }}>
            <div>
              <strong>{product.name}</strong>
              <span style={{ marginLeft: "10px", color: "green" }}>
                ₹{product.price}
              </span>
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              style={{
                padding: "5px 15px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/*  CART DISPLAY with PRICE */}
      <div>
        <h2>🛒 Cart Items</h2>
        {items.length === 0 ? (
          <p style={{ color: "#666" }}>Cart is empty. Add some products! 🛍️</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.id} style={{
                border: "1px solid #ddd",
                padding: "15px",
                margin: "10px 0",
                borderRadius: "8px",
                backgroundColor: "#fff"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong style={{ fontSize: "16px" }}>{item.name}</strong>
                    <div style={{ marginTop: "5px" }}>
                      <span style={{ color: "#666" }}>Price: ₹{item.price}</span>
                      <span style={{ marginLeft: "15px", color: "#666" }}>
                        Quantity: {item.quantity}
                      </span>
                    </div>
                    <div style={{ marginTop: "5px", color: "green", fontWeight: "bold" }}>
                      Subtotal: ₹{item.price * item.quantity}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => dispatch(removeOneFromCart(item))}
                      style={{
                        padding: "5px 15px",
                        fontSize: "18px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginRight: "5px"
                      }}
                    >
                      -
                    </button>

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

                    {/* 🆕 Delete button to remove completely */}
                    <button
                      onClick={() => dispatch(removeItem(item))}
                      style={{
                        padding: "5px 10px",
                        marginLeft: "10px",
                        fontSize: "12px",
                        backgroundColor: "orange",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/*  GRAND TOTAL */}
            <div style={{
              marginTop: "20px",
              padding: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              border: "2px solid #4CAF50",
              textAlign: "right"
            }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                 GRAND TOTAL:
              </span>
              <span style={{ fontSize: "24px", fontWeight: "bold", color: "#4CAF50", marginLeft: "10px" }}>
                ₹{totalAmount}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;