import { NextRequest, NextResponse } from 'next/server'
 import { getId } from '@/lib/cookiesConf'
 import { getSession } from '@/lib/cookiesConf';
export async function POST(request:NextRequest,{params}:any) {
  const idCom =await getId()
  //   const ids = await params.id;
  // const id = await ids[0];
  const token = await getSession()
  
  const body = await request.json();
  try {
    const response = await fetch(`https://agua-p.vercel.app/adm/criarMes/${idCom}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `${token}`,
      },
      body: JSON.stringify(body),
    });
    // const data = await response.json();
    // console.log(ids);
    // cookies().set('compan' , 'lksdk1234567890' )
    return NextResponse.json(response); 
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}