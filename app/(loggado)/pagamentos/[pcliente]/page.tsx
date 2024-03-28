// import { NavBar } from '@/components/NavBar';
import { Movitel } from '@/components/pagamento/Movitel';
import { Numero } from '@/components/Numero'
import { Footer } from '@/components/Foter'
import { Modal } from '@/components/Modal'
import { GiReceiveMoney } from "react-icons/gi";
import Link from "next/link";
import ButPagar from '@/components/pagamento/ButPagar';
import Image from 'next/image'
import hands from '../../../public/hands4903050-1280e16238370891651090x613removebgpreview-1@2x copy.png';


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

      <div className="pt-1 min-h-screen bg-gradient-to-tr from-gray-50  via-slate-100 to-cyan-200">

          <div className="pt-2 bg-opacity-50 bg-white bg-blur-md shadow-lg rounded-lg fixed w-full mb-8">
                <h2 className ="text-center bg-gradient-to-r from-slate-100 to-indigo-700 bg-clip-text text-transparent text-xl font-semibold ">{cliente.client.nome}</h2>
                <p className ="text-center mb-4" >Aguas Mulungo</p>

                <div className='flex justify-between px-4 pt-4 '>
                  <p className="text-sm">P. Pagar: {fatur.length}</p>
                  <h2>estado:{cliente.client.estado}</h2>
               </div>
                
            </div>
      
      {/* <div className='h-28 bg-gradient-to-r from-indigo-400 to-cyan-400 static'> 

            <h2 className='pt-2 mt-3  text-center  text-2xl font-bold'>{cliente.client.nome}</h2>
            <div className='flex justify-between px-4 pt-4 '>
            <p className="text-sm">P. Pagar: {fatur.length}</p>
            <h2>estado:{cliente.client.estado}</h2>
        </div>
      </div> */}



      {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-10">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
   

      <div className="block w-full overflow-x-auto">
    
    </div>
  </div>
</div> */}




          <div className="fixed mt-32">
          <Image className ="opacity-40 "
          alt="hands"
          // Importing an image will
          // automatically set the width and height
          src={hands}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: '100%',
            height: 'auto',
          }}
          />
          </div>

          <section className="flex flex-wrap justify-center mt-28 absolute w-full">
          
              <div  className="w-full md:w-1/3 p-4">
                {fatur.map((zon:any) => ( 
                    <div key={zon._id}  className="bg-opacity-30 bg-white bg-blur-md shadow-lg p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 text-center "> {zon.mes} </h2>
                    {/* <p className=''>Conteúdo do Card 1...</p> */}
                    <div className="flex justify-between">
                        <div>Leitura atual</div>
                        <div><p >{zon.leitura} m</p></div>
                     </div>

                     <div className="flex justify-between">
                            <div>Leitura anterior</div>
                            <div>1212 m</div>
                     </div>

                     <div className="flex justify-between">
                            <div>Consumo</div>
                            <div>{zon.consumo} m</div>
                     </div>

                     <div className="flex justify-between">
                            <div>Valor a pagar</div>
                            <div className="text-red-900">{zon.valor}.00 Mtn</div>
                     </div>

                     {/* <ButPagar _id={zon._id} /> */}
                     {/* <button className="btn btn-sm mt-3 btn-accent">Accent</button> */}
                    </div>

))} 
                </div>
              
            </ section >


{/* <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
  <div className="mx-auto max-w-screen-xl px-4 w-full">
    <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

    {fatur.map((zon:any) => ( 
      <div  key={zon._id}  className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
    
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            <h2 className="text-orange-600 font-bold text-lg text-center mt-3">{zon.mes}</h2>
            <h4 className="m-2 text-orange-400 font-bold ">{zon.valor} Mt </h4>

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
          <h3 className="text-xs mb-2 font-medium">Pagamentos sem Taxas</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">
            Facilidade de Pagamento.
          </p>
          <div className="relative z-40 flex items-center gap-2">

          </div>
          </div>
        </div>
        <ButPagar _id={zon._id}/>
      </div>
      ))}
      

    </div>
  </div> */}
  {/* //        <h2 className="mt-10 text-center text-gray-600 font-xl">Faturas Pagas</h2>
  //         <p className="text-xs text-gray-400 text-center">Ultimas 5 faturas pagas</p>
  // <table className=" text-center">
  //         <thead className="border-b">
  //           <tr>
  //             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
  //               Mes
  //             </th>
  //             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
  //             Consumo
  //             </th>
  //             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
  //               Valor
  //             </th>
  //             <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
  //               Pago Por: 
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //         {faturUl.map((zon:any) => (  */}
  {/* //           <tr key={zon._id} className="border-b bg-green-100 border-green-200">
  //             <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
  //             {zon.mes}
  //             </td>
  //             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //             {zon.consumo}
  //             </td>
  //             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //             {zon.valor}
  //             </td>
  //             <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
  //             {zon.formaDePagamento}
  //             </td>
  //           </tr>
  //           ))}
  //         </tbody>
  //       </table> */}
</div>

// </div>
        
    )
}