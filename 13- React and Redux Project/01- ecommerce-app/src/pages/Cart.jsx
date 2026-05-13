import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeFromCart, clearCart } from '../features/cartSlice';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  if (!items || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FiShoppingBag size={60} className="text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl md:text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
        <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Shopping Cart
        <span className="text-gray-500 text-base md:text-lg ml-2">({totalQuantity} items)</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="lg:w-2/3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border-b py-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-sm sm:text-base">{item.title.substring(0, 40)}</h3>
                <p className="text-blue-600 font-bold">${item.price}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 w-7 h-7 flex items-center justify-center cursor-pointer"
                >
                  <FiMinus size={12} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="p-1 rounded bg-gray-200 hover:bg-gray-300 w-7 h-7 flex items-center justify-center cursor-pointer"
                >
                  <FiPlus size={12} />
                </button>
              </div>
              <div className="font-bold min-w-[80px] text-center">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                  toast.error(`${item.title.substring(0, 20)} removed`);
                }}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 pt-4 border-t">
            <Link to="/" className="text-blue-600 hover:underline text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
              <FiArrowLeft size={16} /> Continue Shopping
            </Link>
            <button
              onClick={() => {
                if (window.confirm('Clear entire cart?')) {
                  dispatch(clearCart());
                }
              }}
              className="text-red-500 hover:text-red-700 text-center cursor-pointer"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 sticky top-20">
            <h2 className="text-lg md:text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 md:space-y-3 mb-4">
              <div className="flex justify-between text-sm md:text-base">
                <span>Subtotal ({totalQuantity} items)</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm text-gray-500">
                <span>Estimated Tax</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold text-base md:text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${(totalPrice + 10 + totalPrice * 0.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-sm md:text-base cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;