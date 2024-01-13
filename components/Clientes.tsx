
import {GerarFatura} from '@/components/GerarFatura'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import Link from "next/link";
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'

type Client ={
  _id:any;
  nome:String;
  apelido:String
  }
type ConsumidoresProps ={
  clientes:Client[]
}
async function getDataZona(){
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/todos`,{cache:"no-cache"})

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function  Cliente(){
  const response = await getDataZona();
  // const { clientes } = client;
  // const response = await fetch('http://localhost:3000/api/todos',{cache:"no-cache"}).then((res) => res.json());
  const clients = await response.allClientes
  
  return(
    <div>

      
        {/* <GerarFatura _id={undefined} /> */}
    {/* <Suspense fallback={<p>Carregando Conteudo</p>} >
    <OtherUsers _idZona={params.zona._id}  />
    </Suspense>        */}
      
    {/* <h3 className='xl:text- text-center text-green-400'>{ posts.zonasl.zona}</h3> */}
     {/* <Registar _id={_id} />  */}
     <div className="p-4">
     
      <div className="w-full n-auto p-4 border rounded-lg bg-white overflow-y-auto">
      
        <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
          <span>Nome </span> 
          <span className="sm:text-left text-right">Codigo</span>
          <span className="hidden md:grid">F.Nao pagas</span>
          <span className="hidden md:grid">Cotatato</span> 
          <span className="hidden md:grid">Gerar fatura</span>
       </div> 

      

   <ul>
    
   {response.data.allClientes.map((zon:any) => (
    <li key={zon._id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-poiter"> 
    
      <div className="flex items-center">
        <div className="bg-purple-100 p-1 rounded-sm">
              {/* <BsPersonFill className=""></BsPersonFill> */}
        </div>
        <p className="pl-2">{zon.nome}</p> 
      </div>
      <p className="text-gray-600 sm:text-left text-rigth">{zon.codigo}</p>
      <p className="hidden md:flex">{zon.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length }</p>  
      <p className="hidden md:flex">{zon.contato}</p>
      <p className="hidden md:flex"> <Link href= {`/fatura/${zon._id}`}>Gerar{zon.contato}</Link>  </p>
     

      
    </li>
    
       ))}
   </ul> 
   </div>
   </div>



   

   </div>

  )
}