import Image from 'next/image'
import { Numero } from '@/components/Numero'
import React, { SyntheticEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { revalidateTag } from 'next/cache';
interface Fatura{
    _id:String;
  }
  export function PagarNum({_id}:Fatura){
      const router = useRouter()
      const [isButtonDisabled, setButtonDisabled] = useState(false);
      const handleSubm = async (event: SyntheticEvent) => {
          event.preventDefault(); 
          setButtonDisabled(true);

      const endpoint = `https://agua-front.vercel.app/api/pagarNum/${_id}`;
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
    
  {/* The button to open modal */}
  <a href="#my_modal_1" className="btn"><h3 className="text-blue-600">Numerario</h3></a>
  
  <div className="modal" id="my_modal_1">
    <div className="modal-box">
    <h3 className="font-bold text-lg text-blue-600">Numerario</h3>
    <p className="text-center text-xs mt-3">Confirmar Pagamento em Numerario</p>
    <div className='mt-5'>
              <form onSubmit={handleSubm }>
              <button type="submit"   disabled={isButtonDisabled}  className="btn  btn-accent mt-3">Pagar</button>
          </form>
          </div>
          <div className="modal-action">
       <a href="#" className="">
       <button className="btn btn-circle btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
  
       </a>
      </div>
    </div> 
  </div>
  </div>
    )
  }