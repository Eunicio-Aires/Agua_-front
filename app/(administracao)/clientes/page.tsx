
import Link from "next/link";
import { resolve } from "path";
import { MdEdit } from "react-icons/md";
import  { BiUserPlus } from "react-icons/bi";
import  SearchInPut  from '@/components/Search/SearchInPut'

// import { BsPersonFill,BsThreeDotsVertical } from "react-icons/bs"
// import Head from 'next/head';
// import Header from "@/components/Header";
// import { RegistarZona } from "@/components/RegistarZona"; 
// import { Cliente }  from "@/components/Clientes";

// import {BsDatabase, BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import { Registar } from '@/components/Registar'
// import Zona from "../page";
// import  TopCards  from '@/components/TopCards'
// import OtherUsers from "@/components/outros";

// type Zona = {
//   _id: any;
//   zona: string;
// }



// async function getDataClientes(){
//   await new Promise ((resolve)=> setTimeout(resolve,1000));
//   const res = await fetch(`https://agua-front.vercel.app/api/todos`,{cache:"no-store"})

//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function Zona() {
  const responseC = await fetch(`https://agua-p.vercel.app/adm/todos`,{cache:"no-cache"}).then((res) => res.json());
  // const responseC = res.allClientes.filter(cliente => cliente.estado === "Activo");


  // const responseC= await getDataClientes();
  
  const clients = await responseC.allClientes
  const numero  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo").length
  const ativos  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo")
  const seativo = await responseC.allClientes.filter((cliente: any) => cliente.estado !== "Activo");
  

  return (
 

    <section className="text-gray-600 body-font">


      {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>




<div className=" grid lg:grid-cols-5 gap-4 p-4">  
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">{ativos.length}</p>
                <p className="text-gray-600">Clientes ativos  </p>
              </div>
              <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>{ativos.length}</span>
              </p>
            </div>
            
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
              <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold">{seativo.length}</p>
                <p className="text-gray-600">Desativados</p>
              </div>
              <p className="bg-red-400 flex justify-center items-center p-2 rounded-lg">
                <span className='text-green-700 text-lg'>{seativo.length}</span>
              </p>
            </div>
            <div className="bg-white flex justify-btween w-full p-4 rounded">
              <div className=" flex flex-col w-full pb-4">
                <p className="text-2xl font-bold">#</p>
                <p className="text-gray-600">com mais de 3 faturas</p>
              </div>
            </div>
          </div>
          <SearchInPut />

          <Link href='/novoCliente' className="btn btn-outline btn-success mt-3 mb-3">
          <BiUserPlus/>
          </Link>
          {/* <Registar/> */}
                  {/* modal button */}
          {/* <label htmlFor="my_modal_7" className="btn">No Cliente</label> */}
          

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
        <th>Mais</th> 
      </tr>
    </thead> 
    <tbody>
    {ativos.map((mes:any)=>(
      <tr className="hover:bg-gray-300" key={mes._id}  >
        <th></th> 
        <td>{mes.nome} {mes.apelido} </td>
        <td>{mes.codigo}</td> 
        <td>{mes.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length}</td> 
         
        <td>{mes.telefone}</td> 
        <td> <Link href={`/clientes/${mes._id}`} ><MdEdit /></Link> </td> 
       
      </tr>
       ))}

</tbody> 
   
  </table>
</div>        
        </div>
      

</section>
  );
}







