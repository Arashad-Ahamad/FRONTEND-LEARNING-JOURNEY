import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateQuantity, removeFromCart, clearCart } from '../features/cartSlice';
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  // console.log('Cart items:', items); // Debug log
  // console.log('Total quantity:', totalQuantity); // Debug log
  // console.log('Total price:', totalPrice); // Debug log

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemove = (id, title) => {
    dispatch(removeFromCart(id));
    toast.error(`${title.substring(0, 20)} removed`);
  };

  if (!items || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FiShoppingBag size={60} className="text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl md:text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items yet</p>
        <Link to="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Shopping Cart 
        <span className="text-gray-500 text-base md:text-lg ml-2">({totalQuantity || 0} items)</span>
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b font-semibold text-gray-600 mb-4">
            <div className="col-span-5">Product</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="border rounded-lg md:border-none md:rounded-none md:border-b pb-4">
                {/* Mobile Layout */}
                <div className="flex gap-3 md:hidden">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain bg-gray-50 rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-blue-600 font-bold text-base mt-1">${item.price}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="p-1 rounded bg-gray-100 cursor-pointer"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="p-1 rounded bg-gray-100 cursor-pointer"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                        <button
                          onClick={() => handleRemove(item.id, item.title)}
                          className="text-red-500 p-1 cursor-pointer"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-5 flex items-center gap-4">
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title.substring(0, 50)}</h3>
                  </div>
                  <div className="col-span-3 flex items-center justify-center gap-3">
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
                  <div className="col-span-2 text-right font-semibold">
                    ${((item.price || 0) * (item.quantity || 1)).toFixed(2)}
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <button
                      onClick={() => handleRemove(item.id, item.title)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 pt-4 border-t">
            <Link to="/shop" className="text-blue-600 hover:underline text-center sm:text-left flex items-center justify-center gap-1">
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

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 sticky top-20">
            <h2 className="text-lg md:text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-2 md:space-y-3 mb-4">
              <div className="flex justify-between text-sm md:text-base">
                <span>Subtotal ({totalQuantity || 0} items)</span>
                <span className="font-semibold">${(totalPrice || 0).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-xs md:text-sm text-gray-500">
                <span>Estimated Tax</span>
                <span>${((totalPrice || 0) * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold text-base md:text-lg">
                  <span>Total</span>
                  <span className="text-blue-600">${((totalPrice || 0) + 10 + (totalPrice || 0) * 0.1).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link to="/checkout">
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-sm md:text-base cursor-pointer">
                Proceed to Checkout
              </button>
            </Link>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Shipping & taxes calculated at checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;