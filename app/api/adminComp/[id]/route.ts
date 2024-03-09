import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
    const token = await getSession()

    const res = await fetch(`https://agua-p.vercel.app/adm/adminComp/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${token}`,
      },
    })
    const clientes = await res.json()
    return NextResponse.json( clientes )
  }




 