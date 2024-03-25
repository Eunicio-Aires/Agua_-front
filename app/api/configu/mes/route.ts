import { NextRequest, NextResponse } from 'next/server'
import { cookies } from "next/headers";


export async function POST(request: NextRequest) {
    const idComp = await cookies().get('idComp')
    const body = await request.json();
    const res = await fetch(`https://agua-p.vercel.app/adm/criarMes/${idComp}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY!,
      },
      body: JSON.stringify(body),
    })
   
    const data = await res.json()
   
    return NextResponse.json(data)
  }