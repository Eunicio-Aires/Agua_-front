 

import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import  { BiUserPlus } from "react-icons/bi";
import { revalidateTag } from 'next/cache';

interface Zona {
  _id:String;
  
}

  export default  function  Registar() {
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
    const endpoint = `http://localhost:3000/api/registar/`;

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
    
    alert(`Registo Efetuado`);
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

  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="casa">
        Casa
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="casa" type="text" name="casa" placeholder="Numero da casa"/>
    </div>
  
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