import { Formda } from '@/components/Formda'
import { Numero } from '@/components/Numero'
import { ModalMp } from '@/components/payments/ModalMp'
import { ModalNum} from '@/components/payments/ModalNum'
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
          {/* max-w-7x1 */}
         
      {resulte ? (
        <div>
 <h1 className="mx-11 my-3 font-bold text-[20px] text-red-600 text-center mt-4" >{resulte.nome} {resulte.apelido}</h1>
<div className="p-3 mt-4">
    
  </div>

  
 
         <div > 
         
         <div>
         
         <div className="flex flex-wrap -m-4">
         {resulte.faturas.filter((fatura: { estado: string; }) => fatura.estado === "Nao pago").map((faturas:any)=>(
          <div className="xl:w-1/3 md:w-1/2 p-4 border-8 rounded-xl"  key={faturas._id}>
            <div className="bg-white p-6 rounded-xl">
            <p className='text-blue-600 text-center text-xl'>{faturas.mes}</p>
            <p className='text-xs'>{faturas.valor} Mts</p>
            <p className='text-xs'>U.L-{faturas.leitura}</p>
            <p className='text-red-600'>{faturas.estado}</p> 
            {/* < Numero _id={faturas._id}/> */}
            <div className='flex justify-between mt-3'>
            < ModalMp _id={faturas._id}/>
            < ModalNum _id={faturas._id} />
            {/* < PagarNum _id={faturas._id}/> */}
            </div>
            
            </div>
          </div>
         ))} 
         </div>
         </div>
            

        </div>
        <Formda _id={resulte._id} _idm={_id}/> 
        </div>
      ) : (
        <p>Nenhum resultado para exibir</p>
        
      )}
   
  </div> 
    )    
   
  }