export function SkeletonHero() {
  return (
    <div className="bento-tile p-6 md:p-8 animate-pulse">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="space-y-3 flex-1">
          <div className="h-4 bg-dark-700 rounded w-24" />
          <div className="h-8 bg-dark-700 rounded w-64" />
          <div className="h-4 bg-dark-700 rounded w-48" />
        </div>
        <div className="w-32 h-20 bg-dark-700 rounded-2xl" />
      </div>
    </div>
  )
}