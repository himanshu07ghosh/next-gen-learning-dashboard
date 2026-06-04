'use client'

import { Flame } from 'lucide-react'

export default function HeroTile({ userName, streak }: { userName: string; streak: number }) {
  return (
    <div className="bento-tile p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Welcome back, {userName}
          </h1>
          <p className="text-gray-400 mt-2">Ready to continue your learning journey?</p>
        </div>
        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl px-4 py-3">
          <Flame className="w-8 h-8 text-orange-500" />
          <div>
            <div className="text-2xl font-bold text-orange-400">{streak}</div>
            <div className="text-xs text-gray-400">day streak</div>
          </div>
        </div>
      </div>
    </div>
  )
}
