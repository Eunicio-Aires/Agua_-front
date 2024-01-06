import Image from 'next/image'
import { Numero } from '@/components/Numero'
interface Fatura{
  _id:String;
// _idCl:String;
}
export function ModalMp({_id}:Fatura){
  return(
    <div>
  
{/* The button to open modal */}
<a href="#my_modal_8" className="btn"><h3 className="text-red-600">M-pesa</h3></a>

<div className="modal" id="my_modal_8">
  <div className="modal-box">
  <h3 className="font-bold text-lg text-red-600">M-pesa</h3>
  
    {/* <p className="py-4">Confirme o valor antes de introduzir o pin</p> */}
    <p className="text-center text-xs mt-3">Se pretende parcelar fatura aproxime ao fornecedor </p>
    < Numero _id={_id}  />
    <div className="modal-action">
   
     <a href="#" className="">

     <button className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

     </a>
     
    </div>
    {/* <p className="text-center text-xs">Se pretende parcelar a fatura aproxime ao fornecedor para negoceacao</p> */}
  </div>
  
</div>
</div>
  )
}