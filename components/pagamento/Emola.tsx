import Image from "next/image"
import { useState } from 'react';
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export default function Emola(){
    const notify = () => toast.warning("O Servico E-mola encontra-se Indesponivel",{
        theme: "colored"
    });
    const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();
        // desabilitar o botao
        // setButtonDisabled(true);

        // const data = {
        //     numero: (event.target as HTMLFormElement).numero.value,
        //   };
        // const JSONdata = JSON.stringify(data);
        // const endpoint = `https://agua-p.vercel.app/adm/pagarfat/${_id}`;
        // const options: RequestInit = {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSONdata,
        //   };
        //   const response = await fetch(endpoint, options);
        //   const result = await response.json();
        //   console.log(result.response)
        //   alert(` ${result.response}`);
       
         

    };

    return(
        <>
        <div className="flex items-center justify-center mt-7 mb-3">
          <Image src="/Movitel-1.jpeg" alt="" width={150} height={85} />
        </div>
            <div className="flex  items-center justify-center bg-[#fbfbfb]">
              
  <div className="grid w-80 grid-rows-4 gap-1">
    {/* <p className="font-semibold text-gray-700">💌 Get the best of Product Hunt, directly in your inbox.</p> */}
    <input type="Number" className="h-10 w-full rounded border p-2 text-sm" placeholder="86/87" />
    <button onClick={notify} className="rounded bg-[orange] text-gray-50 hover:bg-gradient-to-r hover:from-[#ebab2c] hover:to-[#fca547]">Pagar</button>
    {/* <a href="">
      <p className="mt-4 flex items-center text-xs text-gray-500 hover:text-gray-700">
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-1 h-3 w-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </p>
    </a> */}
  </div>
</div>
        <ToastContainer/>
        </>
    )
}