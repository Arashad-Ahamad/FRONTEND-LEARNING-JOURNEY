export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      {/* Back link */}
      <div className="h-5 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />

      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 animate-pulse">
        {/* Image */}
        <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-lg" />

        {/* Details */}
        <div className="space-y-4">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
          <div className="h-8 w-full bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-5 w-12 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
          <div className="h-10 w-28 bg-gray-200 dark:bg-gray-800 rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}