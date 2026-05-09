import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block bg-gray-50">
        <div className="h-48 sm:h-52 md:h-56 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-3 sm:p-4 flex flex-col flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-sm sm:text-base text-gray-800 mb-1 line-clamp-2 min-h-[40px] sm:min-h-[48px] hover:text-blue-600">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-xs sm:text-sm mb-2 capitalize">{product.category}</p>

        <div className="flex justify-between items-center mb-3 mt-auto">
          <span className="text-lg sm:text-xl font-bold text-gray-900">${product.price}</span>
          <span className="text-xs sm:text-sm text-gray-500">⭐{product.rating?.rate || 4.5}</span>
        </div>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-blue-600 text-white py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
        >
          <FiShoppingCart size={16} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;