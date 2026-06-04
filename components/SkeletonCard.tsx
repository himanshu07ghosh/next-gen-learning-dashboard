export function SkeletonCard() {
  return (
    <div className="bento-tile p-5 animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-dark-700 mb-4" />
      <div className="h-5 bg-dark-700 rounded-lg mb-3 w-3/4" />
      <div className="h-4 bg-dark-700 rounded mb-2 w-1/2" />
      <div className="h-2 bg-dark-700 rounded-full" />
    </div>
  )
}