import {Suspense} from 'react'
import Link from "next/link"
import React, { SyntheticEvent } from 'react';
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import {Registar} from '@/components/Registar'
import Zona from "../page";
import { TopCards } from '@/components/TopCards'
import OtherUsers from "@/components/outros";

type Client ={
  _id:String;
  nome:String;
  apelido:String;
  faturas:[]
}
interface Zona {
  _id:String;
  zona:String;
  clientes:Client
}

export default async function Page({ params }: { params: {zona: Zona } }) {
  

    const posts = await fetch(`http://localhost:3001/adm/area/${params.zona}`,{cache:"no-cache"}).then((res) => res.json());
    const client = await posts.area.cliente
    const _id = await posts.area._id
    
    return (
      <div> 
        {/* @ts-expect-error Async Server Component */}
       <TopCards/>
      <Suspense fallback={<p>Carregando Conteudo</p>} > 
      <OtherUsers _idZona={_id}  />
      </Suspense>       
        
      <h3 className='text-2xl text-center text-green-400'>{ posts.area.zona}</h3>
       <Registar _id={_id} /> 
       <div className="p-4">
       
        <div className="w-full n-auto p-4 border rounded-lg bg-white overflow-y-auto">
        
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
            <span>Nome </span> 
           < span className="sm:text-left text-right">Codigo</span>
            <span className="hidden md:grid">F.Nao pagas</span>
            
            <span className="hidden md:grid">Cotatato</span> 
            
         </div> 

     <ul>
      
     {client.map((zon:any) => (
      <li key={zon._id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-poiter"> 
      
        <div className="flex items-center">
          <div className="bg-purple-100 p-1 rounded-sm">
                <BsPersonFill className="">jyfytsts</BsPersonFill>
          </div>
          <p className="pl-2">{zon.nome}</p> 
        </div>
        <p className="text-gray-600 sm:text-left text-rigth">{zon.codigo}</p>
        <p className="hidden md:flex">{zon.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").length}</p>
        
        <p className="hidden md:flex">{zon.telefone}</p>
        
        
        
      </li>
      
         ))}
     </ul> 
     </div>
     </div>
     </div>

    )
  }  