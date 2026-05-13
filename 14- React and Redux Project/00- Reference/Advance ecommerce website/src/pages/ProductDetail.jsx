import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../features/cartSlice';
import { addToWishlist, removeFromWishlist } from '../features/wishlistSlice';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { FiHeart, FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === parseInt(id));

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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

  // Show loading spinner while fetching
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show error if any
  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-red-500 text-lg">{error}</p>
        <Link to="/shop" className="text-blue-600 mt-4 inline-block flex items-center justify-center gap-2">
          <FiArrowLeft /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline"
      >
        <FiArrowLeft /> Back
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white rounded-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-96 object-contain"
          />
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4 capitalize">{product.category}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-gray-500">(4.5)</span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <p className="text-3xl font-bold text-blue-600 mb-6">${product.price}</p>
          
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FiShoppingCart /> Add to Cart
            </button>
            <button
              onClick={handleWishlist}
              className={`px-6 py-3 rounded-lg border-2 transition flex items-center gap-2 ${
                isInWishlist
                  ? 'border-red-500 text-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-red-500 hover:text-red-500'
              }`}
            >
              <FiHeart className={isInWishlist ? 'fill-red-500' : ''} />
              {isInWishlist ? 'Saved' : 'Save'}
            </button>
          </div>
          
          <Link to="/cart">
            <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;