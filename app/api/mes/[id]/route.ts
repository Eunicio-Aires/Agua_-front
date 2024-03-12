import { NextResponse,NextRequest } from "next/server";
import { getCompan } from '@/lib/cookiesConf';


export async function GET( request: Request, { params }: { params: { id: string } }
  ) {
    
    
    const idComp = await getCompan()
    const id = params.id 
    const res = await fetch(`https://agua-p.vercel.app/adm/mesesGetbtcomp/${idComp}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.DATA_API_KEY,
      },
    //  body: JSON.stringify( resb )
    })

    const meses = await res.json()
    return NextResponse.json( meses )
  }

