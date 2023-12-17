import {NextResponse,NextRequest} from 'next/server';


export  function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id // 'a', 'b', or 'c'

    const res =  fetch(`https://agua-p.vercel.app/adm/area/${id}`,{cache:"no-cache"})

    // const product =  res.json()
 
    return NextResponse.json({ res })
  }