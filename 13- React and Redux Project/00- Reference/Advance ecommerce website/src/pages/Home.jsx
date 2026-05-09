import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../features/productsSlice';
import ProductCard from '../components/products/ProductCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorComponent from '../components/common/ErrorComponent';
import { FiChevronRight } from 'react-icons/fi';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [initialLoad, setInitialLoad] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  // Fetch products
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts()).finally(() => {
        setInitialLoad(false);
      });
    } else {
      setInitialLoad(false);
    }
  }, [dispatch, items.length]);

  // Category filters
  const categories = [
    { id: 'all', name: 'All Products', icon: '🔍', mobileName: 'All' },
    { id: 'electronics', name: 'Electronics', icon: '💻', mobileName: 'Tech' },
    { id: 'jewelery', name: 'Jewelery', icon: '💍', mobileName: 'Jewel' },
    { id: "men's clothing", name: "Men's Fashion", icon: '👔', mobileName: 'Men' },
    { id: "women's clothing", name: "Women's Fashion", icon: '👗', mobileName: 'Women' },
  ];

  // Filter products by category
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);
  
  const featuredProducts = filteredItems.slice(0, 8);

  // Loading state
  if (loading || initialLoad) {
    return <LoadingSpinner />;
  }

  // Error state
  if (error) {
    return <ErrorComponent message={error} onRetry={() => {
      setInitialLoad(true);
      dispatch(fetchProducts()).finally(() => setInitialLoad(false));
    }} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section - Fully Responsive */}
      <section className="bg-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between py-8 sm:py-10 md:py-12 lg:py-16">
            {/* Left Content */}
            <div className="text-center md:text-left w-full md:w-2/3 lg:w-1/2 mt-6 md:mt-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Summer Sale <span className="text-blue-600">2026</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-3">
                Up to 50% Off on Selected Items
              </p>
              <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-5 md:mb-6 max-w-md mx-auto md:mx-0">
                Shop the latest trends with exclusive discounts. Free shipping on orders over $50.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 sm:px-6 md:px-7 lg:px-8 py-2 sm:py-2.5 md:py-3 rounded-md font-medium hover:bg-blue-700 transition text-sm sm:text-base"
              >
                Shop Now <FiChevronRight size={14} className="sm:size-16" />
              </Link>
            </div>
            
            {/* Right Image/Icon */}
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              🛍️
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs - Horizontal Scroll on Mobile, Grid on Desktop */}
      <section className="py-3 sm:py-4 md:py-5 lg:py-6 bg-white border-y border-gray-200">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          {/* Mobile: Horizontal Scroll (Visible only on mobile) */}
          <div className="flex md:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.mobileName}
              </button>
            ))}
          </div>
          
          {/* Desktop: Grid (Visible on tablet and above) */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 sm:mb-5 md:mb-6">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                {activeCategory === 'all' ? 'Featured Products' : categories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Shop our most popular items</p>
            </div>
            <Link to="/shop" className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center gap-1">
              View All <FiChevronRight size={12} className="sm:size-14" />
            </Link>
          </div>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5">
            {/* Mobile: 1 column (below 480px) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;