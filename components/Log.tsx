'use client'
// import TopCards from "@/components/TopCards";
import { NavBar } from "./NavBar";
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
      
      
      
    //   console.log(result)
    //   alert(`Is this your full name: ${id }`);
  
    }
    return(
    //  <div className="h-screen">
      
    //     <div className="h-screen bg-gradient-to-br from-blue-100 to-indigo-300 flex justify-center items-center w-full">
        
    //     <form onSubmit={handleSubmi}>
    //     <h4 className="text-center text-4xl font-bold text-gray-600">Faturas de Água Simplificadas</h4>
    //     <br/>
    //       <h3 className="text-center text-2xl font-semibold text-blue-200">  Consulta, Pague <br/> e Gerencie Suas <strong>Faturas com Facilidade!</strong>   </h3>
    //       <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm mt-2">
    //       <div className="space-y-4">
          
    //         <div>
    //           <label className="block mb-1 text-gray-600 font-semibold" htmlFor="codigo">Codigo</label>
    //           <input className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" type="text" id="codigo" name="codigo" required autoComplete="off" />
    //         </div>
    //       <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide" type="submit">Entrar</button>
    //       </div>
    //     </div>
    //   </form>
    //   </div>

    //   </div>

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
                {/* <span className="label-text">Codigo</span> */}
              </label>
              <input type="text" placeholder="Codigo do Consumidor" className="input input-bordered" id="codigo" name="codigo" />
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">Solicitar codigo</a> */}
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
      
