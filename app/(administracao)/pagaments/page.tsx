
import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import Chart from '@/components/Charts'
import  Pagamentos  from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
// import  Pagamentoss  from "@/lib/pagamentos"
import { NextResponse } from 'next/server'


// const url = 'https://agua-front.vercel.app/api/faturar';


// const fetchData = async ()=>{
//   await new Promise((resolve)=>setTimeout(resolve,1000));
//   const response = await fetch(url)

//   if(!response.ok){
//     throw new Error('Falid to  fetch ')
//   }
//   const data = await response.json()
//   return data;
// }


// async function getData(){
  
//   const res = await fetch(`https://agua-p.vercel.app/adm/meses`,{cache:"no-cache"})
   
  
//   if(!res.ok){
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// } 


export default   function Pagaments(){
  // const response = await  getData()
  // const faturasPagas = await response.ultimo[0].faturas.filter((fatura: { estado: string; }) => fatura.estado === "Pago")
 
  
        
        return(

          
            
            <div className=''>
              {/* @ts-ignore  */}
              {/* <Pagamentos/> */}
              {/* @ts-ignore  */}
              {/* < Ultimom/>  */}
             {/* <div className="overflow-x-auto p-4">
             <Chart/>
    <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
    <tr>
    <th></th> 
    <td>Mes</td> 
    <td>Consumo</td> 
    <td>Valor</td> 
    <td>F.Pagamentoo</td>
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
   
    </table>
    
    
   </div> */}
   
            </div>
          
          
          
          

   
              )
}