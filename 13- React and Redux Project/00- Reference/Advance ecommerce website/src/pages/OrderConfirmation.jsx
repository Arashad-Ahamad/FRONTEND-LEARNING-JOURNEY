import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderConfirmation = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <FiCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase. You will receive an email confirmation shortly.
      </p>
      <Link to="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;