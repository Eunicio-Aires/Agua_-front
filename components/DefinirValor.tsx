"use client"
import React, { useState } from "react";
import  { SyntheticEvent } from 'react';

export default  function DefinirValor(){
    const metro =  fetch('https://agua-p.vercel.app/adm/verMetros');
    
    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const data ={
            zona:(event.target as HTMLFormElement).zona.value
          };
          const  JSONdata = JSON.stringify(data);
          const endpoint = 'https://agua-p.vercel.app/adm/metrosCubicos';
      
          const options: RequestInit = {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
          };
          const response = await fetch(endpoint,options);
          const result = await response.json();
          alert(`Is this your full name: ${result.data}`);
        }
        const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
        // This function is triggered when the button is clicked
        const buttonHandler = () => {
          setIsBlueBoxShown(!iseBlueBoxShown);
        };
    return(
        <div className="transition ease-in-out delay-150">
            
        <button onClick={buttonHandler}>
          {iseBlueBoxShown ? "Fechar" : "Registar Metro3"}
        </button> 
        {iseBlueBoxShown && <div className="flex items-center justify-center p-12 " >
     
        <form onSubmit={handleSubmit}>
        <label htmlFor="valorPormetros">Valor Por Metro</label>
        <input type="Number" id="valorPormetros" name="valorPormetros" required />

        <label htmlFor="valorminimo">valor Minimo</label>
        <input type="Number" id="valorminimo" name="valorminimo" required />
        <button type="submit">Registar</button>
         </form>
        </div>}
      </div>
    )
}