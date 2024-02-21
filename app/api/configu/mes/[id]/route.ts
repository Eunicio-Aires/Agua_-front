import { NextRequest, NextResponse } from 'next/server'
 import { getId } from '@/lib/cookiesConf'
export async function POST(request:NextRequest,{params}:any) {
  const idCom =await getId()
  //   const ids = await params.id;
  // const id = await ids[0];
  
  const body = await request.json();
  try {
    const response = await fetch(`https://agua-p.vercel.app/adm/criarMes/${idCom}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    // const data = await response.json();
    // console.log(ids);
    return NextResponse.json(response); 
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}