'use client'
import { useState } from 'react';
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import router from 'next/router';
interface Fatura{
    _id:String;
    // _idCl:String;
}
export function Numero({_id}:Fatura){
  const router = useRouter()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
    const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();
        
        setButtonDisabled(true);

        const data = {
            numero: (event.target as HTMLFormElement).numero.value,
          };
          const JSONdata = JSON.stringify(data);
        const endpoint = `http://localhost:3000/api/pagarFatura/${_id}`;
        const options: RequestInit = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
          };
          const response = await fetch(endpoint, options);
        const result = await response.json();
        
        alert(` ${result}`);
       
          // router.refresh()
          // router.push(`pagamentos/${_id}`)

    
    };
    const handleClick = () => {
      setButtonDisabled(true);
    };
    return(
        <div className='mt-5'>
            <form onSubmit={handleSubmi }>
            <label htmlFor="numero">
            </label>
            <input type="Number" id="numero" name="numero" placeholder='Introduza seu M-pesa' required className="input input-bordered input-error w-full max-w-xs"/> 
            <button type="submit"   disabled={isButtonDisabled}  className="btn btn-outline btn-accent mt-3">Pagar</button>
        </form>
        </div>
        
    )
}
