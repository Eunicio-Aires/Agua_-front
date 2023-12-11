import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';
interface Fatura{
  _id:String;
// _idCl:String;
}
export function ModalNum({_id}:Fatura){
  const router = useRouter()
      const [isButtonDisabled, setButtonDisabled] = useState(false);
      const handleSubm = async (event: SyntheticEvent) => {
          event.preventDefault();
          
          setButtonDisabled(true);
  
          // const data = {
          //     numero: (event.target as HTMLFormElement).numero.value,
          //   };
          //   const JSONdata = JSON.stringify(data);
          const endpoint = `http://localhost:3000/api/pagarNum/${_id}`;
          const options: RequestInit = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              // body: JSONdata,
            };
            const response = await fetch(endpoint, options);
          const result = await response.json();
          
          alert(` ${result}`);
         
          revalidateTag
            // router.refresh()
          //   router.push(`pagamentos/${_id}`)
  
      
      };
      const handleClick = () => {
        setButtonDisabled(true);
      };
   return(
    <div>
       <div className='mt-5'>
              <form onSubmit={handleSubm }>
              <button type="submit"   disabled={isButtonDisabled}  className="btn  btn-accent mt-3">Pagar</button>
          </form>
          </div>
    </div>
   )
}