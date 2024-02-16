import { NextRequest,NextResponse } from 'next/server';


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 

    const res = await fetch(`https://agua-p.vercel.app/adm/adminComp/${id}`,{cache:"no-cache"})
    const product = await res.json()
    return NextResponse.json( product )
  }




 