import { NextResponse,NextRequest } from "next/server";
import { getCompan } from '@/lib/cookiesConf';
export async function GET(request: NextRequest) {
    const idComp = await getCompan()
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/65a956bb8f3b0f53bed8bf8d`,)
    const data = await res.json()
   
    return NextResponse.json( data)
  }