


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