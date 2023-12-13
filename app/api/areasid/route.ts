import {NextResponse } from 'next/server';

 export async function GET(request:Request){
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    const zonaid = await fetch(`https://agua-p.vercel.app/adm/area/${id}`,{cache:"no-cache"})

    return NextResponse.json(zonaid)
 }