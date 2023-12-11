import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('http://localhost:3001/adm/meses', {
    cache:"no-cache"} // Revalidate every 60 seconds
  )
  const data = await res.json()
 
  return NextResponse.json({data})
}