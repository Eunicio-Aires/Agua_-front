
import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request:NextRequest,{params}:any) {
  const ids = await params.ids 
  const idc = await ids[0]
  const idm = await ids[1]
  const body = await request.json();
  try {
    const response = await fetch(`https://agua-p.vercel.app/adm/addfatura/${idc}/${idm}`,{
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