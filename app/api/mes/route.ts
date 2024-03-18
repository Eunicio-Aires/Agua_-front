import { NextResponse,NextRequest } from "next/server";
import { getCompan } from '@/lib/cookiesConf';
export async function GET(request: Request) {
    const idComp = await getCompan()
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${idComp}`,)
    const data = await res.json()
   
    return NextResponse.json( data)
  }