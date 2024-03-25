"use server"
import React, { useState } from "react";
import  { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { getCompan, getSession } from '@/lib/cookiesConf'
// import { getId } from '@/lib/cookiesConf'
// import { Router } from "next/router";
// import { redirect } from 'next/navigation'


interface ZonaProps{
  zona:String
}


export  function Mes(){
  const compan =  getCompan()

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    const data ={
      mes:(event.target as HTMLFormElement).mes.value
    };
    const  JSONdata = JSON.stringify(data);
    const endpoint = `https://agua-p.vercel.app/adm/criarMes/${compan}`

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    // try {
      const response = await fetch(endpoint, options);
      const result = await response.json()
      
      // console.log(result.data)
      alert(`Registado com sucesso`);
      // redirect('/faturar')
      
      // if (!response.ok) {
      //   // Handle server error or other non-2xx status codes here
      //   throw new Error('Network response was not ok');
      // }

     
    

      // const result = await response.json(); 
      // alert(`Is this your full name: ${result}`);
      // Do something with the 'result' JSON data if needed

    //  catch (error) {
      // console.error('Error occurred:');
      // Handle the error appropriately, e.g., show an error message to the user
    // }
    
  }
    const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
    // This function is triggered when the button is clicked
    const buttonHandler = () => {
      setIsBlueBoxShown(!iseBlueBoxShown);
    };
    return(
  
    <div className="transition ease-in-out delay-150">
        <button onClick={buttonHandler}>
          {iseBlueBoxShown ? "Fechar" : "Novo Mes"}
        </button> 
        {iseBlueBoxShown && <div className="flex items-center justify-center p-12 " ><h1>ola Aires</h1>
     
        <form onSubmit={handleSubmit}>
        <label htmlFor="mes"></label>
        <select name="mes" id="mes" className="select select-success w-full max-w-xs">
  <option disabled selected>Seleciona o mes</option>
          <option>Janeiro</option>
          <option>Fevereiro</option>
          <option>Março</option>
          <option>Abril</option>
          <option>Maio</option>
          <option>Junho</option>
          <option>Julho</option>
          <option>Agosto</option>
          <option>Setembro</option>
          <option>Outubro</option>
          <option>Novembro</option>
          <option>Dezembro</option>
</select>
        {/* <label htmlFor="mes">MEs</label>
        <input type="text" id="mes" name="mes" required /> */}
         <button className="btn btn-outline btn-accent mt-2" type="submit">Registar</button>
         </form>
        </div>}
      </div> 
    
 )
}