import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) { 
  const resb = await request.json()
  const res = await fetch('https://agua-p.vercel.app/adm/loginSadmin',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
   body: JSON.stringify( resb )
  })
 
  const data = await res.json()
 
  return NextResponse.json(data)
}