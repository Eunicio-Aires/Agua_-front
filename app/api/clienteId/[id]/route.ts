import { cookies, headers } from 'next/headers';
import { NextRequest,NextResponse } from 'next/server';
import { getSession } from '@/lib/cookiesConf'


export async function GET(request: Request,
    { params }: { params: { id: string } }
  ) {

    const tokenCl = getSession()
    const headers:any = await {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE3NzRjMGUyODA5OTAwMmYxNThlMyIsImlhdCI6MTcwODMwNjQ1NCwiZXhwIjoxNzA4MzkyODU0fQ.W3v5J8Cj9PIbp1oA3t-ZeCQqJQDP0qfkumROwR_OtDU',
      
    }

    
    const id = params.id
    const res = await fetch(`https://agua-p.vercel.app/adm/oneclient/${id}`,headers)
    const product = await res.json()
    return NextResponse.json( product )


  }

  