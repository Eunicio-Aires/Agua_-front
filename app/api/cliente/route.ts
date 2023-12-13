import {NextResponse} from 'next/server';

export async function GET(request:Request){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('_id')
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`)

    const product = await res.json()
 
    return NextResponse.json({ product })
}