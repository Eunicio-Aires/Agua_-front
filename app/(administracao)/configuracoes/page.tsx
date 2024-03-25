import DefinirValor from '@/components/DefinirValor';
import { RegistarZona } from '@/components/RegistarZona'
import { Mes } from '@/components/Mes'
// import { getCompan, getSession } from '@/lib/cookiesConf'
import Link from 'next/link'

export interface Mes{
    _id:String
}
export default async function Configuracoes(){
   
    // const zonas = await fetch("http://localhost:3101/listarzonas",{cache:"no-cache"})
    
   
    return(
       
        <div>
            <Mes/>
        </div>
        
    )
}