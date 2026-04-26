import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
])