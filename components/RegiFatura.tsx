import { Formda } from '@/components/Formda'
import { Numero } from '@/components/Numero'
import { ModalMp } from '@/components/payments/ModalMp'
import { ModalNum} from '@/components/payments/ModalNum'
import Link from 'next/link';
// import { PagarNum } from '@/components/payments/pagarNum'
interface Resultado{
    resulte:any;
    _id:String;
  }

  export  function RegisFatura({resulte, _id}:Resultado){
    
    // const {resulte,_id} = props
    // const ultimafatura = resulte.faturas.slice(-1)

    // const faturasNaoPagas = resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago");
    // const ultimoFaturaNaoPaga = faturasNaoPagas.pop();

    return(
        
         <div className="container px-5 py-24 mx-auto min-w-min">
       
         
      {resulte ? (
        <div>
 <h1 className="mx-11 my-3 font-bold text-[20px] text-red-600 text-center mt-4" >{resulte.nome} {resulte.apelido}</h1>
<div className="p-3 mt-4">
    
  </div>

         <div > 
       </div>
       <Link href={`/imprimir/${resulte._id}`}>imprimir</Link>
        <Formda _id={resulte._id} _idm={_id}/> 

        <div className="overflow-x-auto m-4">
  {/* <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Mes</th> 
        <th>Consumo</th> 
        <th>VaLor</th> 
        <th>Leitura</th> 
        <th>Data de L </th> 
        <th>Forma de </th>
        
      </tr>
    </thead>  
    <tbody>
    {resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").map((faturas:any)=>(
      <tr key={faturas._id }>
        <th className="bg-gradient-to-r from-red-500 to-orange-500"><Link href={`/imprimir/${resulte._id}`}>{faturas.estado}</Link></th> 
        <td>{faturas.mes}</td> 
        <td>{faturas.consumo}</td> 
        <td>{faturas.valor}</td>
        <td>{faturas.leitura}</td> 
        <td>{faturas.createdAt}</td> 
     
      </tr>
      ))}
      {resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago").map((fatur:any)=>(
           <tr key={fatur._id }>
           <th className="bg-gradient-to-r from-blue-600 to-violet-600">  {fatur.estado}</th> 
           <td>{fatur.mes}</td> 
           <td>{fatur.consumo}</td> 
           <td>{fatur.valor}</td>
           <td>{fatur.leitura}</td> 
           <td>{fatur.createdAt}</td> 
           <td> imprimir</td>
         </tr>
      ))}
    </tbody> 
   
  </table> */}

  {resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").map((faturas:any)=>(
   <div key={faturas._id } className="bg-white shadow-md rounded-lg p-4">
       <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold rounded-t-lg p-2 mb-2">
         {faturas.estado}
       </div>
       <div className="grid grid-cols-2 gap-2">
         <div>
           <p className="font-bold">Mês:</p>
           <p>{faturas.mes}</p>
         </div>
         <div>
           <p className="font-bold">Consumo:</p>
           <p>{faturas.consumo}</p>
         </div>
         <div>
           <p className="font-bold">Valor:</p>
           <p>{faturas.valor}</p>
         </div>
         <div>
           <p className="font-bold">Leitura:</p>
           <p>{faturas.leitura}</p>
         </div>
         <div>
           <p className="font-bold">Criado em:</p>
           <p>{faturas.createdAt}</p>
         </div>
      </div>
       <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
         Imprimir
      </button>
     </div>
     ))}

</div>
        </div>
      ) : (
        <p>Nenhum resultado para exibir</p>
        
      )}
   
  </div> 
    )    
   
  }

 