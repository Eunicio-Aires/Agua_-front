"use client"
import Image from "next/image"
import { useState } from 'react';
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


interface Compy{
  _id:String;
  
}
export default function Redbutton({_id}:Compy){
    const baseUrl = process.env.NEXT_LOCAL_BASE_URL;

  const notify = () => toast.success("Solicitado com sucesso, verifica Seu M-pesa",{
    theme: "colored"
 });

  const router = useRouter()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();


        

        const endpoint = `https://agua-front.vercel.app/api/initacook/${_id}`;
        const options: RequestInit = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSONdata,
          };
          const response = await fetch(endpoint, options);
            const result = await response.json();
            try{
            router.push(`/inicial/${_id}`)
                }catch(error){
                  alert(`Verifique o seu Codigo, Codigo invalido`);
                }
          
    };

    return(
        <> 
          <div className="">
  <form onSubmit={handleSubmi }>          
  <div className="">
    <button type="submit" className="btn btn-sm btn-accent">Selecionar</button>  
  </div>
  </form>
</div>
{/* <ToastContainer/>  */}
        </>
    )
}