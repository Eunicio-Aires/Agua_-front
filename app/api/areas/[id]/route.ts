import { NextRequest,NextResponse } from 'next/server';


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 

    const res = await fetch(`https://agua-p.vercel.app/adm/area/${id}`,{cache:"no-cache"})
    const product = await res.json()
    return NextResponse.json( product )
  }

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
  
//     const res = await fetch(`https://agua-p.vercel.app/adm/area/${id}`)
//     const product = await res.json()
   
//     return NextResponse.json( {product} )

  
// }