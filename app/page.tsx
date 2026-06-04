import { createSupabaseServerClient } from '@/lib/supabase/server'
import DashboardClient from '@/components/DashboardClient'
import type { Course } from '@/types'

export default async function HomePage() {
  const supabase = await createSupabaseServerClient()
  
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
    throw new Error('Failed to load courses. Please check your database connection.')
  }

  return <DashboardClient courses={courses as Course[]} />
}