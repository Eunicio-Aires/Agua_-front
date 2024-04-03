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
        
      };

      
      const response = await fetch(url, options);

      
      if (!response.ok) {
        alert(`Falha ao efetuar o pagamento`);
      }

      
      const data = await response.json();
      
      revalidatePath('/clietes')
      alert(`Pago com sucesso`);
    } catch (error ) {
      
      
    }
  };
  return (
    <div>
      <button className="btn-sm" onClick={handleClick}> Pagar Numerario</button>
    </div>
  )
  }