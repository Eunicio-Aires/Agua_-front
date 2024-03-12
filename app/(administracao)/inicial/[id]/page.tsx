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
  const comp  = await getCompan()
  const baseUrl = process.env.NEXT_LOCAL_BASE_URL;
    const dasos = await  fetch(`${baseUrl}/api/compoCliente/${params.id}`,{ cache: 'no-store'}).then((res) => res.json())
   
    
    
    const responseC = await dasos.clientes
    const numero  = await responseC.filter((cliente:any) => cliente.estado === "Activo").length
    const ativos  = await responseC.filter((cliente:any) => cliente.estado === "Activo")
    const seativo = await responseC.filter((cliente: any) => cliente.estado !== "Activo");
    

return (

      <main className=" min-h-screen p-4 mb-4">
          <div> {camp}</div>
      <Registar/>
      <Clientes responseC={responseC}/>


</main>





    );
  }
  