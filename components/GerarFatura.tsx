'use client' 
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// export const dynamic = 'force-dynamic';
interface Cliente {
    _id:String;
    
  }
export  function GerarFatura({_id}:Cliente){
  const router = useRouter()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
    const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();

        setButtonDisabled(true);
        const data = {
            leitura: (event.target as HTMLFormElement).leitura.value,
            mes: (event.target as HTMLFormElement).mes.value,
            
          };
          const JSONdata = JSON.stringify(data);
    const endpoint = `http://localhost:3001/adm/addfatura/${_id}`;

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
    router.refresh()
    
  };
  const handleClick = () => {
      
  
    // Desabilitar o botão
    setButtonDisabled(true);
  };
  
    return (
        <div className="flex items-center justify-center p-12">
             <form onSubmit={handleSubmi}>
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
        
        <label htmlFor="leitura"></label>
        <input type="Number" id="leitura" name="leitura"  placeholder='leitura' required className="input input-bordered input-error w-full max-w-xs" /> 

        
        <button disabled={isButtonDisabled}  className="btn btn-outline btn-accent mt-2" type="submit">Submeter</button>
      </form>
      

       </div>
    )
}