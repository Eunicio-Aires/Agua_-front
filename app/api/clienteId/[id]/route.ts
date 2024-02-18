import { cookies, headers } from 'next/headers';
import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf'


export async function GET(request: Request,
    { params }: { params: { id: string } }
  ) {

    const tokenCl = getSession()
    const id = params.id
    
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`,{cache:"no-cache"})
    console.log('console teste')
    const product = await res.json()
    return NextResponse.json( product )
  }