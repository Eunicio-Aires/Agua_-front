'use client' 
import React, {useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Ligacao{
    _id:String;
    _idm:String
}

export function Formda(ligacoes:Ligacao){
  const router = useRouter()
  const { _id, _idm } = ligacoes;
    const handleSubmit = async (event:SyntheticEvent) => {
        event.preventDefault()
        const data = {
          leitura:(event.target as HTMLFormElement).leitura.value,
        }
        const JSONdata = JSON.stringify(data)    
        const endpoint = `https://agua-p.vercel.app/adm/addfatura/${_id}/${_idm}`
        const options = {        
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata, 
        }
        const response = await fetch(endpoint, options)
        const result  = await response.json()
        // const _id = await result._id
        // setResultId(result);
        // console.log(result)
        // router.push(`/imprimir/${result._id}`)
        alert(`Is this your full name: ${result._id}`)
      }
    // const { _id, _idm } = ligacoes;
    return(
      <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
        <label htmlFor="leitura" className="sr-only">Leitura</label>
        <input type="text" id="leitura" name="leitura" required className=" sm:w-64 rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Leitura" />
        <button className=" sm:w-auto rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500" type="submit">Submeter Leitura</button>
      </form>
    </div>
    
    )
}  