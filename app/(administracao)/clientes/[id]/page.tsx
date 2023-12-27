
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
     console.log(dados)
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
          <h1 className="text-3xl font-medium text-center mt-3">{dados}</h1>

           
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





<div className="bg-gray-50 min-h-screen">
  <nav>
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hidden" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {/* <div className="w-10">
          <img Name="rounded-full" src="https://forbesthailand.com/wp-content/uploads/2021/08/https-specials-images.forbesimg.com-imageserve-5f47d4de7637290765bce495-0x0.jpgbackground000000cropX11699cropX23845cropY1559cropY22704.jpg" alt="" />
        </div> */}
      </div>
    </div>
  </nav>
  <div>
    <div className="p-4">
      <div className="bg-white p-4 rounded-md">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-700">Admin & User</h2>
          <div>
            <div>
              <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                <div>
                  <span>Name</span>
                </div>
                <div>
                  <span>Email</span>
                </div>
                <div>
                  <span>Role</span>
                </div>
                <div>
                  <span>Time</span>
                </div>
                <div>
                  <span>Edit</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                  <div className="px-2 flex">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div className="px-2">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                  <div className="px-2">
                    <span>John Deo</span>
                  </div>
                  <div>
                    <span>johndeo@gmail.com</span>
                  </div>
                  <div className="px-2">
                    <span>Admin</span>
                  </div>
                  <div className="px-2">
                    <span>28/12/2021</span>
                  </div>
                  <div className="px-2">
                    <select>
                      <option>Admin</option>
                      <option>User</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>Name
     </div>

    )
  }  




