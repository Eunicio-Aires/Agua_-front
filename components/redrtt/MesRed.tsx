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
  export default function MesRed({_id}:Compy){
      const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
  
  
    const router = useRouter()
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const handleSubmi = async (event: SyntheticEvent) => {
     event.preventDefault();
  
  
          
  
          const endpoint = `https://agua-front.vercel.app/api/savemonth/${_id}`;
          const options: RequestInit = {
              method: 'GET',
            
            };
            const response = await fetch(endpoint);
              const result = await response.json();
              try{
              router.push(`/faturar/${_id}`)
                  }catch(error){
                    alert(`Verifique o seu Codigo, Codigo invalido`);
                  }
            
      };
  
      return(
          <> 
            <div className="">
    <form onSubmit={handleSubmi }>          
    <div className="">
      <button type="submit" className="btn btn-sm btn-accent">faturar</button>  
    </div>
    </form>
  </div>
  {/* <ToastContainer/>  */}
          </>
      )
  }