'use client'

import { useEffect, useState } from 'react'
import { Flame, Activity } from 'lucide-react'
import type { Course } from '@/types'

interface DashboardClientProps {
  courses: Course[]
}

export default function DashboardClient({ courses }: DashboardClientProps) {
  console.log('Courses received:', courses) // Debug: Check if courses are received

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-b border-dark-600/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome back, Alex Johnson</h1>
              <p className="text-gray-400 mt-2">Ready to continue your learning journey?</p>
            </div>
            <div className="flex items-center gap-3 bg-orange-500/10 rounded-2xl px-4 py-3">
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold text-orange-400">12</div>
                <div className="text-xs text-gray-400">day streak</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-white mb-6">My Active Courses</h2>
        
        {courses.length === 0 ? (
          <div className="text-center py-12 bg-dark-800/30 rounded-2xl">
            <p className="text-gray-400">No courses found. Please check your database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-600/50 p-5 hover:scale-105 transition-transform duration-200">
                <h3 className="font-semibold text-lg text-white mb-3">{course.title}</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-purple-400 font-medium">{course.progress}%</span>
                </div>
                <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Activity Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-600/50 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-green-400" />
            <h3 className="font-semibold text-xl text-white">Learning Activity</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">47</div>
              <div className="text-sm text-gray-400">Hours learned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">12</div>
              <div className="text-sm text-gray-400">Quizzes done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">8</div>
              <div className="text-sm text-gray-400">Certificates</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}