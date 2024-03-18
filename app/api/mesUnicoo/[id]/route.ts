import { NextResponse, NextRequest } from "next/server"
import { getSession } from "@/lib/cookiesConf"
// export async function GET(
//     request: NextRequest,
//     { params }: { params: { id: string } }
//   ) {
//     // const token = getSession()
//     const id = params.id 
//     const res = await fetch(`https://agua-p.vercel.app/adm/mesunic/${id}`,{cache:'no-store'})
//     const clientes = await res.json()
//     return NextResponse.json( clientes )
//   }


  export async function GET( request: Request, { params }: { params: { id: string }}) {
    
    
    
    const id = params.id;
    const res = await fetch(`https://agua-p.vercel.app/adm/mesunic/${id}`,)

    const meses = await res.json()
    return NextResponse.json(meses)
  }