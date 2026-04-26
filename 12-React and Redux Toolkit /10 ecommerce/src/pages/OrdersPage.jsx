import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function OrdersPage() {
  const { orders } = useSelector((state) => state.orders)
  const navigate = useNavigate()

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending"
      case "Processing":
        return "status-processing"
      case "Shipped":
        return "status-shipped"
      case "Delivered":
        return "status-delivered"
      default:
        return ""
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (orders.length === 0) {
    return (
      <div className="empty-orders">
        <div className="empty-orders-icon">📦</div>
        <h2>No Orders Yet!</h2>
        <p>You haven't placed any orders.</p>
        <button onClick={() => navigate("/")}>Start Shopping</button>
      </div>
    )
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <div className="order-info">
                <span className="order-id">Order #{order.id}</span>
                <span className="order-date">{formatDate(order.orderDate)}</span>
              </div>
              <div className={`order-status${getStatusColor(order.status)}`}>
                {order.status}
              </div>
            </div>

            <div className="order-items">
              {order.items.map((item) => (
                <div className="order-item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div className="order-item-details">
                    <h4>{item.title.substring(0, 40)}</h4>
                    <p>Quantity:{item.quantity}</p>
                    <p>Price: ₹{item.price}</p>
                  </div>
                  <div className="order-item-total">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <div className="shipping-info">
                <span>🚚{order.shippingAddress}</span>
                <span>💳{order.paymentMethod}</span>
              </div>
              <div className="order-total">
                <span>Total Amount:</span>
                <strong>₹{order.totalAmount.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrdersPage