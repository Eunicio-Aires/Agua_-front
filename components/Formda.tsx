'use client' 
import React, {useState, SyntheticEvent } from 'react';

interface Ligacao{
    _id:String;
    _idm:String
}

export function Formda(ligacoes:Ligacao){
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
        console.log(result)
        alert(`Is this your full name: ${result._id}`)
      }
    const { _id, _idm } = ligacoes;
    return(
        <div className="mt-8">
        
         <form onSubmit={handleSubmit}>
          <label htmlFor="leitura"></label>
          <input type="text" id="leitura" name="leitura" required className="input input-bordered input-info w-full max-w-xs"  />
          <button className="btn btn-outline btn-info ml-1" type="submit">Sub Leitura</button>
          
        </form>
        </div>
    )
}  