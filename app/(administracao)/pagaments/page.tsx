
import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import BarChart from '@/components/payments/BarChart'
import Pagamentos from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
import Pagamentoss from "@/lib/pagamentos"
import { NextResponse } from 'next/server'

// async function getData(){
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const res = await fetch(`${baseUrl}/api/faturar`,{cache:"no-cache"})
//   // const res = await  Pagamentoss();
//   // const response = await res.json() 
  
//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// } 


export default async  function Pagaments(){
  // const response = await getData();
  // const faturasPagas = await response.data.ultimo[0].faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago")
  
  
        
        return(
          <div>

      
           

             {/* <div className="overflow-x-auto">
    <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
    <tr>
    <th></th> 
    <td>Mes</td> 
    <td>Consumo</td> 
    <td>Valor</td> 
    <td>F.Pagamento</td>
    <th></th> 
    </tr>
    </thead> 
    <tbody>
    {faturasPagas.map((mes:any)=>(
    <tr key={mes._id}>
    <th></th> 
    <td>{mes.mes}</td>
    <td>{mes.consumo}</td> 
    <td>{mes.valor}</td> 
    
    <td>{mes.formaDePagamento}</td> 
    
    </tr>
    ))}
    
    </tbody> 
    {/* </tfoot> */}
    {/* </table> */}
    
    
    {/* // </div> */}
            </div>
          
          

   
              )
}