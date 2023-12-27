
//  import { useState } from "react" 
import Link from "next/link"
import React, { SyntheticEvent } from 'react';
import {BsDatabase, BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import {Registar} from '@/components/Registar'
import Zona from "../page";
import { TopCards } from '@/components/TopCards'
import OtherUsers from "@/components/outros";

// type Client ={
//   _id:String;
//   nome:String;
//   apelido:String;
//   faturas:[]
// }
// interface Zona {
//   _id:String;
  
// }

// async function getData({ params }: { params: { zona: string } }) {
//   const id = await params.zona
//   const res = await fetch(`http://localhost:3000/api/areas/${id}`,{cache:"no-cache"}`)
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }



    
    // const id = params.zona
    // const posts =  fetch(`http://localhost:3000/api/areas/${id}`,{cache:"no-cache"});
    // const area  = poats.json();
    // console.log(posts)
    // const client = await posts.product.area.cliente
    // const _id = await posts.product.area._id
   
    // const getZonaId = async () =>{
    //   try{

    //   }catch(error){
    //     console.log(error)
    //   }
    // }


    // async function getDataId({ params }: { params: { id: string } }){
  
    //   const res = await fetch(`https://agua-front.vercel.app/api/todos`,{cache:"no-cache"})
    
    //   if(!res.ok){
    //     throw new Error('Failed to fetch data')
    //   }
    //   return res.json()
    // }

    export default async function ClienteId({ params }: { params: { id: string } }){
      const posts = await fetch(`https://agua-front.vercel.app/api/clienteId/${params.id}`).then((res) => res.json())
      const dados = await posts.clientId.nome
      // const dadosm = await posts.clientId.faturaNaop
      // const faturasNaPagas = await posts.clientI.faturas.filter((faturas: { faturas: string; }) => faturas.faturas === "Pago")
    //  console.log(dadosm)
      // const posts = await fetch('https://.../posts').then((res) => res.json())
    // }
    //  const id = await params.zona
    // const area = await fetch(`http://localhost:3000/api/areas/${id}`,{cache:"no-cache"});
    // const areas = await area.json();
    // const area  = await product.area
      
    // console.log(areas) 
    // const client = await posts.product.area.cliente
    // const _id = await posts.product.area._id
    return (
      <div> 
          <h1 className="text-3xl font-medium text-center mt-3">{dados} {posts.clientId.apelido}</h1>

           
           {/* <div>My Post: {params.id}</div> */}
       {/* <TopCards/>  */}
       
      {/* <OtherUsers _idZona={_id}  /> */}
           
        
      {/* <h3 className='text-2xl text-center text-green-400'>{ posts.product.area.zona}</h3>
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
      
     {area.map((zon:any) => (
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
     </div> */}

<div className="overflow-x-auto m-4">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </thead>  
    {/* <tbody>
    {dadosm.map((fatura:any)=>(
      <tr key={fatura._id }>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        <td>Blue</td>
      </tr>
      ))}
    </tbody>  */}
    <tfoot>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Job</th> 
        <th>company</th> 
        <th>location</th> 
        <th>Last Login</th> 
        <th>Favorite Color</th>
      </tr>
    </tfoot>
  </table>
</div>




     </div>

    )
  }  




