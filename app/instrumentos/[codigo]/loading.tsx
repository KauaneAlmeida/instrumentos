export default function LoadingInstrumento() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="h-4 bg-gray-200 rounded w-96 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 animate-pulse" />
          </div>

          <div className="space-y-6">
            <div className="h-8 bg-gray-200 rounded w-32 animate-pulse" />
            <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-48 animate-pulse" />
            <div className="h-48 bg-gray-200 rounded-lg animate-pulse" />
            <div className="h-12 bg-gray-200 rounded-lg w-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
