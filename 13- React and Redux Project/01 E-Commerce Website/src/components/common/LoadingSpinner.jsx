const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="relative">
        <div className="w-12 h-12 border-3 border-gray-200 rounded-full animate-spin border-t-gray-800"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;