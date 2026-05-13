import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-800">ShopHub</span>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
            <FiShoppingCart size={22} className="text-gray-700" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;