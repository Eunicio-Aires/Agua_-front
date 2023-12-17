
import Link from "next/link"
import { BsPersonFill,BsThreeDotsVertical } from "react-icons/bs"
import Head from 'next/head';
import Header from "@/components/Header";
import { RegistarZona } from "@/components/RegistarZona"; 
import { Cliente } from "@/components/Clientes";
import { Registar } from "@/components/Registar";




type Zona = {
  _id: any;
  zona: string;
}

type ZonasProps = {
  zonas: Zona[];
}


export default async function Zona() {
 
  // console.log(dadta)

  return (
 

    <section className="text-gray-600 body-font">

{/* 
<div className="container px-5 py-24 mx-auto max-w-7x1">
  <div className="flex flex-wrap w-full mb-4 p-4">
   <div className="w-full mb-6 lg:mb-0">
      <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Detalhes</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
  </div>
  <div className="flex flex-wrap -m-4">
         
  {dadta.allAreas.map((zon:any) => ( 
    <div key={zon._id} className="xl:w-1/3 md:w-1/2 p-4 border-8 rounded-xl">  
      <div className="bg-white p-6 rounded-lg">
       
        <h3 className="tracking-widest tx-gradient-to-r from-red-700 to-indigo-600 text-xs font-medium title-font">{zon.cliente.filter((cliente: { estado: string; }) => cliente.estado === "Activo").length } </h3>
        <h1 className="text-xl text-gray-900 font-medium title-font mb-4">{zon.zona}</h1>
        <div >
          <Link className="btn btn-xs btn-accent" href={`/clientes/${zon._id}`}>Activ</Link>
          <Link className="btn btn-xs btn-error" href={`/clientes/${zon._id}`}>Desati</Link>
        </div>
      </div>
    </div>
     ))}
   
  
    
  </div>
  </div> */}
   

</section>
  );
}







