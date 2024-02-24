import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { cookies } from 'next/headers'

export async function POST(request:NextRequest,{params}:any) {
    const ids = await params._id;
   
    
  //   const body = await request.json();
    try {
      const response = await fetch(`https://agua-p.vercel.app/adm/fontcook/${ids}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      //   body: JSON.stringify(body),
      });
      const data = await response.json();
      const id   = await data
      cookies().set('idCompan' , id )
      return NextResponse.json(data); 
    } catch (error) {
      return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
    }
  }