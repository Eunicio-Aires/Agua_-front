import { NextResponse,NextRequest } from "next/server"
import { getCompan } from "@/lib/cookiesConf"
import { getSession } from '@/lib/cookiesConf';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const idCom = getCompan()
    const token = await getSession()
    const id = params.id 
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${idCom}`,{cache:'no-store'})
    
    const meses = await res.json()
    return NextResponse.json( meses )
  }

  // export async function GET(request: Request) {
  //   const idCom = getCompan()
  //   const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${idCom}`,{cache:"no-cache"})
  //   const respo = await res.json();
  
  //   return NextResponse.json(respo)
  // }