import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { getSession } from  '@/lib/cookiesConf'
 

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
  const id   = await data.id
  const token = await data.token
  const nome = await data.nome
  const apelido = await data.apelido
  const email = await data.email
  cookies().set('token' , token )
  cookies().set('id' , id )
  cookies().set('nome' ,nome)
  cookies().set('apelido' ,apelido)
  cookies().set('email' ,email)
  

  return NextResponse.json(data)
}