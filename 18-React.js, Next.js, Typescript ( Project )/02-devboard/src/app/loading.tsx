export default function Loading() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4">
      {/* Header */}
      <div>
        <div className="h-8 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-4 w-64 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mt-2" />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-lg" />
            </div>
            <div className="h-7 w-20 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
            <div className="h-3 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse"
          >
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
            <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded" />
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 animate-pulse">
        <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
          >
            <div className="space-y-1">
              <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-3 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded" />
              <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}