const ORDERS_KEY = "ecommerce_orders"

export const loadOrders = () => {
  try {
    const data = localStorage.getItem(ORDERS_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Error loading orders:", error)
    return []
  }
}

export const saveOrder = (order) => {
  try {
    const existingOrders = loadOrders()
    const updatedOrders = [order, ...existingOrders]
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders))
    return updatedOrders
  } catch (error) {
    console.error("Error saving order:", error)
    return []
  }
}

export const clearOrders = () => {
  try {
    localStorage.removeItem(ORDERS_KEY)
  } catch (error) {
    console.error("Error clearing orders:", error)
  }
}