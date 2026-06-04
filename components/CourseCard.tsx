'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index: number
}

const getIconComponent = (iconName: string) => {
  const Icon = (Icons as any)[iconName] || Icons.BookOpen
  return Icon
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const Icon = getIconComponent(course.icon_name)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
      className="relative bento-tile p-5 grain-texture overflow-hidden group"
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
        }}
      />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center mb-4 border border-purple-500/20">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>

        <h3 className="font-semibold text-lg text-white mb-3 line-clamp-1">
          {course.title}
        </h3>

        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="text-purple-400 font-medium">{course.progress}%</span>
        </div>

        <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${course.progress}%` } : { width: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 100, 
              damping: 15,
              delay: index * 0.05 
            }}
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="mt-4 text-xs text-purple-400 flex items-center gap-1"
        >
          <span>Continue learning</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.article>
  )
}