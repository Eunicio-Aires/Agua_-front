import { NextRequest,NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { setCook } from '@/lib/cookiesConf'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
      setCook(id)
    const res = await fetch(`https://agua-p.vercel.app/adm/componeclient/${id}`,{cache:"no-cache"})
    const product = await res.json()
    const idcomp = await product.paramComp
    const dados = await product.compan
    cookies().set('idco' , id ) 
    // cookies().set('token' , token )

    return NextResponse.json( dados )
  }




 