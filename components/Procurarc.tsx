'use client' 
import React, {useState, SyntheticEvent } from 'react';
import { RegisFatura } from './RegiFatura';
import { Detalhes } from './Detalhes';

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
     
        const endpoint = 'https://localhost:3000/api/procurar'
 
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
        
      }
      return (
        
       
        
        <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
  {/* <div class="flex flex-col items-center justify-center space-y-6 text-center">
    <h1 class="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">Blog</h1>
    <p class="max-w-screen-sm text-lg text-gray-600 sm:text-2xl">We write about tips, best tools, and resources to create and sell interactive online programming courses.</p> */}
    {/* <form class="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"><input type="email" required="" class="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@website.com" value="" /><button type="submit" class="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Subscribe</button></form>
  </div> */}



        <div className="flex flex-col items-center justify-center space-y-6 text-center">
              {/* <form onSubmit={handleSubmit}>
            <input className="input input-bordered join-item" placeholder="Email" type="text" id="codigo"name="codigo" required/>
            <button type="submit" className="btn join-item rounded-r-full bg-cyan-200">Subscribe</button>
            </form> */}
            {/* <h1 className="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">Blog</h1>
           <p class="max-w-screen-sm text-lg text-gray-600 sm:text-2xl">We write about tips, best tools, and resources to create and sell interactive online programming courses.</p> */} 
            <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"><input type="text" required className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Codigo do cliente" id="codigo"name="codigo"  /><button type="submit" className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max">Procurar</button></form>
            </div>
        
        
        <RegisFatura  resulte={resultId} _id={props._id}   />
        {/* <div>
        {resultId && (
        <div> 
           
        <p>Resultado:
         
           {resultId.nome}</p>
         <p>Resultado: {resultId.apelido}</p>
                      </div>
        )}
        </div> */}
     

     </div>
      )
}


