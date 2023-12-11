'use client'
import React, { SyntheticEvent } from 'react';

export function Procurar(){
    const handleSubmit = async (event: SyntheticEvent)=>{
        event.preventDefault();

        const data ={
            codigo:(event.target as HTMLFormElement).codigo.value
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = '';

        const options: RequestInit = {
            method: 'Get',
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
        <>
       <h1>Rota de pagamentos</h1> 
           <form onSubmit={handleSubmit}>
                <label htmlFor="codigo">First </label>
                    <input type="text" id="codigo"name="codigo" required />

                     <button type="submit">Submit</button>
            </form>

           
</>
            
        
    )
}