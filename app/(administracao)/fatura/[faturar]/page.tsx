
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import Link from "next/link"
import { GerarFatura } from '@/components/GerarFatura'
import { Numero } from '@/components/Numero'
interface Cliente {
  _id:String;
 
}

export default async function Page({ params }: { params: {faturar: Cliente } }) {
  

    const posts = await fetch(`http://localhost:3001/adm/oneclient/${params.faturar}`,{cache:"no-cache"}).then((res) => res.json());
    // const cliente = await posts.zonasl.cliente
    // const _id = await posts.zonasl._id
    // const zonaid = await 
    // const posts = await post.clientId;
    
    // const id=posts.clientId._id
    return (
      <section className="bg-white p-5 m-3 rounded">

        
<h1 className='text-4xl text-center'>{posts.clientId.nome} { posts.clientId.apelido}</h1>
      <h3 className='xl:text text-center text-green-400'>{ posts.clientId.codigo} </h3>

{/* @ts-expect-error */}
 <GerarFatura _id ={params.faturar} /> 
      <div  className="flex flex-col lg:flex-row items-center gap-5 mt-5">
      {posts.faturaNaop.map((zon:any) => ( 
     
     
      <div key={zon._id} className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
       
      <div className="text-center">
         <h2 className="text-4sm font-bold pb-2 text-green-400">{zon.mes}</h2>
          
          <h4 className=" text-gray-500 text-md">{zon.valor}Mtn</h4>  
          
          <BsPersonFill className="inline"/> <h4 className="inline text-gray-500 text-md">{zon.estado} </h4> 
          
          
          
          <Numero _id={zon._id}  />
        </div>
       
        </div> 
        
        
       
       
       
     ))}
    </div>  
     </section>
       
     
        
      
      
   

    )
  }  