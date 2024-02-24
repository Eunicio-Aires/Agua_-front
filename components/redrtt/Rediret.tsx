"use client"
import Image from "next/image"
import { useState } from 'react';
import React, { SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';


interface Compy{
  _id:String;
  
}
export default function Redbutton({_id}:Compy){
    const baseUrl = process.env.NEXT_LOCAL_BASE_URL;

//   const notify = () => toast.success("Solicitado com sucesso, verifica Seu M-pesa",{
//     theme: "colored"
//  });

  const router = useRouter()
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const handleSubmi = async (event: SyntheticEvent) => {
        event.preventDefault();
        // desabilitar o botao
        // setButtonDisabled(true);

        // const data = {
        //     numero: (event.target as HTMLFormElement).numero.value,
        //   };
        // const JSONdata = JSON.stringify(data);

        const endpoint = `${baseUrl}/api/initacook/${_id}`;
        const options: RequestInit = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSONdata,
          };
          const response = await fetch(endpoint, options);

          
            const result = await response.json();
            router.push(`/inicial/${_id}`)
        //   }catch(error){
        //     console.log({messge:"erro ao efetuar pedido"})
        //   }
          
        //   console.log(result.response)
        //   alert(` ${result.response}`);
       
          // router.refresh()
          // router.push(`pagamentos/${_id}` )

    };

    return(
        <> 
         {/* <div className="flex items-center justify-center mt-7 mb-3">
           <Image src="/Rrrrr.jpg" alt="" width={150} height={85} />
         </div> */}
          <div className="flex  items-center justify-center bg-[#fbfbfb]">
  <form onSubmit={handleSubmi }>          
  <div className="grid w-80 grid-rows-4 gap-1">
    {/* <p className="font-semibold text-gray-700">💌 Get the best of Product Hunt, directly in your inbox.</p> */}
    
    {/* <label htmlFor="numero"></label>
    <input type="Number" className="h-10 w-full rounded border p-2 text-sm" placeholder="84/85" id="numero" name="numero" /> */}
    <button  type="submit" className="">Selecionar Forneced</button>
    
    
  </div>
  </form>
</div>
{/* <ToastContainer/>  */}
        </>
    )
}