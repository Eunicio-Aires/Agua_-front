import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { getSession } from  '@/lib/cookiesConf'

export async function POST(request: NextRequest) { 
  const tokenFun = await getSession()
  const header = await {
    'Authorization': tokenFun,
    // Outros headers personalizados, se necessário
  };
  
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

  // const requestHeaders = new Headers(request.headers)
  // const tokenHea = await requestHeaders.get("Authorization")
  // const nome = await requestHeaders.get("nome")
  const id   = await data.id
  const token = await data.token
  cookies().set('token' , token )
  cookies().set('id' , id )

  return NextResponse.json(data)
}