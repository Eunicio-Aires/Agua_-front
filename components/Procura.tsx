'use client'
import React, { SyntheticEvent } from 'react';
import { Detalhes } from './Detalhes';

export default function Procura(){
    const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();

        const data = {
            codigo: (event.target as HTMLFormElement).codigo.value,
           
            
          };
          const JSONdata = JSON.stringify(data);
    const endpoint = `http://localhost:3101/buscar`;

    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata, 
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
    
  };

    return(
        <div>
            <form onSubmit={handleSubmi}>
            <label htmlFor="codigo">Introduza Seu Codigo</label>
        <input type="Number" id="codigo" name="codigo" required /> 

        <button type="submit">Submeter</button>
            </form>

            {/* <Detalhes _id={_id}/> */}
        </div>
    )
}