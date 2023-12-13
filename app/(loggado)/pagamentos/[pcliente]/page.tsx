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
        </div>
    )
}