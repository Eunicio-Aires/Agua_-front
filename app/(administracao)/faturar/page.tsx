
import { Meses }  from '@/components/Meses'

export default function Mes(){

  return(
    <div className="">
    {/* @ts-expect-error */}
    <Meses/>
    </div>
  )
}