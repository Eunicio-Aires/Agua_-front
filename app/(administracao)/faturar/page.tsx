import { getCompan } from '@/lib/cookiesConf'
import { Meses }  from '@/components/Meses'

export default function Faturar(){
  const idCom = getCompan()
  console.log(idCom)
  return(
    <div className="">
    
   {/* @ts-ignore  */}
    <Meses/>
    </div>
  )
}