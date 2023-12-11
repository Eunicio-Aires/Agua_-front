'use client' 

import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import  { BiUserPlus } from "react-icons/bi";
import { revalidateTag } from 'next/cache';

interface Zona {
  _id:String;
  
}

  export  function  Registar({_id}:Zona) {
    const router = useRouter()
    const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleSubmi = async (event: SyntheticEvent) => {
    event.preventDefault();
    
    setButtonDisabled(true);

    const data = {
      nome: (event.target as HTMLFormElement).nome.value,
      apelido: (event.target as HTMLFormElement).apelido.value,
      casa: (event.target as HTMLFormElement).casa.value,
      telefone: (event.target as HTMLFormElement).telefone.value, 
      whatsupp: (event.target as HTMLFormElement).whatsupp.value,
      
      
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = `http://localhost:3000/api/registar/${_id}`;

    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result)
    
    alert(`Is this your full name: ${result._id}`);
    // router.refresh()
   
  };
  const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);
  
  const buttonHandler = () => {
    setIsBlueBoxShown(!iseBlueBoxShown);
  }
  const handleClick = () => {
      
  
    // Desabilitar o botão
    setButtonDisabled(true);
  };
  return (
    <div>
    <div className="transition ease-in-out delay-150"> 
    <button className=' btn btn-outline btn-success ml-6'  onClick={buttonHandler}>
      {iseBlueBoxShown ? "Fechar" : <BiUserPlus/> }
    </button> 
    {iseBlueBoxShown && <div className="flex items-center justify-center p-12 " >

    {/* <div className="items-center justify-center">
   
      <form onSubmit={handleSubmi}>
        <label htmlFor="nome">Nome </label>
        <input type="text" id="nome" name="nome" placeholder='Nome' required className="input input-bordered input-error w-full max-w-xs"/> 

        <label htmlFor="apelido">Apelido</label>
        <input type="text" id="apelido" name="apelido" placeholder='Apelido' required className="input input-bordered input-error w-full max-w-xs" />

        <label htmlFor="codigo"></label>
        <input type="text" id="codigo" name="codigo"  placeholder='Codigo'  required className="input input-bordered input-error w-full max-w-xs"/>

       

        <button className="btn btn-outline btn-accent mt-2" type="submit">Registar</button>
      </form>
      
    </div> */}

    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <form onSubmit={handleSubmi}>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="nome">
        Nome
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" id="nome" name="nome" placeholder='Nome'/>
      <p className="text-red text-xs italic">Compo obrigatorio</p>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="apelido">
        Apelido
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" id="apelido" name="apelido" placeholder='Apelido'/>
    </div>
  </div>
  {/* <div className="-mx-3 md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
      <p className="text-grey-dark text-xs italic">Make it as long and as crazy as   like</p>
    </div>
  </div> */}
  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="casa">
        Casa
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="casa" type="text" name="casa" placeholder="Numero da casa"/>
    </div>
    {/* <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div> */}
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="telefone">
         Telefone
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="telefone" name="telefone" type="Number" placeholder="90210"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="whatsupp">
        Whatsapp 
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="whatsupp" name="whatsupp" type="Number" placeholder="90210"/>
    </div>
  </div>
  <button className="btn btn-outline btn-accent mt-2" type="submit">Registar</button>
  </form>
</div> 
    </div>}
    </div>

    

    </div>
      
  );
}