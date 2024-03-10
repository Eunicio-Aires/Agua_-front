 
import { NextResponse } from 'next/server'
import { getSession } from '@/lib/cookiesConf';

export async function GET(request: Request) {
  const token = await getSession()
  const res = await fetch('https://agua-p.vercel.app/adm/allAreas',{
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `${token}`,
    },
  })
  const respo = await res.json();

  return NextResponse.json(respo)
}

