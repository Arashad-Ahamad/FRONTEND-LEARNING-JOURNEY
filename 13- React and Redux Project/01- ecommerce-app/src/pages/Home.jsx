import { useEffect, useState } from 'react';
import { fetchAllProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorComponent from '../components/common/ErrorComponent';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllProducts();  // ← API service se call
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComponent message={error} onRetry={fetchProducts} />;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-6 sm:p-8 md:p-12 mb-8 sm:mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
          Welcome to ShopHub
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-blue-100 mb-4 sm:mb-6">
          Discover amazing products at best prices
        </p>
        <a
          href="#products"
          className="inline-block bg-white text-blue-600 px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Shop Now
        </a>
      </div>

      {/* Products Grid */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6" id="products">
        All Products ({products.length})
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;