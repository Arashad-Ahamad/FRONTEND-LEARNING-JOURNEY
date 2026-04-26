import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { 
  FiShoppingCart, 
  FiSearch, 
  FiHeart,  
  FiX,
  FiMenu,
  FiHome,
  FiGrid
} from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const wishlistCount = useSelector((state) => state.wishlist?.items?.length || 0);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/shop?search=${searchTerm}`);
      setMobileSearchOpen(false);
    }
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: <FiHome size={18} /> },
    { path: '/shop', name: 'Shop', icon: <FiGrid size={18} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navbar - Clean, No Top Bar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-[70px]">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">
                ShopHub
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2 w-80 lg:w-96 focus-within:ring-2 focus-within:ring-blue-400 focus-within:bg-white transition-all">
              <FiSearch className="text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none ml-2 w-full text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>

            {/* Right Icons */}
            <div className="flex items-center gap-1 md:gap-2">
              {/* Mobile Search Button */}
              <button
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
              >
                {mobileSearchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
              </button>

              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <FiHeart size={20} className="hover:text-red-500 transition" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              
              {/* Cart */}
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <FiShoppingCart size={20} className="hover:text-blue-600 transition" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center">
                    {totalQuantity}
                  </span>
                )}
              </Link>
    

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition"
              >
                {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {mobileSearchOpen && (
            <div className="md:hidden py-3 border-t border-gray-200">
              <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-md px-4 py-2">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none ml-2 w-full text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setMobileSearchOpen(false)}
                  className="ml-2 text-gray-500 text-sm font-medium"
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-black/50 z-50 transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMobileMenuOpen(false)}>
        <div className={`absolute top-0 left-0 w-72 bg-white h-full shadow-xl transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          
          {/* Sidebar Header */}
          <div className="p-5 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div>
                <p className="font-semibold text-gray-800">ShopHub</p>
                <p className="text-xs text-gray-500 mt-0.5">Shop with confidence</p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div className="py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-5 py-3.5 text-gray-700 transition ${
                  isActive(link.path) 
                    ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;