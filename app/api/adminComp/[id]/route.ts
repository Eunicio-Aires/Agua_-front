import { NextRequest,NextResponse } from 'next/server';


export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 

    const res = await fetch(`https://agua-p.vercel.app/adm/adminComp/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE3NzRjMGUyODA5OTAwMmYxNThlMyIsImlhdCI6MTcwOTgyMTA3MSwiZXhwIjoxNzA5OTA3NDcxfQ.oeKHAXmxlcfCFwSyBc7A0HxlSrH2vrjfgaZj-mKk3-8',
      },
    })
    const clientes = await res.json()
    return NextResponse.json( clientes )
  }




 