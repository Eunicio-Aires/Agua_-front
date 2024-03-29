"use client"

import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import  { BiUserPlus } from "react-icons/bi";
import { revalidateTag } from 'next/cache';

// const nome = props.clientId.nome;
// const apelido = props.clientId.nome;
// const estado  = props.clientId.estado;
// const telefone  = props.clientId.telefone;
// const whatsupp  = props.clientId.whatsupp;
// const casa  = props.clientId.casa;

export default function Editar(posts:any){

  const id  = posts.posts.clientId._id
  const nome = posts.posts.clientId.nome;
  const apelido = posts.posts.clientId.apelido;
 const telefone  = posts.posts.clientId.telefone;
  const whatsupp  = posts.posts.clientId.whatsupp;
  const casa  = posts.posts.clientId.casa;
  const estado  = posts.posts.clientId.estado;
 
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
    estado: (event.target as HTMLFormElement).estado.value,
    
    
  };

  const JSONdata = JSON.stringify(data);
  const endpoint = `https://agua-p.vercel.app/adm/atualizarClient/${id}`

  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint,options);
  const result = await response.json();
  try{
    alert('submetido ')
  }catch(error){
 
    router.push(`/clientes/`)
  }
};
const [iseBlueBoxShown, setIsBlueBoxShown] = useState(false);

const buttonHandler = () => {
  setIsBlueBoxShown(!iseBlueBoxShown);
}
const handleClick = () => {
    

  // Desabilitar o botão
  setButtonDisabled(true);
  };

    return(
      <div>
      <div className="transition ease-in-out delay-150"> 
      <button onClick={buttonHandler}>
            {iseBlueBoxShown ? <div className="btn btn-circle"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></div> : <div className="btn">Atualizar</div>}
          </button>
     
  
    
  
          {iseBlueBoxShown &&  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
      <form onSubmit={handleSubmi}>
    <div className="-mx-3 md:flex mb-6">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="nome">
          Nome
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" id="nome" name="nome" value={nome} />
        <p className="text-red text-xs italic">Compo obrigatorio</p>
      </div>
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="apelido">
          Apelido
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" id="apelido" name="apelido" value={apelido} />
      </div>
    </div>
  
    <div className="-mx-3 md:flex mb-2">
      <div className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="casa" >
          Casa
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="casa" type="text" name="casa" value={casa} />
      </div>
    
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="telefone">
           Telefone
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="telefone" name="telefone" type="Number" value={telefone} />
      </div>
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="whatsupp">
          Whatsapp 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="whatsupp" name="whatsupp" type="Number" value={whatsupp} />
      </div>
  
      <div className="md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="estado">
          Estado 
        </label>
        <select id="estado" name="estado"   className="select select-accent w-full max-w-xs">
          <option disabled selected>{estado}</option>
          <option><p className=''>Activo</p></option>
          <option><p className=''>Desativado</p></option>
          
        </select>
        {/* <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="whatsupp" name="whatsupp" type="Number" value={whatsupp}/> */}
      </div>
      
  
    </div>
    <button className="btn btn-outline btn-accent mt-2" type="submit">Registar</button>
    </form>
  </div> }
      </div>   
      </div>
        
    )
}