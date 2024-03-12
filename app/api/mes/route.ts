import { NextResponse,NextRequest } from "next/server";
import { getCompan } from '@/lib/cookiesConf'

export async function GET(request: Request) {
    const compId = await getCompan()
    const res = await fetch(`https://data.mongodb-api.com/product/${compId}`, {
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY!,
      },
    })
    const product = await res.json()
   
    return NextResponse.json(product )
  }