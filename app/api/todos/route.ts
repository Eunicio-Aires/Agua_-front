import { NextResponse } from 'next/server'
 
export function GET(request: Request) {
  return fetch('https://agua-p.vercel.app/adm/todos', { cache: "no-store" })
    .then(res => res.json())
    .then(respo => {
      // Faça algo com respo
      // console.log(respo);

      // Retornar a resposta ou qualquer coisa que você precise fazer com ela
      return new Response(JSON.stringify(respo), {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
    })
    .catch(error => {
      // console.error('Erro ao obter dados:', error);

      // Retornar uma resposta de erro ou fazer outra coisa
      return new Response('Erro ao obter dados', { status: 500 });
    });
}


 
