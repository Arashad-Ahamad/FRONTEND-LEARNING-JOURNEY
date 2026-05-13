import { FiAlertCircle } from 'react-icons/fi';

const ErrorComponent = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-4">
      <FiAlertCircle className="text-gray-500 text-5xl mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-6">{message || 'Failed to load data'}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorComponent;