import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiArrowLeft } from 'react-icons/fi';

const Checkout = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/cart" className="flex items-center gap-2 text-blue-600 mb-6 hover:underline">
        <FiArrowLeft /> Back to Cart
      </Link>
      
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  required
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  required
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Zip Code"
                  required
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    required
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    required
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Place Order
            </button>
          </form>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between mb-2 text-sm">
                <span>{item.title.substring(0, 30)} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(totalPrice + 10 + totalPrice * 0.1).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;