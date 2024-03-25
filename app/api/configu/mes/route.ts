import { NextRequest, NextResponse } from 'next/server'
import { cookies } from "next/headers";
import { getCompan } from '@/lib/cookiesConf';


export async function POST(request: NextRequest) {
   const idcp = await getCompan()
    const body = await request.json();
    const res = await fetch(`https://agua-p.vercel.app/adm/criarMes/${idcp}`, {
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