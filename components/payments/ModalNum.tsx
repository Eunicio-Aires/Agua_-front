"use client"
import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';import { useState } from 'react';
import Link from 'next/link';
// import { revalidatePath, revalidateTag } from 'next/cache';
import { revalidatePath } from 'next/cache'
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
        alert(`Falha ao efetuar o pagamento`);
      }

      // Manipula a resposta do backend, se necessário
      const data = await response.json();
      
      revalidatePath('/clietes')
      alert(`Pago com sucesso`);
    } catch (error ) {
      
      // revalidatePath('/clietes')
      // router.push('/clietes')
      // alert( `${props._id}`);
    }
  };
  return (
    <div>
      {/* Input para inserir o valor de _id */}
      {/* <input type="text" value={_id} onChange={(e) => setId(e.target.value)} /> */}

      {/* Botão que chama a função handleClick ao ser clicado */}
      <button className="btn-sm" onClick={handleClick}> Pagar Numerario</button>
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