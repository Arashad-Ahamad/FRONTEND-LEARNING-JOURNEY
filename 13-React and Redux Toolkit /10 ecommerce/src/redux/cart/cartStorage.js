const CART_KEY = "ecommerce_cart"

export const loadCart = () => {
  try {
    const data = localStorage.getItem(CART_KEY)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("Error loading cart:", error)
    return []
  }
}

export const saveCart = (cartItems) => {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
  } catch (error) {
    console.error("Error saving cart:", error)
  }
}

export const clearCart = () => {
  try {
    localStorage.removeItem(CART_KEY)
  } catch (error) {
    console.error("Error clearing cart:", error)
  }
}