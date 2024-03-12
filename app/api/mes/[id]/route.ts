import { NextResponse,NextRequest } from "next/server"
import { getCompan } from "@/lib/cookiesConf"
import { getSession } from '@/lib/cookiesConf';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const idCom = await getCompan()
    const token = await getSession()
    const id = params.id 
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${idCom}`,{cache:'no-store'})

    const meses = await res.json()
    return NextResponse.json( meses )
  }

