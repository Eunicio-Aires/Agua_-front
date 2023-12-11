 
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const res = await fetch('http://localhost:3001/adm/allAreas',{cache:"no-cache"})
  const respo = await res.json();

  return NextResponse.json(respo)
}

// import { NextResponse } from 'next/server'
 
// export async function POST(request: Request) {
//   const res = await request.json()
//   return NextResponse.json({ res })
// }