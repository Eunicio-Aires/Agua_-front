import { NextRequest,NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
     
    const res = await fetch(`https://agua-p.vercel.app/adm/componeclient/${id}`,{cache:"no-cache"})
    cookies().set('idcomp' , id ) 
    const product = await res.json()
    return NextResponse.json( product )
  }




 