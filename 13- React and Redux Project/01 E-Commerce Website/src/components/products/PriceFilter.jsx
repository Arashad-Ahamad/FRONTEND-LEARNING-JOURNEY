const PriceFilter = ({ onPriceChange, selectedPrice }) => {
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Above $200', min: 200, max: Infinity },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-800 text-base mb-3">Price Range</h3>
      <div className="space-y-2">
        {priceRanges.map((range, idx) => (
          <label key={idx} className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="radio"
              name="price"
              checked={selectedPrice === idx}
              onChange={() => onPriceChange(idx, range.min, range.max)}
              className="w-3.5 h-3.5 accent-gray-700"
            />
            <span className="text-gray-700">{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;