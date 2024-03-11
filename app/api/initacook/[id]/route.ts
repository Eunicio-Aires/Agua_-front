import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

 

export async function POST(request: NextRequest) { 
  const { searchParams } = new URL(request.url)
  const idc = searchParams.get('_id')


  const resb = await request.json()
  const res = await fetch(`https://agua-p.vercel.app/adm/fontcook/${idc}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY,
    },
   body: JSON.stringify( resb )
  })


      const data = await res.json();
      const id   = await data.idComp
      cookies().set('idCompan',id )
 
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
  

  return NextResponse.json(id)
}


//   import { NextRequest, NextResponse } from 'next/server'
// import { getSession } from '@/lib/cookiesConf';
// import { cookies } from 'next/headers'

// export async function POST(request:NextRequest,{params}:any) {
//   const ids = await params.ids 
//   const idc = await ids[0]
//   const idm = await ids[1]
//   const body = await request.json();
//   const token = await getSession()
//   try {
//     const response = await fetch(`https://agua-p.vercel.app/adm/fontcook/${idc}`,{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Authorization' : `${token}`,
//       },
//       // body: JSON.stringify(body),
//     });
//     const data = await response.json();
//     const id   = await data.idComp
//     cookies().set('idCompan' , id )
   
//     return NextResponse.json(id); 
//   } catch (error) {
//     return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
//   }
// }