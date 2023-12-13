import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://agua-p.vercel.app/adm/todos', {
    cache:"no-cache"} // Revalidate every 60 seconds
  )
  const data = await res.json()
 
  return NextResponse.json({data})
}


 
