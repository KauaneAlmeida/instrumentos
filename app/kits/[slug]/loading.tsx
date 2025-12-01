export default function LoadingKit() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 animate-pulse" />
            <div className="flex flex-col justify-center space-y-6">
              <div className="h-12 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
              </div>
              <div className="h-14 bg-gray-200 rounded-lg w-64 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
