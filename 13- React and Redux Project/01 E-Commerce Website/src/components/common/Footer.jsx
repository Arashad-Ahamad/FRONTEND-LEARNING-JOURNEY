import { Link } from 'react-router-dom';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-8">
          
          {/* Brand - Left Side */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-xl font-bold mb-3">ShopHub</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A modern e-commerce web app built with React, Redux Toolkit, and Tailwind CSS.
            </p>
            <div className="flex justify-center sm:justify-start gap-4 mt-4">
              <a 
                href="https://github.com/Arashad-Ahamad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://x.com/ArashadAhamad10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arashad-ahamad-768935337/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links - Right Side */}
          <div className="text-center sm:text-right">
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition">Shop</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition">Cart</Link></li>
              <li><Link to="/wishlist" className="text-gray-400 hover:text-white transition">Wishlist</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-xs text-gray-500">
            <p>&copy; 2026 ShopHub. All rights reserved. Developed by Arashad Ahamad</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;