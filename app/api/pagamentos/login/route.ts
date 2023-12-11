import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) { 
  const resb = await request.json()
  const res = await fetch('http://localhost:3001/adm/procurarid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
   body: JSON.stringify({ resb })
  })
 
  const data = await res.json()
  

  // console.log(data)
 
  return NextResponse.json(data)
}