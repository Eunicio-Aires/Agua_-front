"use client"
import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';import { useState } from 'react';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';
interface Fatura{
  _id:any;

}
export function ModalNum(_id:Fatura){

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
        
          // const endpoint = `https://agua-p.vercel.app/adm/pagarNume/${_id}`;
          const endpoint = `https://agua-p.vercel.app/adm/pagarNume/${_id}`
          const options: RequestInit = {
            method: 'POST', 
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            // body: JSONdata,
          };
          
          try{
            const response = await fetch(endpoint, options);
            const result = await response.json();
            alert(` ${result._id}`);
          }catch(error){
            alert(error)
          }
          
           
         
         
          // console.log(result)
         
          
      };
     
   return(
    <div>
       <div className='mt-3'>
              <form onSubmit={handleSubmit}>
              <button type="submit" className="btn   mt-2">Pagar</button>
          </form>
          </div>
    </div>
   )
}