import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../features/wishlistSlice';
import { addToCart } from '../features/cartSlice';
import { FiHeart, FiTrash2, FiShoppingCart } from 'react-icons/fi';

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FiHeart className="text-6xl text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <Link to="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist ({items.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain p-4" />
            </Link>
            <div className="p-4">
              <h3 className="font-semibold mb-2 line-clamp-2">{item.title.substring(0, 40)}</h3>
              <p className="text-blue-600 font-bold mb-3">${item.price}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-1"
                >
                  <FiShoppingCart size={14} /> Add
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="p-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;