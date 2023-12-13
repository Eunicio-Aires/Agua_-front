
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
  
  const clientes = await fetch('http://localhost:3000/api/areas',{cache:"no-cache"});
    const resp = await clientes.json();
    const dadta = await resp.allAreas;
  

  return (
 

    <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto max-w-7x1">
  <div className="flex flex-wrap w-full mb-4 p-4">
    <div className="w-full mb-6 lg:mb-0">
      <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-gray-900">Detalhes</h1>
      <div className="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
  </div>
  <div className="flex flex-wrap -m-4">
         
  {dadta.map((zon:any) => (
    <div key={zon._id} className="xl:w-1/3 md:w-1/2 p-4 border-8 rounded-xl">  
      <div className="bg-white p-6 rounded-lg">
       
        <h3 className="tracking-widest tx-gradient-to-r from-red-700 to-indigo-600 text-xs font-medium title-font">{zon.cliente.filter((cliente: { estado: string; }) => cliente.estado === "Activo").length } </h3>
        <h1 className="text-xl text-gray-900 font-medium title-font mb-4">{zon.zona}</h1>
        <div >
          <Link className="btn btn-xs btn-accent" href={`/clientes/${zon._id}`}>Activ</Link>
          <Link className="btn btn-xs btn-error" href={`/clientes/${zon._id}`}>Desati</Link>
        </div>
        {/* <p className="leading-relaxed text-base">Nao pagas{mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").length}</p> */}
        {/* <p className="leading-relaxed text-base">Pagas{mes.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago").length}</p> */}
        {/* <Link href={`/faturar/${mes._id}`} className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true">Faturar</Link> */}
      </div>
    </div>
     ))}
   
    
    
  </div>
  </div>

</section>
    // </div>

  );
}







