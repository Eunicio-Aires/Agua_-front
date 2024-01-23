'use client' 
import React, {useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';

interface Ligacao{
    _id:String;
    _idm:String
}

export function Formda(ligacoes:Ligacao){
  const router = useRouter()
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
    const { _id, _idm } = ligacoes;
    return(
        <div className="mt-8 flex items-center justify-center"> 
        
         <form onSubmit={handleSubmit} className='bg-white rounded-2xl border shadow-x1 p-10 max-w-lg'>
          <label htmlFor="leitura"></label>
          <input type="text" id="leitura" name="leitura" required className="input input-bordered input-info w-full max-w-xs"  />
          <button className="btn btn-outline btn-info ml-1" type="submit">Sub Leitura</button>
          
        </form>

        {/* <div className="flex items-center justify-center  bg-red-100">
      <div className="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="font-bold text-2xl text-gray-700 w-4/6 text-center">
            NewsLetters
          </h1>
          <p className="text-sm text-gray-500 text-center w-5/6">
            Hello, please enter your email address to subscribe our newsletters.
          </p>
          <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full h-12 px-4"
          />
          <button
            className="bg-blue-400 text-white rounded-md hover:bg-gray-500 font-semibold px-4 py-3 w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div> */}
        </div>
    )
}  