'use-client'
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";
import Link from "next/link";
type Client ={
  _id:any;
  nome:String;
  apelido:String
}
type ConsumidoresProps ={
  clientes:Client[]
}
export  async function Cliente(client:ConsumidoresProps){
  const { clientes } = client;
  const response = await fetch('http://localhost:3101/listar',{cache:"no-cache"});
  const clients = await response.json();
  return(
    <div>
    <div className='w-full col-span1 relativ lg:[70vh] h[50vh] m-auto p-4 border rounded-lg bg-white overflow- scroll'>
    
    <ul>
      {clients.map((cliente: any) => (
        
        
     
       <li key={cliente._id}><Link href={`http://localhost:3000/clientes/${cliente._id}`}>{cliente.nome} {cliente.apelido}</Link></li>
      
          
      ))}
       </ul>
    </div>
    </div>
  )
}