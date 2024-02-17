import { cookies } from 'next/headers';
import { NextRequest,NextResponse } from 'next/server';


export async function GET(request: Request,
    { params }: { params: { id: string } }
  ) {

    const cookieStore = cookies()
    const theme = cookieStore.get('token')
    const id = params.id
    console.log('console teste')
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`,{cache:"no-cache"})
    const product = await res.json()
    return NextResponse.json( product )
  }