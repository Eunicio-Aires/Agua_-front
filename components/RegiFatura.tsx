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
    return(
        
         <div className="container px-5 py-24 mx-auto min-w-min">
          <p><Link href={`/imprimir/${resulte._id}`}></Link>ink</p>
          {/* max-w-7x1 */}
         
      {resulte ? (
        <div>
 <h1 className="mx-11 my-3 font-bold text-[20px] text-red-600 text-center mt-4" >{resulte.nome} {resulte.apelido}</h1>
<div className="p-3 mt-4">
    
  </div>

         <div > 
       </div>
        <Formda _id={resulte._id} _idm={_id}/> 

        <div className="overflow-x-auto m-4">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Mes</th> 
        <th>Consumo</th> 
        <th>VaLor</th> 
        <th>Leitura</th> 
        <th>Data de L </th> 
        <th>Forma de </th>
        870273516
      </tr>
    </thead>  
    <tbody>
    {resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").map((faturas:any)=>(
      <tr key={faturas._id }>
        <th className="bg-gradient-to-r from-red-500 to-orange-500"><Link href={`/imprimir/${faturas._id}`}>{faturas.estado}</Link></th> 
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
   
  </table>
</div>
        </div>
      ) : (
        <p>Nenhum resultado para exibir</p>
        
      )}
   
  </div> 
    )    
   
  }