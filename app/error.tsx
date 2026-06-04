'use client'
import { AlertCircle } from 'lucide-react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-dark-800 rounded-2xl border border-red-500/30 p-8 text-center">
        <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-white mb-2">Something went wrong</h2>
        <p className="text-gray-400 mb-6">{error.message}</p>
        <button onClick={reset} className="px-6 py-2 bg-purple-600 rounded-xl">Try again</button>
      </div>
    </div>
  )
}
