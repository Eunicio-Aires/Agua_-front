import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';
import { setCook } from '@/lib/cookiesConf'
import { getSession } from '@/lib/cookiesConf';

export async function GET( request: NextRequest,{ params }: { params: { id: string } } ) {
    const id = params.id 
    const token = await getSession()
    request.cookies.set('comp', params.id)
    const res = await fetch(`https://agua-p.vercel.app/adm/componeclient/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization' :`${token}`,
      }
    })
    const product = await res.json()
    const idcomp = await product.paramComp
    const dados = await product.compan
    //  let response = NextResponse.next()
    //  response.cookies.set('idcompy', id)
    cookies().set('compan' , id )
           
    return NextResponse.json( dados )
  }




 