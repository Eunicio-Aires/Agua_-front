'use client' 
import React, {useState, SyntheticEvent } from 'react';
import { RegisFatura } from './RegiFatura';
import { Detalhes } from './Detalhes';
import { revalidateTag } from 'next/cache';

interface Faturas{
  _id:String;
  mes:String;
  estado:String;
  valor:Number
}

interface Result {
  _id:string;
  faturas:Faturas[]
   // Defina os tipos corretos para os campos do resultado
  // Outros campos relevantes aqui...
}

interface Mes {
  _id:String;
  
}
export  function Procurarc(props:Mes){
//  const mes = props;
  const [resultId, setResultId] = useState<any>(); 
    const handleSubmit = async (event:SyntheticEvent) => {
        
        event.preventDefault()
   
        const data = {
          codigo:(event.target as HTMLFormElement).codigo.value,

        }
        const JSONdata = JSON.stringify(data)
     
        const endpoint = 'https://agua-p.vercel.app/adm/procurarid'
 
        const options = {
         
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
     
        const response = await fetch(endpoint, options)
        const result:Result  = await response.json()
        
        setResultId(result);
        revalidateTag
        
      }
      return (
 
        <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
          <input type="text" required className=" sm:w-64 rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Codigo do cliente" id="codigo" name="codigo" />
          <button type="submit" className=" sm:w-auto rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500">Procurar</button>
        </form>
      
        <RegisFatura resulte={resultId} _id={props._id} />
      </div>

        
        

     
      )
}


