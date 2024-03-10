import { NextRequest, NextResponse } from 'next/server'

import { cookies } from 'next/headers'

export async function POST(request:NextRequest,{params}:any) {
 
  const ids = await params.id;
  const id = await ids[0];

    try {
      const response = await fetch(`https://agua-p.vercel.app/adm/fontcook/${id} `,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
     
      });
      const data = await response.json();
      const idc   = await data.idComp

      cookies().set('idCompan' , idc )
      return NextResponse.json(id); 
    } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
  }