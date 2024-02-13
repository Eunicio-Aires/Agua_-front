import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 

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
  async function create(data:any) {
    const id = await data.id
    cookies().set('name', 'lee')
  }
 
  return NextResponse.json(data)
}