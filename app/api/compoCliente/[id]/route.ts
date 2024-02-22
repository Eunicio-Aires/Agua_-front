import { NextRequest,NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
     
    const res = await fetch(`https://agua-p.vercel.app/adm/componeclient/${id}`,{cache:"no-cache"})
    const product = await res.json()
    const idcomp = await product.paramComp
    const dados = await product.compan
    cookies().set('idcompy' , idcomp ) 

    return NextResponse.json( dados )
  }




 