const KEY = "cart"

export const loadCart = () => {
  const data = localStorage.getItem(KEY)
  return data ? JSON.parse(data) : []
}

export const saveCart = (cartItems) => {
  localStorage.setItem(KEY, JSON.stringify(cartItems))
}

export const clearCart = () => {
  localStorage.removeItem(KEY)
}