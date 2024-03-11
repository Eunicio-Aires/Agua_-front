// import { NextRequest, NextResponse } from 'next/server'
// import { cookies } from 'next/headers'

 

// export async function POST(request: NextRequest) { 
//   const { searchParams } = new URL(request.url)
//   const idc = searchParams.get('_id')


  // const resb = await request.json()
  // const res = await fetch(`https://agua-p.vercel.app/adm/fontcook/${idc}`,{
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    // },
  //  body: JSON.stringify( resb )
  // })


  //     const data = await res.json();
  //     const id   = await data.idComp
  //     cookies().set('idCompan',id )
 
  // const data = await res.json()
  // const id   = await data.id
  // const token = await data.token
  // const nome = await data.nome
  // const apelido = await data.apelido
  // const email = await data.email
  // cookies().set('token' , token )
  // cookies().set('id' , id )
  // cookies().set('nome' ,nome)
  // cookies().set('apelido' ,apelido)
  // cookies().set('email' ,email)
  

//   return NextResponse.json(id)
// }


import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf';
import { cookies } from 'next/headers'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
    const token = await getSession()

    const res = await fetch(`https://agua-p.vercel.app/adm/fontcook/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${token}`,
      },
    })
    const clientes = await res.json()
    const idcom   = await clientes.idComp
    cookies().set('idComp' ,idcom)
    return NextResponse.json( idcom )
  }