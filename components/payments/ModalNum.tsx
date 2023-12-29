"use client"
import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';import { useState } from 'react';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';
interface Fatura{
  _id:String;
// _idCl:String;
}
export function ModalNum({_id}:Fatura){

      const handleSubm = async (event: SyntheticEvent) => {
          event.preventDefault();
          
          
  
          // const data = {
          //     numero: (event.target as HTMLFormElement).numero.value,
          //   };
          //   const JSONdata = JSON.stringify(data);
          const endpoint = `https://agua-front.vercel.app/api/pagarNum/${_id}`;
          const options: RequestInit = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              // body: JSONdata,
            };
            const response = await fetch(endpoint, options);
          const result = await response.json();
          console.log(result.response)
          alert(` ${result.response}`);
         
          // revalidateTag
            // router.refresh()
          //   router.push(`pagamentos/${_id}`)
  
      
      };
     
   return(
    <div>
       <div className='mt-5'>
              <form onSubmit={handleSubm }>
              <button type="submit"     className="btn  btn-accent mt-3">Pagar</button>
          </form>
          </div>
    </div>
   )
}