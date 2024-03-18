import { NextResponse, NextRequest } from "next/server"
import { getSession } from "@/lib/cookiesConf"
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
  ) {
    const token = getSession()
    const id = params.id 
    // const toke = await `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE3NzRjMGUyODA5OTAwMmYxNThlMyIsImlhdCI6MTcwOTgyMTA3MSwiZXhwIjoxNzA5OTA3NDcxfQ.oeKHAXmxlcfCFwSyBc7A0HxlSrH2vrjfgaZj-mKk3-8`
    const res = await fetch(`https://agua-p.vercel.app/adm/mesunic/65a956bb8f3b0f53bed8bf8d`,{
        headers: {
          'Authorization' :`${token}`,
        }
      })
    const clientes = await res.json()
    return NextResponse.json( clientes )
  }