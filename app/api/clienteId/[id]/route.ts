import { cookies, headers } from 'next/headers';
import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf'


export async function GET(request: Request,
    { params }: { params: { id: string } }
  ) {

    const tokenCl = getSession()
   

    
    const id = params.id
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${tokenCl}`,
      },
    //  body: JSON.stringify( resb )
    })
    const product = await res.json()
    return NextResponse.json( product )


  }

  