// import { NavBar } from '@/components/NavBar';
import { Movitel } from '@/components/pagamento/Movitel';
import { Numero } from '@/components/Numero'
import { Footer } from '@/components/Foter'
import { Modal } from '@/components/Modal'
import { GiReceiveMoney } from "react-icons/gi";
import Link from "next/link";
import ButPagar from '@/components/pagamento/ButPagar';
import Image from 'next/image'
import hands from '../../../../public/hands4903050-1280e16238370891651090x613removebgpreview-1@2x copy.png';
import { CiMenuBurger } from "react-icons/ci";


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

      <div className="pt-1 min-h-screen dark:bg-gray-900">
        {/* bg-gradient-to-tr from-gray-50  via-slate-100 to-cyan-200 */}
          <div className="bg-gradient-to-r from-indigo-400 to-indigo-400 shadow-lg rounded-lg  min-w-98 max-w-98  mb-8">
          <Link  href={`/`}> <CiMenuBurger className=' '/></Link> 
                <h2 className ="text-center bg-gradient-to-r from-slate-100 to-indigo-700 bg-clip-text text-transparent text-xl font-bold ">{cliente.client.nome} {cliente.client.apelido}</h2>
                <p className ="text-center mb-1" >Aguas Mulungo</p>

                <div className='flex justify-between px-4 pt-4 '>
                  <p className="text-sm">Faturas {fatur.length}</p>
                  <h2>{cliente.client.estado}</h2>
               </div>
                
            </div>

     




          <div className="fixed mt-6 min-w-full">
          <Image className ="opacity-40 min-w-full"
          alt="hands"
         
          src={hands}
          sizes="100vw"
         
          style={{
            width: '100%',
            height: 'auto',
          }}
          />
          </div>

          <section className="flex flex-wrap justify-center mt-2 absolute w-full">
          
              <div  className="w-full md:w-1/3 p-4">
                {fatur.map((zon:any) => ( 
                    <div key={zon._id}  className="bg-opacity-30 bg-white bg-blur-md shadow-lg p-6 rounded-lg mt-3">
                      {/* g-opacity-30 bg-white bg-blur-md */}
                    <h2 className="text-xl font-bold mb-2 text-center ">{zon.mes} </h2>
                    

                    <div className="flex justify-between">
                        <div>Leitura atual</div>
                        <div><p >{zon.leitura} m</p></div>
                     </div>

                     

                     <div className="flex justify-between">
                            <div>Consumo</div>
                            <div>{zon.consumo} m</div>
                     </div>
                     <div className="flex justify-between">
                            <div>Estado</div>
                            <div>{zon.estado}</div>
                     </div>

                     <div className="flex justify-between">
                            <div>Valor a pagar</div>
                            <div className="text-red-900 font-bold">{zon.valor}.00 Mtn</div>
                     </div>

                     <ButPagar _id={zon._id} />
                     {/* <button className="btn btn-sm mt-3 btn-accent">Accent</button> */}
                    </div>

))} 
                </div>



                
                <div className='mt-2'>     

<h2 className="mt-10 text-center text-gray-600 font-xl">Faturas Pagas</h2>
        <p className="text-xs text-gray-400 text-center">Ultimas 5 faturas pagas</p>

      <table className=" text-center rounded-lg">
          <thead className="border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4">
                Mes
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4">
              Consumo
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4">
              Leitura
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4">
                Valor
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-4">
                Pago Por: 
              </th>
            </tr>
          </thead>

          <tbody>
          {faturUl.map((zon:any) => ( 
            <tr key={zon._id} className="border-b bg-green-100 border-green-200">
            <td className="text-sm text-gray-900 font-bold px-3 py-4 whitespace-nowrap">
            {zon.mes}
            </td>
            <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
            {zon.consumo}
            </td>
            <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
            {zon.leitura}
            </td>
            <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
            {zon.valor}
            </td>
            <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
            {zon.formaDePagamento}
            </td>
          </tr>
          ))}
        </tbody>
      </table> 

</div>
              
            </ section >



      






        
</div>


        
    )
}