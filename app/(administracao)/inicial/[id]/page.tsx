import { getId } from "@/lib/cookiesConf"
import { Movitel } from '@/components/pagamento/Movitel';
import { Modal } from '@/components/Modal'
import { ModalNum } from "@/components/payments/ModalNum";
import Link from "next/link";
import { resolve } from "path";
import { MdEdit } from "react-icons/md";
import  { BiUserPlus } from "react-icons/bi";
import  SearchInPut  from '@/components/Search/SearchInPut'
import  Registar  from '@/components/Registar'
import { getCompan, getSession } from '@/lib/cookiesConf'
import { cookies } from "next/headers";
import Tabela from '@/components/Tabela'
import Clientes from "@/components/clientes/Clientes";




export default async function ClientComp({ params }: { params: { id: string } }){
  
  const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    const dasos = await  fetch(`${baseUrl}/api/compoCliente/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
   
    
    
    const responseC = await dasos.clientes
    const numero  = await responseC.filter((cliente:any) => cliente.estado === "Activo").length
    const ativos  = await responseC.filter((cliente:any) => cliente.estado === "Activo")
    const seativo = await responseC.filter((cliente: any) => cliente.estado !== "Activo");
    
    console.log(responseC)
    // const idfaempresa = await getCompan()
    // const secao = await getSession()
    return(

      <main className=" min-h-screen p-4 mb-4">
      <Registar/>
      {/* <Clientes responseC={responseC}/> */}


</main>






      
  //       < className="text-gray-600 body-font">
       
  // <input type="checkbox" id="my_modal_7" className="modal-toggle" />
  // <div className="modal" role="dialog">
  //   <div className="modal-box">
  //     <h3 className="text-lg font-bold">Hello!</h3>
  //     <p className="py-4">This modal works with a hidden checkbox!</p>
      
  //   </div>
  //   <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
  // </div>
  
  // <section className="flex flex-wrap justify-center">
  //                 <div className="w-full md:w-1/3 p-4">
  //                     <div className="bg-white rounded-lg shadow-md p-6">
  //                     <h2 className="text-xl font-bold mb-2">{numero} </h2>
  //                     <p>Conteúdo do Card 1...</p>
  //                     </div>
  //                 </div>
  //                 <div className="w-full md:w-1/3 p-4">
  //                     <div className="bg-white rounded-lg shadow-md p-6">
  //                     <h2 className="text-xl font-bold mb-2">Card 2</h2>
  //                     <p>Conteúdo do Card 2...</p>
  //                     </div>
  //                 </div>
  //                 <div className="w-full md:w-1/3 p-4">
  //                     <div className="bg-white rounded-lg shadow-md p-6">
  //                     <h2 className="text-xl font-bold mb-2">Card 3</h2>
  //                     <p>Conteúdo do Card 3...</p>
  //                     </div>
  //                 </div>
    
   
  //  </section>
  // <div className=" grid lg:grid-cols-5 gap-4 p-4 bg-gray-200"> 
  
  //             <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
  //               <div className="flex flex-col w-full pb-4">
  //                 <p className="text-2xl font-bold">{ativos.length}</p>
  //                 <p className="text-gray-600">Clientes ativos  </p>
  //               </div>
  //               <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
  //                 <span className='text-green-700 text-lg'>{ativos.length}</span>
  //               </p>
  //             </div>
              
  //             <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
  //               <div className="flex flex-col w-full pb-4">
  //               <p className="text-2xl font-bold">{seativo.length}</p>
  //                 <p className="text-gray-600">Desativados</p>
  //               </div>
  //               <p className="bg-red-400 flex justify-center items-center p-2 rounded-lg">
  //                 <span className='text-green-700 text-lg'>{seativo.length}</span>
  //               </p>
  //             </div>
  //             <div className="bg-white flex justify-btween w-full p-4 rounded">
  //               <div className=" flex flex-col w-full pb-4">
  //                 <p className="text-2xl font-bold">#</p>
  //                 <p className="text-gray-600">com mais de 3 faturas</p>
  //               </div>
  //             </div>
  //           </div>
            
  
  //           <Link href='/novoCliente' className="btn btn-outline btn-success mt-3 mb-3">
  //           <BiUserPlus/>
  //           </Link>
      
            
  //           <h1 className="text-center bold-400 text-xl mt-4 mb-3">Clientes</h1>
  

    );
  }
  