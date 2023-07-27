
import Link from "next/link"
import { BsPersonFill,BsThreeDotsVertical } from "react-icons/bs"
import Head from 'next/head';
import Header from "@/components/Header";
import { RegistarZona } from "@/components/RegistarZona"; 
import { Cliente } from "@/components/Clientes";
import { Registar } from "@/components/Registar";
import { Chart } from "@/components/Charts"

type Zonas = {
  _id: any;
  zona: string;
}

type ZonasProps = {
  zonas: Zonas[];
}

export default async function Zona(props: ZonasProps) {
  
  
  const { zonas } = props;

  const data = await fetch("http://localhost:3101/listarzonas",{cache:"no-cache"});
  const respo = await data.json();

  return (

   <div>
    <RegistarZona/>
    <section className="text-gray-600 body-font bg-gray-50 h-screen  justify-center items-center">

        
    <div className="grid lg:grid-cols-5 gap-4 p-5">
    {respo.map((zon:any) => (
       

        <div key={zon._id} className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-2 rounded-lg">
          <Link href={`http://localhost:3000/clientes/${zon._id}`}><p>{zon.zona}</p></Link> 
          </div>
         
         
      ))}
       </div>
      
     
      
         {/* @ts-expect-error */}
         <Cliente/>
      
      </section>
     
      </div>
      
      
      
   
  );
}






