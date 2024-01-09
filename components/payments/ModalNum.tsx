"use client"
import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';import { useState } from 'react';
import Link from 'next/link';
import { revalidatePath, revalidateTag } from 'next/cache';
interface Fatura{
  _id:any;

}
export function ModalNum(props:Fatura){

  // const [_id, setId] = useState<string>('');

  const handleClick = async () => {
    try {
      // Certifique-se de que _id não está vazio antes de fazer a requisição
      if (!props._id) {
        console.error('O campo _id não pode estar vazio.');
        return;
      }

      // URL para a requisição POST
      const url = `https://agua-p.vercel.app/adm/pagarNume/${props._id}`;

      // Configuração da requisição
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicione headers adicionais se necessário
        },
        // Adicione corpo da requisição se necessário
        // body: JSON.stringify({ chave: 'valor' })
      };

      // Faz a requisição usando fetch
      const response = await fetch(url, options);

      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
      }

      // Manipula a resposta do backend, se necessário
      const data = await response.json();
      alert(`Resposta do backend:`);
    } catch (error ) {
      alert( `${props._id},${error}`);
      revalidatePath('/clietes')
    }
  };
  return (
    <div>
      {/* Input para inserir o valor de _id */}
      {/* <input type="text" value={_id} onChange={(e) => setId(e.target.value)} /> */}

      {/* Botão que chama a função handleClick ao ser clicado */}
      <button onClick={handleClick}>Clique para Pagar</button>
    </div>
  );

  // const handleSubmit = async (event: SyntheticEvent) => {
  //   event.preventDefault();
        
          
  //         const endpoint = `https://agua-p.vercel.app/adm/pagarNume/${_id}`
  //         const options: RequestInit = {
  //           method: 'POST', 
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
           
  //         };
          
  //         try{
  //           const response = await fetch(endpoint, options);
  //           const result = await response.json();
  //           alert(` ${result._id}`);
  //         }catch(error){
  //           alert(error)
  //         }
          
           
         
         
          
         
          
  //     };
     
  //  return(
  //   <div>
  //      <div className='mt-3'>
  //             <form onSubmit={handleSubmit}>
  //             <button type="submit" className="btn   mt-2">Pagar</button>
  //         </form>
  //         </div>
  //   </div>
  //  )
}