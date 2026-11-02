export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto space-y-4 p-4">
      <div className="h-6 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse" />
        <div className="space-y-3">
          <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-8 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}