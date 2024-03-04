import { NextResponse } from "next/server"
import { getCompan } from "@/lib/cookiesConf"
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const idCom = getCompan()
    const id = params.id 

    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/65a956bb8f3b0f53bed8bf8d`,{cache: 'no-store'})
    const clientes = await res.json()
    return NextResponse.json( clientes )
  }