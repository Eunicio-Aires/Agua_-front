"use client"
import React,{useState} from "react";
import  { SyntheticEvent } from 'react';
import { Fatur } from'@/components/Fatur'
import { Faturas } from '@/components/Faturas'
import { useRouter } from "next/router";


type Cliente ={
  _id:String;
}

export function Codigo(){
  
 
  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data = {
      
      
      
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = `https://agua-p.vercel.app/adm/encotrar`;

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
    // await ()=> router.push()
    // const endpoint = 'http://localhost:3101/encotrar';
  }
  
    return(
     
<div className="ml-4 mr-4">
   
   <form onSubmit={handleSubmit}>
     <label htmlFor="nome">Nome</label>
     <input type="text" id="nome" name="nome" required /> 

     <label htmlFor="apelido">Apelido</label>
     <input type="text" id="apelido" name="apelido" required />

     <label htmlFor="codigo">Codigo</label>
     <input type="text" id="codigo" name="codigo" required />

     {/* <label htmlFor="contato">Cotato</label>
     <input type="Number" id="contato" name="contato" required />

     <label htmlFor="whatsapp">Whatsup </label>
     <input type="Number" id="whatsapp" name="whatsapp" required /> */}

     <button type="submit">Submit</button>
   </form>
   
 </div> 
   
   
    )
}