'use client' 

import React, { SyntheticEvent } from 'react';


interface Dados {
    _idc:String;
    _idf:String
    
  }
export  function  Registar({_idc,_idf}:Dados) {
    const handleSubmi = async (event: SyntheticEvent) => {
      event.preventDefault();
  
      const data = {
        numero: (event.target as HTMLFormElement).numero.value,
        
        
      };
  
      const JSONdata = JSON.stringify(data);
      const endpoint = `http://localhost:3101/consumidor/${_idf}`;
  
      const options: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const result = await response.json();
      alert(`Is this your full name: ${result.data}`);
    //   await fetch(`http://localhost:3101/zonaSeleciona/${_id}`,{cache:"no-cache"})
    };
    
  
    return (
      <div className="">
     
        <form onSubmit={handleSubmi}>
          <label htmlFor="numero">Numero</label>
          <input type="text" id="numero" name="numero" required /> 
  
  
          {/* <label htmlFor="contato">Cotato</label>
          <input type="Number" id="contato" name="contato" required />
  
          <label htmlFor="whatsapp">Whatsup </label>
          <input type="Number" id="whatsapp" name="whatsapp" required /> */}
  
          <button type="submit">Submit</button>
        </form>
        
      </div> 
        
    );
  }