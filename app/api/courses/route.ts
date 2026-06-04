import { createSupabaseServerClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient()
    const { data: courses, error } = await supabase
      .from('courses')
      .select('*')
    
    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }
    
    return Response.json({ 
      success: true, 
      count: courses.length,
      courses: courses 
    })
  } catch (error) {
    return Response.json({ error: String(error) }, { status: 500 })
  }
}
