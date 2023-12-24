
// import { BsPersonFill,BsThreeDotsVertical } from "react-icons/bs"
// import Head from 'next/head';
// import Header from "@/components/Header";
// import { RegistarZona } from "@/components/RegistarZona"; 
// import { Cliente }  from "@/components/Clientes";
// import { Registar } from "@/components/Registar";
// import {BsDatabase, BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
// import {Registar} from '@/components/Registar'
// import Zona from "../page";
// import  TopCards  from '@/components/TopCards'
// import OtherUsers from "@/components/outros";




// type Zona = {
//   _id: any;
//   zona: string;
// }

// type ZonasProps = {
//   zonas: Zona[];
// }

async function getDataClientes(){
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`https://agua-front.vercel.app/api/todos`,{cache:"no-cache"})

  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Zona() {

  const responseC= await getDataClientes();
  
  const clients = await responseC.allClientes
  // const numero  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo").length
  // const ativos  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo")
  // const seativo = await responseC.allClientes.filter((cliente: any) => cliente.estado !== "Activo");
  

  return (
 

    <section className="text-gray-600 body-font">

{/* <div className=" grid lg:grid-cols-5 gap-4 p-4">  
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{ativos.length}</p>
                <p className="text-gray-600">Daily Revenue  </p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>+18</span>
              </p>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">{seativo.length}</p>
                <p className="text-gray-600">Daily Revenue</p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>+18</span>
              </p>
            </div>
            <div className="bg-white flex justify-btween w-full p-4 rounded">
              <div className=" flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">7,846</p>
                <p className="text-gray-600">Daily Revenue</p>
              </div>
            </div>
          </div> */}

<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
            
            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Nome</td> 
        <td>Codigo</td> 
        <td>F.N Pagas</td> 
        <td>F.Pagamento</td>
        <th></th> 
      </tr>
    </thead> 
    <tbody>
    {clients.map((mes:any)=>(
      <tr key={mes._id}>
        <th></th> 
        <td>{mes.nome}</td>
        <td>{mes.codigo}</td> 
        <td>{mes.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length}</td> 
         
        <td>{mes.contacto}</td> 
       
      </tr>
       ))}

</tbody> 
   
  </table>
     
 
</div>
           
        </div>

</section>
  );
}







