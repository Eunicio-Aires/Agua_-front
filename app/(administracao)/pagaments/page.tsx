
import  Header  from '@/components/Header'
import  Ultimom  from '@/components/payments/Ultimom'
import BarChart from '@/components/payments/BarChart'
import Pagamentos from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
import Link from "next/link"
  


export default async  function Pagaments(){
  
        
        return(
            <div>
              {/* @ts-ignore */}
              <Ultimom/>
            
              {/* @ts-ignore */}
              <Pagamentos/>


              
             
           
            
            </div>
          
          

   
              )
}