import DefinirValor from '@/components/DefinirValor';
import { RegistarZona } from '@/components/RegistarZona'
import { Mes } from '@/components/Mes'
import Link from 'next/link'

export interface Mes{
    _id:String
}
export default async function Configuracoes(){
    // const zonas = await fetch("http://localhost:3101/listarzonas",{cache:"no-cache"})
    
    // const zona = await zonas.json();
    return(
        // <main className=''>     
        //     <form>
        //         <input type='text'/>
        //         <button>Add Mes</button>

        //     </form>
        <div>
            <RegistarZona/>
            <Mes/>
        {/* <DefinirValor/> */}
        {/* <ul>
            {zona.map((zona:any) => <li key={zona._id}> <Link href={`/configuracoes/${zona._id}`}>{zona.zona}</Link> </li>)}
        </ul> */}
            

        
        </div>
        // </main>
    )
}