import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../services/api';
import { addToCart } from '../features/cartSlice';
import { FiShoppingCart, FiArrowLeft } from 'react-icons/fi';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorComponent from '../components/common/ErrorComponent';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProductById(id);  // ← API service se call
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error} onRetry={fetchProduct} />;
  if (!product) return <ErrorComponent message="Product not found" />;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-blue-600 mb-6 hover:underline cursor-pointer"
      >
        <FiArrowLeft /> Back
      </button>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/2 bg-white rounded-lg p-4 sm:p-6 md:p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-96 object-contain mx-auto"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-3 capitalize">{product.category}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-500 text-lg">★★★★☆</span>
            <span className="text-gray-500">(4.5)</span>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-6">${product.price}</p>

          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
          >
            <FiShoppingCart size={20} /> Add to Cart
          </button>

          <Link to="/cart">
            <button className="w-full mt-4 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition cursor-pointer">
              View Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;