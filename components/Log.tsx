'use client'
// import TopCards from "@/components/TopCards";
// import { NavBar } from "./NavBr";
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import React, { SyntheticEvent } from 'react';
import hands from '../public/hands4903050-1280e16238370891651090x613removebgpreview-1@2x copy.png';
import Image from 'next/image'

export  function Log() {
  
    const router = useRouter();
    const handleSubmi = async (event: SyntheticEvent) => {
      event.preventDefault();
  
      
      const data = {
        codigo: (event.target as HTMLFormElement).codigo.value,
    
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = `https://agua-p.vercel.app/adm/procurarid`;
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
    

        <div className="hero min-h-screen bg-gradient-to-tr from-gray-50 via-slate-100 to-cyan-200">
          <div className="fixed  min-w-full">
          <Image className ="opacity-40 min-w-full"
          alt="hands"
         
          src={hands}
          sizes="100vw"
         
          style={{
            width: '100%',
            height: '60%',
          }}
          />
          </div>
          {/* bg-gradient-to-r from-sky-100 to-indigo-300 */}
          
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Entrar!</h1>
          <p className="py-6">Faça a consulta e pagamento das  <br/>  faturas de Água, em  qualquer canto do mundo</p>
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
      
