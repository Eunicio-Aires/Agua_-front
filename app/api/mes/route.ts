import { NextResponse,NextRequest } from "next/server";
import { getCompan } from '@/lib/cookiesConf'

export async function GET(request: Request) {
    const compId = await getCompan()
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/65d4f7c0c2661d0c71a1e204`, {
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY!,
      },
    })
    const product = await res.json()
   
    return NextResponse.json(product )
  }