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
  const token = await getSession()
  const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    const dasos = await  fetch(`${baseUrl}/api/compoCliente/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
   
    
    
    const responseC = await dasos.clientes
    const numero  = await responseC.filter((cliente:any) => cliente.estado === "Activo").length
    const ativos  = await responseC.filter((cliente:any) => cliente.estado === "Activo")
    const seativo = await responseC.filter((cliente: any) => cliente.estado !== "Activo");
    

return (

      <main className=" min-h-screen p-4 mb-4">

    <div>{token}</div>
      <section className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">{numero} </h2>
                            <p>Conteúdo do Card 1...</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">Card 2</h2>
                            <p>Conteúdo do Card 2...</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-2">Card 3</h2>
                            <p>Conteúdo do Card 3...</p>
                            </div>
                        </div>
      
      
         </section>
      <Registar/>
      <Clientes responseC={responseC}/>


</main>





    );
  }
  