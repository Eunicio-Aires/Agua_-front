import  Header  from '@/components/Header'
import { Ultimom } from '@/components/payments/Ultimom'
import BarChart from '@/components/payments/BarChart'
import Pagamentos from '@/components/payments/Pagamentos'
import Meses      from '@/components/payments/Meses'
  


export default async function Pagaments(){
     
        
        return(
            <div>
              {/* @ts-expect-error Async Server Component */}
              <Ultimom/>
              
              <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
                <BarChart/>
                {/* @ts-expect-error Async Server Component */}
                <Pagamentos/>

              </div>
             {/* @ts-expect-error Async Server Component */}
              <Meses/>
            
            </div>
          
          

   
              )
}