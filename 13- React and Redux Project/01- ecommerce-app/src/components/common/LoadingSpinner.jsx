const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;