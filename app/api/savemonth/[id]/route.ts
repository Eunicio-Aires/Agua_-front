

import { redirect } from 'next/navigation'
import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf';
import { cookies } from 'next/headers'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id 
    const token = await getSession()
    cookies().set('MesSave' ,id)
    
    return NextResponse.json( id )
  }