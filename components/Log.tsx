'use client'
// import TopCards from "@/components/TopCards";
// import { NavBar } from "./NavBr";
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import React, { SyntheticEvent } from 'react';

export  function Log() {
  
    const router = useRouter();
    const handleSubmi = async (event: SyntheticEvent) => {
      event.preventDefault();
  
      
      const data = {
        codigo: (event.target as HTMLFormElement).codigo.value,
    
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = `https://agua-front.vercel.app/api/procurar`;
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSONdata,
      };
      const response = await fetch(endpoint, options);
      const result = await response.json();
      
      // console.log(result)
      try{
      const id = await result._id
      router.push(`pagamentos/${id}`)
      }catch(error){
        alert(`Verifique o seu Codigo, Codigo invalido`);
      }
  
    }
    return(
    

        <div className="hero min-h-screen bg-gradient-to-r from-sky-100 to-indigo-300">
          
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Entrar!</h1>
          <p className="py-6">Faca a consulta e pagamento das  <br/>  faturas de agua, em  qualquer canto do mundo</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            
          <form onSubmit={handleSubmi}>
            <div   className="form-control">
              <label className="label" htmlFor="codigo">
               
              </label>
              <input type="text" placeholder="Codigo do Consumidor" className="input input-bordered" id="codigo" name="codigo" />
              <label className="label">
               
              </label>
            </div>
            
            <div className="form-control mt-6">
              <button  className="btn btn-primary">Entrar</button>
            </div>
            </form>
          </div>
        </div>
      </div>
        </div>
   )
      
     
    
  }
      
