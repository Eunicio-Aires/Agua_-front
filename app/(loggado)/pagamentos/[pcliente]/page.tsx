import { NavBar } from '@/components/NavBar';
import { Movitel } from '@/components/pagamento/Movitel';
import { Numero } from '@/components/Numero'
import { Footer } from '@/components/Foter'
import { Modal } from '@/components/Modal'

import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'

type Faturas={
    _id:String;
    mes:String;
    valor:Number;
    estado:String
}
interface Cliente{
 _id:String;
 nome:String;
 apelido:String;
 codigo:String
 faturas:Faturas[]
}
export default async function Page({ params }: { params: {pcliente: Cliente}}){
    const cliente = await fetch(`https://agua-p.vercel.app/adm/clientpr/${params.pcliente}`,{cache:"no-cache"}).then((res) => res.json()); 
    
    const fatura = await cliente.client.faturas
    const fatur = cliente.client.faturas.filter((fatura:Faturas) => fatura.estado === "Nao pago")
    const faturUl = cliente.client.faturas
  .filter((fatura: Faturas) => fatura.estado === "Pago")
  .slice(-10);
   
    
    return(
        <div className=''> 
             <NavBar/> 
            
            <div className='h-28 bg-gradient-to-r from-indigo-400 to-cyan-400 static'> 
            <h2 className='pt-2 mt-3  text-center  text-2xl font-bold'>{cliente.client.nome}</h2>
            <div className='flex justify-between px-4 pt-4 '>
            <p className="text-sm">P. Pagar: {fatur.length}</p>
            <h2>estado:{cliente.client.estado}</h2>
        </div>
        </div>
       
            <div className=' bg-gradient-to-r from-cyan-10  justify-items-center'>
            <div  className=" mt-5">
          <div className=' mt-2 p-3 rounded-lg'>
            {/* <h2 className='text-center'>Nao Pagas</h2> */}
            {/* <p className='text-center text-red-700'>{fatur.length}</p> */}
  {fatur.map((zon:any) => ( 

<div key={zon._id} className="card bg-base-100 shadow-xl mt-2">
<div className="card-body">
  <h2 className="  text-red-700 text-center text-2xl font-bold">{zon.mes}</h2>
   
  <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} Mtn</p></div> 
  <div className='flex justify-between px-4 pt-4 bg-gray-100 rounded-xl'> 
   {/* <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} mtn</p></div>  */}
   <div><p className='text-base'>Leitura </p></div>
  <div><p className='text-base'>Consumo </p></div>  
  <div><p className='text-base'>Estado  </p> </div>  

  </div>

  <div className='flex justify-between px-4 pt-4  rounded-xl'> 
   {/* <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} mtn</p></div>  */}
   <div><p className='text-base'>{zon.leitura} </p></div>
  <div><p className='text-base'>{zon.consumo} </p></div>  
  <div><p className='text-sm text-red-700'> {zon.estado} </p> </div>  

  </div>
 
  <div className=" card-actions justify-between ">
  {/* card-actions justify-end */}
  
  <div className="flex justify-between m-3">
  {/* <div><p className='text-base'>{zon.consumo} </p></div>   */}
  <div className='m-3'> <Modal _id={zon._id} _idCl={cliente.client._id}/></div>
  <div className='m-3'><Movitel /></div>
  
  </div>
  </div>
</div>
</div>
  

 ))}
   </div>
   </div>

    </div>

    {/* ultimas faturas Pagas */}
    <div className='bg-base-200'>
      <h1>Faturas Pagas</h1>
    <div className=' bg-gradient-to-r from-cyan-10  justify-items-center'>
            <div  className=" mt-5">
          <div className='min-h-screen mt-2 p-3 rounded-lg'>
           
  {faturUl.map((zon:any) => ( 

<div key={zon._id} className="card bg-base-100 shadow-xl mt-2">
<div className="card-body">
  <h2 className="  text-red-700 text-center text-2xl font-bold">{zon.mes}</h2>
   
  <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} Mtn</p></div> 
  <div className='flex justify-between px-4 pt-4 bg-gray-100 rounded-xl'> 
   
   <div><p className='text-base'>Leitura </p></div>
  <div><p className='text-base'>Consumo </p></div>  
  <div><p className='text-base'>Estado  </p> </div>  

  </div>

  <div className='flex justify-between px-4 pt-4  rounded-xl'> 
  
   <div><p className='text-base'>{zon.leitura} </p></div>
  <div><p className='text-base'>{zon.consumo} </p></div>  
  <div><p className='text-sm text-red-700'> {zon.estado} </p> </div>  

  </div>
 
  <div className=" card-actions justify-between ">
  
  
  {/* <div className="flex justify-between m-3">
  <div className='m-3'> <Modal _id={zon._id} _idCl={cliente.client._id}/></div>
  <div className='m-3'><Movitel /></div>
  
  </div> */}
  </div>
</div>
</div>
  

 ))}
   </div>
   </div>
    </div>
    </div>


    <div className="flex items-center justify-center min-h-screen bg-white">
  <div className="col-span-12">
    <div className="overflow-auto lg:overflow-visible">
      <div className="flex lg:justify-between border-b-2 border-fuchsia-900 pb-1">
        <h2 className="text-2xl text-gray-500 font-bold">All Users</h2>
        <div className="text-center flex-auto">
          <input
            type="text"
            name="name"
            placeholder="Search..."
            className="
              w-1/3
              py-2
              border-b-2 border-blue-600
              outline-none
              focus:border-yellow-400
            "
          />
        </div>

        <div>
          <a href="#">
            <button
              className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              All
            </button>
          </a>
          <a href="#">
            <button
              className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              Admin
            </button>
          </a>
          <a href="#">
            <button
              className="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
              "
            >
              User
            </button></a
          >
        </div>
      </div>
      <table className="table text-gray-400 border-separate space-y-6 text-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3 text-left">Mail</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Role</th>

            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
      
          <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">Gazi Rahad</td>
            <td className="p-3">gazi.rahad871@gmail.com</td>
            <td className="p-3">01648349009</td>
            <td className="p-3 uppercase">admin</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2"
                >ACTIVE</span
              >
            </td>
            <td className="p-3">
              <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                <i className="material-icons-outlined text-base">visibility</i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                <i className="material-icons-outlined text-base">edit</i>
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-gray-100 ml-2"
              >
                <i className="material-icons-round text-base">delete_outline</i>
              </a>
            </td>
          </tr>
       <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">Arif Uddin</td>
            <td className="p-3">gazi.rahad871@gmail.com</td>
            <td className="p-3">01648349009</td>
            <td className="p-3 uppercase">user</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2"
                >ACTIVE</span
              >
            </td>
            <td className="p-3">
              <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                <i className="material-icons-outlined text-base">visibility</i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                <i className="material-icons-outlined text-base">edit</i>
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-gray-100 ml-2"
              >
                <i className="material-icons-round text-base">delete_outline</i>
              </a>
            </td>
          </tr>
             <tr className="bg-blue-200 lg:text-black">
            <td className="p-3 font-medium capitalize">Rubel Amin</td>
            <td className="p-3">gazi.rahad871@gmail.com</td>
            <td className="p-3">01648349010</td>
            <td className="p-3 uppercase">admin</td>

            <td className="p-3">
              <span className="bg-green-400 text-gray-50 rounded-md px-2"
                >ACTIVE</span
              >
            </td>
            <td className="p-3">
              <a href="#" className="text-gray-500 hover:text-gray-100 mr-2">
                <i className="material-icons-outlined text-base">visibility</i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-gray-100 mx-2">
                <i className="material-icons-outlined text-base">edit</i>
              </a>
              <a
                href="#"
                className="text-red-400 hover:text-gray-100 ml-2"
              >
                <i className="material-icons-round text-base">delete_outline</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
        </div>
    )
}