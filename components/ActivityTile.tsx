'use client'

import { Activity } from 'lucide-react'

export default function ActivityTile() {
  return (
    <div className="bento-tile p-6">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-5 h-5 text-green-400" />
        <h3 className="font-semibold text-lg text-white">Learning Activity</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">47</div>
          <div className="text-xs text-gray-400">Hours learned</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">12</div>
          <div className="text-xs text-gray-400">Quizzes done</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">8</div>
          <div className="text-xs text-gray-400">Certificates</div>
        </div>
      </div>
    </div>
  )
}
