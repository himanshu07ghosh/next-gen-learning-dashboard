export default function Loading() {
  return (
    <div className="flex min-h-screen bg-dark-900">
      <div className="flex-1 p-6 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bento-tile p-6 md:p-8 animate-pulse">
            <div className="h-8 bg-dark-700 rounded w-64 mb-4" />
            <div className="h-4 bg-dark-700 rounded w-48" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bento-tile p-5 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-dark-700 mb-4" />
                <div className="h-5 bg-dark-700 rounded-lg mb-3 w-3/4" />
                <div className="h-4 bg-dark-700 rounded mb-2 w-1/2" />
                <div className="h-2 bg-dark-700 rounded-full" />
              </div>
            ))}
          </div>
          
          <div className="bento-tile p-6 animate-pulse">
            <div className="h-64 bg-dark-700 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
