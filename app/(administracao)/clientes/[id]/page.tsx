

import Link from "next/link"
import React, { SyntheticEvent } from 'react';
import { Movitel } from '@/components/pagamento/Movitel';
import { Modal } from '@/components/Modal'
import {BsDatabase, BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { ModalNum } from "@/components/payments/ModalNum";
import { AiTwotoneEdit } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import {Registar} from '@/components/Registar'
import Zona from "../page";
import { TopCards } from '@/components/TopCards'
import OtherUsers from "@/components/outros";
import Editar from "@/components/clientes/Editar";


    export default async function ClienteId({ params }: { params: { id: string } }){
      const posts = await  fetch(`https://agua-front.vercel.app/api/clienteId/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
      const dados = await posts.clientId.nome
      const dadosm = await posts.clientId.faturas
      const faturasNaoPagas = posts.clientId.faturas.filter((fatura: any) => fatura.estado === "Nao pago");
      const faturasPagas = posts.clientId.faturas.filter((fatura: any) => fatura.estado === "Pago").slice(-10);
     
    
    return (
      <div> 
          <h1 className="text-3xl font-medium text-center mt-3">{dados} {posts.clientId.apelido}</h1>
          <p className="text-center">{posts.clientId.codigo}</p>
          <h1 className="text-red-800">{faturasNaoPagas.length}</h1> 

           
         

<div className="overflow-x-auto m-4">
  <table className="table table-xs">
    <thead>
      <tr className='bg-gray-100'>
        <th></th> 
        <th>Mes</th> 
        <th>Consumo</th> 
        <th>VaLor</th> 
        <th>Leitura</th> 
        <th>Data de L </th> 
        <th>Forma de Pagamento</th>
      </tr>
    </thead>  
    <tbody>
    {faturasNaoPagas.map((fatura:any)=>(
      <tr key={fatura._id }>
        <th className="bg-gradient-to-r from-red-500 to-orange-500">{fatura.estado}</th> 
        <td>{fatura.mes}</td> 
        <td>{fatura.consumo}</td> 
        <td>{fatura.valor}</td>
        <td>{fatura.leitura}</td> 
        <td>{fatura.createdAt}</td> 
        <td><Movitel /></td>
        <td><Modal _id={fatura._id} _idCl={fatura._id}/></td>
        <td> <ModalNum _id={fatura._id} /> </td>
      </tr>
      ))}
      {faturasPagas.map((faturas:any)=>(
           <tr className="hover:bg-hover" key={faturas._id }>
           <th className="bg-gradient-to-r from-blue-600 to-violet-600">{faturas.estado}</th> 
           <td>{faturas.mes}</td> 
           <td>{faturas.consumo}</td> 
           <td>{faturas.valor}</td>
           <td>{faturas.leitura}</td> 
           <td>{faturas.createdAt}</td> 
           <td>{faturas.formaDePagamento}</td>
         </tr>
      ))}
    </tbody> 
    
  </table>
</div>


<Editar props={posts} />

     </div>

    )
  }  




