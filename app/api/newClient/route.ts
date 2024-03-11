import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getCompan } from '@/lib/cookiesConf'
import { getSession } from '@/lib/cookiesConf';
export async function POST(request: NextRequest) { 

    // const token = await getSession()
    const compId = await getCompan()
    const resb = await request.json()
    const res = await fetch(`https://agua-p.vercel.app/adm/nclientCompan/${compId}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization' : `${token}`,
      },
     body: JSON.stringify( resb )
    })
   
    const data = await res.json()
    
    
  
    return NextResponse.json(data)
  }