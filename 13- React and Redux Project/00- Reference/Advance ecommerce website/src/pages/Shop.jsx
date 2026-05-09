import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts } from '../features/productsSlice';
import ProductCard from '../components/products/ProductCard';
import PriceFilter from '../components/products/PriceFilter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorComponent from '../components/common/ErrorComponent';
import { FiFilter, FiChevronUp, FiChevronDown, FiGrid } from 'react-icons/fi';

const Shop = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceIndex, setPriceIndex] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || 'all';
  const categories = ['all', ...new Set(items.map(p => p.category))];

  // Fetch products on mount
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts()).finally(() => {
        setInitialLoad(false);
      });
    } else {
      setInitialLoad(false);
    }
  }, [dispatch, items.length]);

  // Handle category from URL param
  useEffect(() => {
    if (categoryParam !== 'all') {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter products
  useEffect(() => {
    let filtered = [...items];

    if (searchQuery) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    filtered = filtered.filter(p => p.price >= minPrice && p.price <= maxPrice);

    setFilteredProducts(filtered);
  }, [items, searchQuery, selectedCategory, minPrice, maxPrice]);

  const handlePriceChange = (index, min, max) => {
    setPriceIndex(index);
    setMinPrice(min);
    setMaxPrice(max);
  };

  // Show loading spinner while fetching
  if (loading || initialLoad) {
    return <LoadingSpinner />;
  }

  // Show error if any
  if (error) {
    return <ErrorComponent message={error} onRetry={() => {
      setInitialLoad(true);
      dispatch(fetchProducts()).finally(() => setInitialLoad(false));
    }} />;
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full bg-gray-100 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <FiFilter size={16} className="text-gray-600" />
          <span>Filters & Categories</span>
          {isFilterOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block md:w-1/4 lg:w-1/5`}>
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FiGrid size={18} className="text-gray-700" />
              <h3 className="font-semibold text-gray-800 text-base">Categories</h3>
            </div>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === cat}
                    onChange={() => {
                      setSelectedCategory(cat);
                      setIsFilterOpen(false);
                    }}
                    className="w-3.5 h-3.5 accent-gray-700"
                  />
                  <span className="capitalize text-sm text-gray-700">{cat}</span>
                </label>
              ))}
            </div>
          </div>
          <PriceFilter onPriceChange={handlePriceChange} selectedPrice={priceIndex} />
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4 lg:w-4/5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 md:mb-6">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              {searchQuery ? `Search: "${searchQuery.substring(0, 20)}"` : 'All Products'}
            </h1>
            <span className="text-gray-500 text-sm sm:text-base">
              {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;