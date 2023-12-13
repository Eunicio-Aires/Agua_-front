import { NextResponse } from 'next/server'
 
export async function POST(request: Request) {
    const resb = await request.json()
  const { searchParams } = new URL(request.url)
  const _id = searchParams.get('id')
  const _idm = searchParams.get('idm')
  const res = await fetch(`https://agua-p.vercel.app/adm/addfatura/${_id}/${_idm}`, {
    headers: {
      'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({ resb })
})

const data = await res.json()

return NextResponse.json(data)
}