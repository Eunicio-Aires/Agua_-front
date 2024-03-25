import { NextRequest, NextResponse } from 'next/server'
 import { getId } from '@/lib/cookiesConf'
 import { getSession } from '@/lib/cookiesConf';
 import { cookies } from "next/headers";


export async function POST(request: NextRequest,{ params }: { params: { id: string } } ) {
  const idComp = await cookies().get('idComp')
  // const idCom =await getId()
  const id = params.id 
  //   const ids = await params.id;
  // const id = await ids[0];
 
  
  const body = await request.json();
  try {
    const response = await fetch(`https://agua-p.vercel.app/adm/criarMes/${idComp}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization' : `${token}`,
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