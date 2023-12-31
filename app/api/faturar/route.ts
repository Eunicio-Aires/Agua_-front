'use client'
import { NextResponse } from 'next/server'
 
// export async function GET() {
//   const res = await fetch('https://agua-p.vercel.app/adm/meses', {
//     cache:"no-cache"} // Revalidate every 60 seconds
//   )
//   const data = await res.json()
 
//   return NextResponse.json(data)

// }
export function GET(request: Request) {
  return fetch('https://agua-p.vercel.app/adm/meses',{
    cache: 'no-cache'})
    .then(res => res.json())
    .then(respo => {
      return new Response(JSON.stringify(respo), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    })
    .catch(error => {
      console.error('Errro ao obter dados:', error);
      return new Response('Erro ao obter dados', { status: 500 });
    });
}