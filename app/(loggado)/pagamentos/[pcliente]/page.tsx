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
  .slice(-5);
   
    
    return(

<section className="py-1 bg-blueGray-50">

      
<div className='h-28 bg-gradient-to-r from-indigo-400 to-cyan-400 static'> 

            <h2 className='pt-2 mt-3  text-center  text-2xl font-bold'>{cliente.client.nome}</h2>
            <div className='flex justify-between px-4 pt-4 '>
            <p className="text-sm">P. Pagar: {fatur.length}</p>
            <h2>estado:{cliente.client.estado}</h2>
        </div>
        </div>



<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
   

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
           
            <Movitel /> <Modal _id={zon._id} _idCl={cliente.client._id}/>
            </th>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
            {zon.valor} 
            </td>
            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            {zon.consumo}/{zon.leitura}
            </td>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="fas fa-arrow-up text-emerald-500 mr-4">i</i>
              {zon.mes}
            </td>
          </tr>
          ))}
          
        </tbody>

      </table>
    </div>
  </div>
</div>


<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
  <div className="mx-auto max-w-screen-xl px-4 w-full">
    {/* <h2 className="mb-4 font-bold text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, consequuntur.</h2> */}
    <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

    {fatur.map((zon:any) => ( 
      <div  key={zon._id}  className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg> */}
        </a>
        {/* <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a> */}
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            <h2 className="text-orange-600  text-sm text-center mt-3">{zon.mes}</h2>
            <h4 className="m-2 text-orange-200 font-bold ">{zon.valor} Mt </h4>

            <table className=" text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Consumo/m
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
              Leitura
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
          
            <tr className="border-b bg-red-100 border-red-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {zon.consumo}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {zon.leitura}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {zon.estado}
              </td>
            </tr>
            
          </tbody>
        </table>
          </div>
         
        </div>
        <div className="bg-white py-4 px-3">
          <h3 className="text-xs mb-2 font-medium">Faca pagamento parcelada</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Valor por m*3 e de 85mt
          </p>
          <div className="relative z-40 flex items-center gap-2">
            <a className="text-orange-600 hover:text-blue-500" href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
            <a className="text-orange-600 hover:text-blue-500" href="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
      ))}
      

    </div>
  </div>
          <h2 className="mt-4 text-center text-gray-600 font-xl">Faturas Pagas</h2>
  <table className=" text-center">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Mes
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
              Consumo
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
          {faturUl.map((zon:any) => ( 
            <tr key={zon._id} className="border-b bg-green-100 border-green-200">
              <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
              {zon.mes}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {zon.consumo}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {zon.valor}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
</div>

</section>
        
    )
}