"use client"
import React, { useState } from "react";
import  { SyntheticEvent } from 'react';
import { json } from "stream/consumers";
import  { getSession } from '@/lib/cookiesConf';


interface ZonaProps{
  zona:String
}

export  function RegistarZona(){

// const token =  getSession()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data ={
      zona:(event.target as HTMLFormElement).zona.value,
      // zona: event.target.zona.value
    };
    const JSONdata = JSON.stringify(data)
    const endpoint = 'https://agua-front.vercel.app/api/novaArea';

    const options: RequestInit = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSONdata,
    };
   
      const response = await fetch(endpoint, options);


      const result = await response.json(); 
      
      alert(`Registado com sucesso `);
      
  };
  
    const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
    // This function is triggered when the button is clicked
    const buttonHandler = () => {
      setIsBlueBoxShown(!iseBlueBoxShown);
    };
    return(
  
    <div className="transition ease-in-out delay-150">
        <button onClick={buttonHandler}>
          {iseBlueBoxShown ? <p>Fechar</p> : <h1>Registar Zona</h1>}
        </button>
        {iseBlueBoxShown && <div className="flex items-center justify-center p-12 " ><h1>Nova Zona</h1>
        {/* onSubmit={handleSubmit} */}
        <form  onSubmit={handleSubmit}>
        <label htmlFor="zona">Zona Nova</label>
        <input type="text" id="zona" name="zona" required />
        <button type="submit">Registar</button>
         </form>
        </div>}
      </div> 
    
 )
}