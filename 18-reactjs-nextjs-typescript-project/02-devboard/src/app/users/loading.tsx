export default function Loading() {
  return (
    <div className="space-y-4 max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />

      {/* Table */}
      <div className="border rounded-xl overflow-hidden bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 animate-pulse">
        <div className="bg-gray-50 dark:bg-gray-800 p-3 flex gap-6">
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-3 border-t border-gray-100 dark:border-gray-800"
          >
            <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded ml-auto" />
            <div className="h-5 w-16 bg-gray-200 dark:bg-gray-800 rounded-full" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}