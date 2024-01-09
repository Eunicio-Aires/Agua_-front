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
//         <div className=''> 
//              <NavBar/> 
            
//             <div className='h-28 bg-gradient-to-r from-indigo-400 to-cyan-400 static'> 
//             <h2 className='pt-2 mt-3  text-center  text-2xl font-bold'>{cliente.client.nome}</h2>
//             <div className='flex justify-between px-4 pt-4 '>
//             <p className="text-sm">P. Pagar: {fatur.length}</p>
//             <h2>estado:{cliente.client.estado}</h2>
//         </div>
//         </div>
       
//             <div className=' bg-gradient-to-r from-cyan-10  justify-items-center'>
//             <div  className=" mt-5">
//           <div className=' mt-2 p-3 rounded-lg'>
           
//   {fatur.map((zon:any) => ( 

// <div key={zon._id} className="card bg-base-100 shadow-xl mt-2">
// <div className="card-body">
//   <h2 className="  text-red-700 text-center text-2xl font-bold">{zon.mes}</h2>
   
//   <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} Mtn</p></div> 
//   <div className='flex justify-between px-4 pt-4 bg-gray-100 rounded-xl'> 
  
//    <div><p className='text-base'>Leitura </p></div>
//   <div><p className='text-base'>Consumo </p></div>  
//   <div><p className='text-base'>Estado  </p> </div>  

//   </div>

//   <div className='flex justify-between px-4 pt-4  rounded-xl'> 
  
//    <div><p className='text-base'>{zon.leitura} </p></div>
//   <div><p className='text-base'>{zon.consumo} </p></div>  
//   <div><p className='text-sm text-red-700'> {zon.estado} </p> </div>  

//   </div>
 
//   <div className=" card-actions justify-between ">
  
  
//   <div className="flex justify-between m-3">

//   <div className='m-3'> <Modal _id={zon._id} _idCl={cliente.client._id}/></div>
//   <div className='m-3'><Movitel /></div>
  
//   </div>
//   </div>
// </div>
// </div>
  

//  ))}
//    </div>
//    </div>

//     </div>

    
//     <div className='bg-base-200'>
//       <h1>Faturas Pagas</h1>
//     <div className=' bg-gradient-to-r from-cyan-10  justify-items-center'>
//             <div  className=" mt-5">
//           <div className='min-h-screen mt-2 p-3 rounded-lg'>
           
//   {faturUl.map((zon:any) => ( 

// <div key={zon._id} className="card bg-base-100 shadow-xl mt-2">
// <div className="card-body">
//   <h2 className="  text-red-700 text-center text-2xl font-bold">{zon.mes}</h2>
   
//   <div><p className='text-base text-red-700 font-extrabold'>{zon.valor} Mtn</p></div> 
//   <div className='flex justify-between px-4 pt-4 bg-gray-100 rounded-xl'> 
   
//    <div><p className='text-base'>Leitura </p></div>
//   <div><p className='text-base'>Consumo </p></div>  
//   <div><p className='text-base'>Estado  </p> </div>  

//   </div>

//   <div className='flex justify-between px-4 pt-4  rounded-xl'> 
  
//    <div><p className='text-base'>{zon.leitura} </p></div>
//   <div><p className='text-base'>{zon.consumo} </p></div>  
//   <div><p className='text-sm text-red-700'> {zon.estado} </p> </div>  

//   </div>
 
//   <div className=" card-actions justify-between ">
  
  

//   </div>
// </div>
// </div>
  

//  ))}
//    </div>
//    </div>
//     </div>
//     </div>





<section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    {/* <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
        </div>
      </div>
    </div> */}

    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                         Mes
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Valor
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Consumo/
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Leitura
                        </th>
          </tr>
        </thead>

        <tbody>
        {faturUl.map((zon:any) => ( 
          <tr key={zon._id} >
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
            {zon.mes}
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {zon.valor} 
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {zon.consumo}/{zon.leitura}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
              <Movitel /> <Modal _id={zon._id} _idCl={cliente.client._id}/>
            </td>
          </tr>
          ))}
          
        </tbody>

      </table>
    </div>
  </div>
</div>
{/* <footer className="relative pt-8 pb-6 mt-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Powered <Link href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Eunicio</Link> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer> */}
</section>
        // </div>
    )
}