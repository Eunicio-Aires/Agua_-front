import {NextResponse} from 'next/server';
import { getSession } from '@/lib/cookiesConf';
export async function GET(request:Request){
    const { searchParams } = new URL(request.url)
    const token = await getSession()
    const id = searchParams.get('_id')
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `${token}`,
        },
      })

    const product = await res.json()
 
    return NextResponse.json({ product })
}