import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../features/wishlistSlice';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist?.items || []);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }));
  };

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition group h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-50">
        <div className="relative h-48 sm:h-52 md:h-56 lg:h-64">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-3 sm:p-4 group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>
      
      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm sm:text-base text-gray-800 mb-1 line-clamp-2 hover:text-gray-600 min-h-[40px] sm:min-h-[48px]">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-xs sm:text-sm mb-2 capitalize">{product.category}</p>
        
        <div className="flex justify-between items-center mb-3 mt-auto">
          <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price}</span>
          <span className="text-xs sm:text-sm text-gray-500">⭐ {product.rating?.rate || 4.5}</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
          >
            <FiShoppingCart size={14} className="sm:size-4" /> 
            <span>Add to Cart</span>
          </button>
          <button
            onClick={handleWishlist}
            className={`p-1.5 sm:p-2 border rounded-lg transition flex items-center justify-center ${
              isInWishlist ? 'bg-red-50 border-red-300 text-red-500' : 'border-gray-300 text-gray-500 hover:border-gray-400'
            }`}
          >
            <FiHeart size={14} className={`sm:size-4 ${isInWishlist ? 'fill-red-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;