import { createSupabaseServerClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient()
    
    const sampleCourses = [
      { title: 'Advanced React Patterns', progress: 75, icon_name: 'Cpu' },
      { title: 'Mastering Framer Motion', progress: 42, icon_name: 'Sparkles' },
      { title: 'TypeScript Mastery', progress: 88, icon_name: 'Code2' },
      { title: 'Next.js 15 Essentials', progress: 23, icon_name: 'Globe' }
    ]
    
    const { data, error } = await supabase
      .from('courses')
      .insert(sampleCourses)
      .select()
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }
    
    return Response.json({ 
      success: true, 
      message: `Added ${data.length} courses`,
      courses: data 
    })
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 })
  }
}
