import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import Wishlist from './pages/Wishlist'
function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            duration: 3000,
            style: { background: '#10B981', color: 'white' },
          },
          error: {
            duration: 4000,
            style: { background: '#EF4444', color: 'white' },
          },
        }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
