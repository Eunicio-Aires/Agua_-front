import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'

export async function POST(request:NextRequest,{params}:any) {
  const ids = await params.ids 
  const idc = await ids[0]

  const response = await fetch(`https://agua-p.vercel.app/adm/fontcook/${params.idc} `,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
    try {
     
      const data = await response.json();
      const id   = await data.idComp
      cookies().set('idCompan' , id )
      return NextResponse.json(id); 
    } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
  }