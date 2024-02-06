
import Link from "next/link";
import { resolve } from "path";
import { MdEdit } from "react-icons/md";
import  { BiUserPlus } from "react-icons/bi";
import  SearchInPut  from '@/components/Search/SearchInPut'
import { Registar } from '@/components/Registar'


export default async function Zona() {
  const responseC = await fetch(`https://agua-p.vercel.app/adm/todos`,{cache:"no-cache"}).then((res) => res.json());

  const clients = await responseC.allClientes
  const numero  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo").length
  const ativos  = await responseC.allClientes.filter((cliente:any) => cliente.estado === "Activo")
  const seativo = await responseC.allClientes.filter((cliente: any) => cliente.estado !== "Activo");
  

  return (
 

    <section className="text-gray-600 body-font">
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>




<div className=" grid lg:grid-cols-5 gap-4 p-4 bg-gray-200"> 

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
          

          <Link href='/novoCliente' className="btn btn-outline btn-success mt-3 mb-3">
          <BiUserPlus/>
          </Link>
    
          
          <h1 className="text-center bold-400 text-xl mt-4 mb-3">Clientes</h1>

<div  className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">          
  <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <th></th> 
        <td>Nome</td> 
        <td>Codigo</td> 
        <td>F.N Pagas</td> 
        <td>Contato</td>
        <th>Estado</th> 
      </tr>
    </thead> 
    <tbody>
    {ativos.map((mes:any)=>(
      <tr key={mes._id} className="hover:bg-gray-300"   >
        

        <th></th> 
        <td>{mes.nome} {mes.apelido} </td>
        <td>{mes.codigo}</td> 
        <td> {mes.faturas.filter((fatura:any) => fatura.estado === "Nao pago").length} </td> 
         
        <td>{mes.telefone}</td> 
        
        <td> <Link  href={`/clientes/${mes._id}`} > {mes.estado}</Link> </td> 
         
      </tr> 
       ))}

</tbody> 
   
  </table>
</div>        
        </div>
      

</section>
  );
}







